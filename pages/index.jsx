import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";

export async function getServerSideProps() {
  const result = await fetch(`${process.env.API_BASE_URL}/games`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      games: result,
    },
  }
}

function Game(props) {
  const game = props.game;
  return (
    <Card>
      <Card.Img src={game.img} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card>
  )
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
        <Row>
          {games.map((game, i) => {
            return (
              <Col key={i} sm="6" lg="3">
                <Game game={game}></Game>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
