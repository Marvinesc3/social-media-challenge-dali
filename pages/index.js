import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllUsers } from "../pages/api/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home({ users }) {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Head>
        <title>Meet@Dali</title>
        <meta
          name="description"
          content="Post tidbits about software engineering, meet DALI members, follow your friends."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header home />
      <Container fluid="md">
        <Row xs={1} md={4} className="g-4">
          {users.map((user) => (
            <Col key={user._id}>
              <Card>
                <Card.Img variant="top" src={user.picture} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.quote}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </main>
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
