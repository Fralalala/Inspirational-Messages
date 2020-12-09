import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../actions/messageActions";

const ReceiveScreen = () => {
  const [isStart, setIsStart] = useState(true);
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);
  const [messageLoaded, setMessageLoaded] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const [name, setName] = useState("Loading...");
  const [profilePicSrc, setProfilePicSrc] = useState("Loading...");
  const [info, setInfo] = useState("Loading...");

  const dispatch = useDispatch();
  const messageReducer = useSelector((state) => state.messageReducer);
  const { message } = messageReducer;

  let url =
    "https://cdna.artstation.com/p/assets/images/images/020/387/082/large/taejune-kim-afternoon-1600-mark.jpg?1567584205";

  useEffect(() => {

    if (message.msg !== undefined) {
      setIsStart(false);
      if (message.msg === "success") {
        console.log("Message is success");
        setName(message.name);
        setProfilePicSrc(message.profilePicSrc);
        setInfo(message.message);
        setMessageLoaded(true);
      } else {
        console.log("Message is failed");
        setIsFailed(true);
      }
    }
  }, [message]);

  return (
    <Container fluid>
      <Row
        style={{
          width: "60%",
        }}
        className="m-auto pt-5"
      >
        {isStart === true && (
          <Button
            style={{ width: "500px", height: "500px", fontSize: "5rem" }}
            className="m-auto"
            onClick={async () => {
              setIsStart(false);
              setIsLoadingMessage(true);

              await dispatch(getMessage());

              setIsLoadingMessage(false);
            }}
          >
            <i
              className="fas fa-hand-holding-heart"
              style={{ fontSize: "5rem" }}
            ></i>{" "}
            Get a Message!
          </Button>
        )}

        {isLoadingMessage === true && (
          <Spinner
            animation="grow"
            style={{ width: "500px", height: "500px", background: "#f4abc4" }}
            className="m-auto"
          />
        )}

        {messageLoaded === true && (
          <Col md="auto" className="m-auto">
            <Card style={{ width: "600px" }}>
              <Card.Img variant="top" src={profilePicSrc} />
              <Card.Body>
                <Card.Title>Sent by: {name}</Card.Title>
                <Card.Text>{info}</Card.Text>

                <Row className="m-auto">
                  <Col style={{ textAlign: "center" }}>
                    <Button variant="primary" className="m-auto">
                      Send A Message! <i className="fas fa-paper-plane"></i>{" "}
                    </Button>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <Button variant="primary">
                      Get Another Message! <i className="fas fa-heart"></i>{" "}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )}

        {isFailed === true && (
          <Col style={{ textAlign: "center" }}>
            <i
              className="fas fa-sad-tear"
              style={{ fontSize: "400px", marginBottom: "20px" }}
            ></i>
            <h1>We dont have any available messages, try sending one!</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ReceiveScreen;
