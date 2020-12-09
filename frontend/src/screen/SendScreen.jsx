import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../actions/messageActions";

const SendScreen = () => {
  const messageReducer = useSelector((state) => state.messageReducer);
  const { error, message } = messageReducer;

  const [image, setImage] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (message.msg !== undefined) {
      if (message.msg === "success") {
        setSendSuccess(true);
      } else if (message.msg === "failed") {
        setSendSuccess(false);
      }
    }
  }, [message]);

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6} className="m-auto">
          <Card className="mb-4">
            <Card.Header>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Your Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </InputGroup>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <Card.Title style={{ fontSize: "1.40rem" }}>
                    Your Message:
                  </Card.Title>
                </Col>

                <Col style={{ paddingBottom: "10px" }} md="auto">
                  <Button
                    className="m-auto"
                    onClick={async () => {
                      setIsSending(true);
                      await dispatch(sendMessage(name, info, image));
                      setIsSending(false);
                    }}
                    disabled={isSending}
                  >
                    Send it away! {""}
                    <Spinner
                      animation="grow"
                      style={{ width: "20px", height: "20px" }}
                      hidden={!isSending}
                    />
                  </Button>
                </Col>
              </Row>

              <InputGroup>
                <FormControl
                  as="textarea"
                  rows={6}
                  value={info}
                  onChange={(e) => {
                    setInfo(e.target.value);
                  }}
                  required
                />
              </InputGroup>
            </Card.Body>

            <Card.Footer>
              <Row>
                <Col>
                  <i>Add a Feature Image!</i>
                </Col>
                <Col>
                  <Form.File
                    onChange={(e) => {
                      setImage(e.target.files);

                      if (e.target.files[0]) {
                        setImgUrl(URL.createObjectURL(e.target.files[0]));
                      } else {
                        setImgUrl("");
                      }
                    }}
                  />
                </Col>
              </Row>
            </Card.Footer>
          </Card>

          <Image src={imgUrl} style={{ width: "100%" }} rounded />

          {sendSuccess && (
            <h1>Message successfully sent! Feel free to send again!</h1>
          )}

          {error && <h1>{error}</h1>}

        </Col>
      </Row>
    </Container>
  );
};

export default SendScreen;
