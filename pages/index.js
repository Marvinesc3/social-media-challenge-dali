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
        <Row xs={1} md={4} className="g-4">
          {users.map((user) => (
            <Col key={user._id}>
              <Card style={{width: '18rem', height: '24rem'}}>
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={user.picture} // Route of the image file
                    layout="responsive"
                    width={10}
                    height={12}
                    objectFit="cover"
                    alt={user.name}
                  />
                </div>
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
