import Head from 'next/head'
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/logIn">
            login
          </Link>
        </li>
        <li>
          <Link href="/signUp">
            signUp
          </Link>
        </li>
        <li>
          <Link href="/top">
            top
          </Link>
        </li>
        <li>
          <Link href="/create">
            create
          </Link>
        </li>
        <li>
          <Link href="/edittodo">
            editTodo
          </Link>
        </li>
        <li>
          <Link href="/todoShow">
            todoShow
          </Link>
        </li>
        <li>
          <Link href="/sdfglsdrg">
            404
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
