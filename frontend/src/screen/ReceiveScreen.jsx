import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

const ReceiveScreen = () => {
  return (
    <Container fluid>
      <Row
        style={{
          width: "60%",
        }}
        className="m-auto"
      >
        <Spinner
          animation="border"
          style={{ width: "250px", height: "250px" }}
          className="m-auto"
          hidden
        />
      </Row>
    </Container>
  );
};

export default ReceiveScreen;
