import Head from "next/head";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <Layout>
      <Row style={{ marginTop: 20 }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 20,
          }}
          xs={12}
          md={6}
        >
          <h1 style={{ fontWeight: 900 }}>When oldage meets orphanage</h1>
          <p>
            aimed at bringing together individuals suffering from loneliness and
            depression and those lacking nurturing love of elderly role models.
          </p>
          <Button
            onClick={() => {
              if (session) router.replace("/books");
              else signIn();
            }}
            variant="success"
          >
            Get started
          </Button>
        </Col>
        <Col style={{ padding: 20 }} xs={12} md={6}>
          <Image src="ill1.svg" fluid />
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: 20 }}>
        <Col style={{ padding: 20 }} xs={12} md={6}>
          <Image style={{ padding: 30 }} src="ill5.svg" fluid />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 20,
          }}
          xs={12}
          md={6}
        >
          <h1 style={{ fontWeight: 900 }}>Play games</h1>
          <p>
            allows users to play and enjoy video games which makes you feel
            better
          </p>
          <Button
            onClick={() => {
              if (session) router.replace("/games");
              else signIn();
            }}
            variant="success"
          >
            Explore
          </Button>
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: 20 }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 20,
          }}
          xs={12}
          md={6}
        >
          <h1 style={{ fontWeight: 900 }}>Video conferences</h1>
          <p>
            allows old-age homes and orphanages to sign up and organise
            meetings, thus facilitating children and senior citizens to spend
            time together.
          </p>
          <Button
            onClick={() => {
              if (session) router.replace("/conferences");
              else signIn();
            }}
            variant="success"
          >
            Explore
          </Button>
        </Col>
        <Col style={{ padding: 20 }} xs={12} md={6}>
          <Image style={{ padding: 30 }} src="ill4.svg" fluid />
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: 20 }}>
        <Col style={{ padding: 20 }} xs={12} md={6}>
          <Image style={{ padding: 30 }} src="ill3.svg" fluid />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 20,
          }}
          xs={12}
          md={6}
        >
          <h1 style={{ fontWeight: 900 }}>Donations </h1>
          <p>
            allows users to volunteer and donate to old-age homes and orphanages
            through it.
          </p>
          <Button
            onClick={() => {
              if (session) router.replace("/donate");
              else signIn();
            }}
            variant="success"
          >
            Explore
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}
