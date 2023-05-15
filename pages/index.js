/**
 topページを目次みたいにしたい
 */


import Head from "next/head";
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">
              #2
            </Link>
          </li>
          <li>
            <Link href="/">
              #3
            </Link>
          </li>
          <li>
            <Link href="/">
              #4
            </Link>
          </li>
          <li>
            <Link href="/modalShow">
              #5 modalTodoShow
            </Link>
          </li>
          <li>
            <Link href="/">
              #6
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
