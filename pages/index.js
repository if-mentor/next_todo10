import Head from 'next/head'
import Top from './Top';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Hello, Next.js HELLO!!</h1>
      </div>
      {/* <Top /> */}
    </>
  );
}

export default Home;
