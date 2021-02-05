import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Card, Row, Col, Alert, Button, Modal } from "react-bootstrap";

export default function Conference({ data }) {
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = {
    method: "POST",
    url: "/api/conferences",
    headers: { "Content-Type": "application/json" },
    data: { title: title, url: link },
  };

  const addMeet = async () => {
    await axios
      .post("/api/conferences", {
        title: title,
        url: link,
      })
      .then(() => setShow(false))
      .catch((e) => console.log(e));
  };
  return (
    <Layout>
      <Alert style={{ marginTop: 10 }} variant="success" dismissible={false}>
        <Alert.Heading>Conference area 🤩</Alert.Heading>
        <p>
          This is a place where oldage people will conduct live interaction
          sessions to help you to learn and grow in public
        </p>
        <Button onClick={handleShow} variant="success">
          Create meet
        </Button>
      </Alert>
      <Row style={{ margin: 5 }}>
        {data.map((book) => (
          <Col key={book.data.title} md={4} style={{ padding: 10 }}>
            <Card border="dark">
              <Card.Img
                style={{
                  height: 200,
                  padding: 10,
                  objectPosition: "center",
                  objectFit: "contain",
                }}
                variant="top"
                src="ill2.svg"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: 24 }}>
                  {book.data.title}
                </Card.Title>
                <Card.Text>{book.data.owner}</Card.Text>
                <a
                  style={{
                    padding: 8,
                    backgroundColor: "#ff5e78",
                    borderRadius: 4,
                    color: "white",
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={book.data.url}
                >
                  Join meet
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 10 }}>
          <input
            className="p-2 mb-4"
            style={{ width: "100%" }}
            placeholder="Enter Meeting Name"
            required
            onChange={(e) => setTitle(e.target.value)}
            minLength={1}
          />
          <input
            className="p-2 mb-4"
            style={{ width: "100%" }}
            placeholder="Enter Meeting link"
            required
            onChange={(e) => setLink(e.target.value)}
            minLength={15}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addMeet} variant="primary">
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXTAUTH_URL;
  const res = await axios.get(`${url}/api/conferences`);
  const data = await res.data;
  return {
    props: { data: data.data },
  };
}
