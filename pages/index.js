import Head from "next/head";
import Header from "../components/Header";
import UserNavbar from "../components/UserNavbar";
import { getAllUsers } from "../pages/api/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <UserNavbar />
      <Container fluid="md">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {users.map((user) => (
            <Col key={user._id}>
              <Card>
                <div className="mh-100 mw-100">
                  <Image
                    src={user.picture} // Route of the image file
                    fluid={+true}
                    layout="responsive"
                    width={9}
                    height={16}
                    objectFit="cover"
                    alt={user.name}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.role}
                  </Card.Subtitle>
                  <Card.Text>{user.quote.length > 71 ? user.quote.slice(0,69) + "..." : user.quote}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
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
