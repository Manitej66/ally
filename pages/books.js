import axios from "axios";
import Layout from "../components/Layout";
import { Card, Row, Col } from "react-bootstrap";

export default function Books({ data }) {
  return (
    <Layout>
      <Row style={{ margin: 5 }}>
        {data.map((book) => (
          <Col key={book.data.name} md={4} style={{ padding: 10 }}>
            <Card border="dark">
              <Card.Img
                style={{
                  height: 200,
                  padding: 5,
                  objectPosition: "center",
                  objectFit: "cover",
                }}
                variant="top"
                src={book.data.cover_url}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: 24 }}>
                  {book.data.name}
                </Card.Title>
                <a
                  style={{
                    padding: 8,
                    backgroundColor: "#ff5e78",
                    borderRadius: 2,
                    color: "white",
                  }}
                  href={book.data.url}
                >
                  Download e-book
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ally.vercel.app";
  const res = await axios.get(`${url}/api/books`);
  const data = await res.data;
  return {
    props: { data: data.data },
  };
}
