import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllUsers } from "../pages/api/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";

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
        <Row xs={1} sm={2} md={4} lg={4} className="g-4">
          {users.map((user) => (
            <Col key={user._id} styles={{margin: "1 1rem"}}>
              <Card style={{ width: '20rem', height: '27rem' }}>
                  <Image
                    src={user.picture} // Route of the image file
                    layout="responsive"
                    width={9}
                    height={16}
                    objectFit="cover"
                    alt={user.name}
                  />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
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
