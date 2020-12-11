import React, { useState, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getMessage, sendMessage } from "../actions/messageActions";
import axios from "axios"


const HomeScreen = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState();
  const [name, setName] = useState("Sedna");
  const [message, setMessage] = useState(" Hey there, go kill urself");
  const [count, setCount] = useState("Loading...");

  useEffect(async () => {
    
    const {data} = await axios.get("/api/message/count", {})

    setCount(data.count)

  }, [])

  return (
    <Container fluid>
      <Row
        style={{
          height: "50vh",

          width: "60%",
        }}
        className="m-auto"
      >
        <Col md={4}>
          <div style={{ marginTop: "75px", marginLeft: "50px" }}>
            <h1 className="mb-4" style={{ fontSize: "3.5rem" }}>
              Send a Message!
            </h1>

            <h5 style={{ width: "375px", fontSize: "1.8rem" }}>
              Send a message to someone around the world!
            </h5>

            <hr
              style={{
                backgroundColor: "#555555",
                height: 2,
              }}
            />

            <h5 style={{ width: "375px", fontSize: "1.8rem" }}>
              Messages are unique and will only be received by one person so
              make it count!
            </h5>
          </div>
        </Col>
        <Col md={4}>
          <div style={{ marginTop: "75px", marginLeft: "50px" }}>
            <h1 className="mb-4" style={{ fontSize: "3.5rem" }}>
              Receive Messages!
            </h1>

            <h5 style={{ fontSize: "1.8rem" }}>
              Troubled? Obtain a message unique to you!
            </h5>

            <hr
              style={{
                backgroundColor: "#555555",
                height: 2,
              }}
            />

            <h5 style={{ fontSize: "1.8rem" }}>
              You're Special! So is the message you'll get.
            </h5>
          </div>
        </Col>
        <Col>
          <Image
            src="https://isfunart.files.wordpress.com/2019/10/3b717e7cf09b41fd6b79e81b3bd1e7ec.jpg?w=423"
            style={{ height: "465px" }}
            rounded
            className="p-4"
          />
        </Col>
      </Row>

      <Row
        style={{
          width: "60%",
        }}
        className="m-auto"
      >
        <Col style={{ marginLeft: "50px", marginBottom: "50px" }}>
          <h1  >Number of Messages Sent: {count}</h1>
        </Col>



      </Row>

      <Row
        style={{
          width: "60%",
          justifySelf: "center",
          position: "relative",
        }}
        className="m-auto"
      >
        <LinkContainer to="/send" style={{ padding: "20px" }}>
          <Button
            className="m-auto"
            style={{ width: "300px", height: "100px" }}
          >
            Send a Message! <i className="fas fa-paper-plane" />
          </Button>
        </LinkContainer>

        <LinkContainer to="/receive" style={{ padding: "20px" }}>
          <Button
            className="m-auto"
            style={{ width: "300px", height: "100px" }}
          >
            Receive a Message! <i className="fas fa-hand-holding-heart" />
          </Button>
        </LinkContainer>
      </Row>
    </Container>
  );
};

export default HomeScreen;
