import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";

function Game(props) {
  const game = props.game;
  return (
    <Card>
      <Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e9846e348%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e9846e348%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.6640625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_BASE_URL}/games`)
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    return res;
  });
  
  return {
    props: {
      games: result
    }
  }
}

export default function Home({ games }) {
  return (
    <>
      <Head>
        <title>My Game Awards</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main></main>
      <Container>
        <h1>My Game Awards</h1>
        <p>It's just the beginning</p>
        {games.map((game, i) => {
          return <Game game={game}></Game>;
        })}
      </Container>
    </>
  );
}
