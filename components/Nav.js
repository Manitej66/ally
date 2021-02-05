import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <Navbar.Brand style={{ fontWeight: 900 }}>
        <Link href="/">Ally 🎨</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {session ? (
          <Nav className="mr-auto">
            <Link href="/books">
              <p style={{ cursor: "pointer", padding: "15px 15px 0 0" }}>
                Books
              </p>
            </Link>
            <Link href="/conferences">
              <p style={{ cursor: "pointer", padding: "15px 15px 0 0" }}>
                Conferences
              </p>
            </Link>
            <Link href="/games">
              <p style={{ cursor: "pointer", padding: "15px 15px 0 0" }}>
                Games
              </p>
            </Link>
            <Link href="/donate">
              <p style={{ cursor: "pointer", padding: "15px 15px 0 0" }}>
                Donate
              </p>
            </Link>
          </Nav>
        ) : (
          <Nav className="mr-auto"></Nav>
        )}

        <Nav>
          {!session && (
            <>
              <Button onClick={() => signIn()} variant="outline-dark">
                Login
              </Button>
            </>
          )}
          {session && (
            <>
              <Button onClick={() => signOut()} variant="outline-dark">
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
