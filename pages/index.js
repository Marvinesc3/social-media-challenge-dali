import Head from 'next/head'
import { connectToDatabase } from "../lib/dbConnect";

export default function Home({ users }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <h1>Top 20 users</h1>
      <ul>
        {users.map((user) => (
          <li>
            <h2>{user.name}</h2>
            <h3>{user.quote}</h3>
            <p>{user.year}</p>
          </li>
        ))}
      </ul>
    </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const users = await db 
    .collection("public")
    .find({})
    .sort({ name: -1 })
    .limit(20) 
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  }
}
