import Head from 'next/head'
import Test from './Test';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 面倒なので一時的に変更 */}
      {/* <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Hello, Next.js HELLO!!</h1>
      </div> */}
      <Test />
    </>
  );
}

export default Home;
