import { getUserData } from "../api/users/[userId]";

export default function User({ userData }) {
  return (
    <div>
      <h1 className="d-5 light">{userData.name}</h1>
      <h1 className="d-5 light">{userData.picture}</h1>
    </div>
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
