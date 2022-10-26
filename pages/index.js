import Header from "../components/Header";
import UserNavbar from "../components/UserNavbar";
import { getAllUsers } from "../pages/api/users";
import { getAllPosts } from "../pages/api/posts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import ReactCardCarousel from "react-card-carousel";
import Button from "react-bootstrap/Button";

const MyCarousel = {
  CARD_STYLE: {
    height: "15rem",
    width: "25rem",
    borderRadius: "10px",
    boxSizing: "border-box",
    color: "#FFF"
  },

  CONTAINER_STYLE: {
    position: "relative",
    height: "15vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle",
    marginBottom: "5rem",
    marginTop: "2rem",
  },
};

export async function getServerSideProps() {
  const users = await getAllUsers();
  const posts = await getAllPosts();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

async function likePost(postId) {
  console.log("liked post!");
  const res = await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
  })

  const data = await res.json()
  console.log(data);

}

export default function Home({ users, posts }) {
  return (
    <Layout>
      <main className="d-flex flex-column min-vh-100 my-4">
        <Header home></Header>
        <UserNavbar></UserNavbar>
        <section className="posts">
          <div style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2000}>
              {posts.map((post) => (
                <Card bg="dark" style={MyCarousel.CARD_STYLE}>
                  <Card.Header>{post.dateCreated}</Card.Header>
                  <Card.Body>
                    <Card.Title>{post.name}</Card.Title>
                    <Card.Text>{post.message}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary" onClick={() => likePost(post._id)}>{ post.likes }</Button>
                  </Card.Footer>
                </Card>
              ))}
            </ReactCardCarousel>
          </div>
        </section>
        <section className="profiles">
          <Container fluid="md">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {users.map((user) => (
                <Col key={user._id}>
                  <Card>
                    <div>
                      <Link href={`/users/${user._id}`}>
                        <a>
                          <Image
                            style={{
                              cursor: "pointer",
                            }}
                            src={user.picture} // Route of the image file
                            fluid={+true}
                            layout="responsive"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt={user.name}
                          />
                        </a>
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
        </section>
      </main>
    </Layout>
  );
}

