import Head from "next/head";
import { Container, Spinner } from "react-bootstrap";
import Header from "./Nav";
import { useSession } from "next-auth/client";

export default function Layout({ children }) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Container>
      <Head>
        <title>Ally 🎨</title>
      </Head>
      <Header />
      {children}
    </Container>
  );
}
