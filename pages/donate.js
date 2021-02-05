import { Card, Row, Col, Alert, Button, Modal } from "react-bootstrap";
import Layout from "../components/Layout";

export default function Donate() {
  return (
    <Layout>
      <Alert style={{ marginTop: 10 }} variant="success" dismissible={false}>
        <Alert.Heading>Donate area 🌼</Alert.Heading>
        <p>
          Donate to orphanages and be a part in helping the upcoming generation
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJZNHJJWsSvSwXCShmZZRDvPZFXCZvNdKBxcpWxxGXbmVJlJGMRdKqHlhzvhTZGmDBHB"
          style={{
            padding: 7,
            backgroundColor: "#ff5e78",
            borderRadius: 4,
            color: "white",
          }}
          rel="noopener noreferrer"
          target="_blank"
        >
          Apply for donation
        </a>
      </Alert>
    </Layout>
  );
}
