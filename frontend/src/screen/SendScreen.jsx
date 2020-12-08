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
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sendMessage } from "../actions/messageActions";

const SendScreen = () => {

  const [image, setImage] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false)

  const dispatch = useDispatch();

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
                        await dispatch(sendMessage(name, message, image));
                        setIsSending(false);
                    }}
                    disabled={isSending}
                  >
                    Send it away!
                  </Button>
                </Col>
              </Row>

              <InputGroup>
                <FormControl
                  as="textarea"
                  rows={6}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
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
                        console.log(URL.createObjectURL(e.target.files[0]));
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
        </Col>
      </Row>
    </Container>
  );
};

export default SendScreen;
