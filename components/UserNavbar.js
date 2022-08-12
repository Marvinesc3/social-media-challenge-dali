import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Github, House, PersonBadge } from "react-bootstrap-icons";

import Link from "next/link";

export default function UserNavbar() {
  return (
    <Container>
      <style type="text/css">
      {`
        .navbar-custom {
          background-color: #0B132B;
        }
      `}
      </style>

      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="https://github.com/Marvinesc3/social-media-challenge-dali">
            <Github size="2rem" color="white" />
          </Navbar.Brand>
          { /* TODO: Fix matching <a> error */ }
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="./pages/user">
                <a>
                  <PersonBadge size="2rem" color="white"></PersonBadge>
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
