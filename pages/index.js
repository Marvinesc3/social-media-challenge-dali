import Head from "next/head";
import Header from "../components/Header";
import UserNavbar from "../components/UserNavbar";
import { getAllUsers } from "../pages/api/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from 'next/link'

export default function Home({ users }) {
  return (
    <Layout>
      <main className="d-flex flex-column min-vh-100">
        <Header home />
        <UserNavbar />
        <Container fluid="md">
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {users.map((user) => (
              <Col key={user._id}>
                <Card>
                  <div style={{position: "relative"}}>
                    <Link href={`/users/${user._id}`}>
                      <Image
                        style={{ cursor: "pointer", position: "relative !important"}}
                        src={user.picture} // Route of the image file
                        fluid={+true}
                        layout="responsive"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt={user.name}
                      />
                    </Link>
                  </div>

                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {user.role}
                    </Card.Subtitle>
                    <Card.Text>
                      {user.quote.length > 36
                        ? user.quote.slice(0, 34) + "..."
                        : user.quote}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const users = await getAllUsers();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
