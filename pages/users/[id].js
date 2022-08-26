import Header from "../../components/Header";
import Layout from "../../components/Layout";
import UserNavbar from "../../components/UserNavbar";
import { getUserData } from "../api/users/[userId]";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { List } from "react-bootstrap-icons";

export default function User({ userData }) {
  return (
    <Layout>
      <Header></Header>
      <UserNavbar></UserNavbar>
      <main>
        <div className="d-flex justify-content-center">
          <Card className="d-block w-25 mh-100">
            <Image
              priority
              src={userData.picture}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Card.Body>
              <Card.Text className="lead">{userData.quote}</Card.Text>
            </Card.Body>
          </Card>
          <div className="bd-highlight color-white mx-4">
            <Card>
              <Card.Body>
                <Card.Title>
                  {userData.name} | {userData.role}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {Object.keys(userData).map(
                  (key) =>
                    key != "role" && key != "name" && key != "picture" && key != "quote" && key != "_id" && userData[key] !== "" && (
                      <ListGroup.Item>{ key }: {userData[key]}</ListGroup.Item>
                    )
                )}
              </ListGroup>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await getUserData(id);

  console.log("res: " + res);

  const userData = await JSON.parse(JSON.stringify(res)); // weird fix but works

  return {
    props: {
      userData,
    },
  };
}
