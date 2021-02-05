import axios from "axios";
import Layout from "../components/Layout";
import { Card, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Games({ data }) {
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
                  objectFit: "contain",
                }}
                variant="top"
                src={book.data.cover_url}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 700, fontSize: 24 }}>
                  {book.data.name}
                </Card.Title>
                <Link href={`/${book.data.url}`}>
                  <Button
                    style={{ boxShadow: "1px 1px 3px #ccc" }}
                    variant="success"
                  >
                    Play now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await axios.get("http://localhost:3000/api/games");
  const data = await res.data;
  return {
    props: { data: data.data },
  };
}
