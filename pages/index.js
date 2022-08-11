import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllUsers } from "../pages/api/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home({ users }) {
  const userList = users.map((user) => {
    return <Col>{user.name}</Col>;
  });
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
        <Row md={4} sm={3} xs={2}>
          {userList}
          <style jsx>{``}</style>
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
