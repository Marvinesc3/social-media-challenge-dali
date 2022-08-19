import Header from "../../components/Header";
import Layout from "../../components/Layout";
import UserNavbar from "../../components/UserNavbar";
import { getUserData } from "../api/users/[userId]";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const styles = {
  cardImage: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
};

export default function User({ userData }) {
  return (
    <Layout>
      <Header></Header>
      <UserNavbar></UserNavbar>
      <main>
        <div styles={styles.cardImage} className="d-flex justify-content-center">
          <Card className="d-block">
            <Image
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
          <div className="p-2 bd-highlight color-white">Flex item</div>
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
