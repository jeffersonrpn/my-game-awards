import Head from "next/head";

import styled from "styled-components";

const Heading = styled.div`
  display: grid;

  > * {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  gap: 0;
  grid-auto-flow: dense;
  height: 100vh;
  overflow: hidden;
  filter: brightness(0.2);

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  z-index: 999;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 1.8rem;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
`;

function GamesWall(props) {
  const games = props.games;
  return (
    <Heading>
      <Grid>
        {games.map((game, i) => {
          return <img key={game.id} src={game.img} alt="{game.name}" />;
        })}
      </Grid>
      <Title>
        <h1>NTC Game Awards</h1>
        <a href="/votar">Votar</a>
      </Title>
    </Heading>
  );
}

export default function Home({ games }) {
  return (
    <>
      <Head>
        <title>My Game Awards</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <GamesWall games={games}></GamesWall>
      </main>
    </>
  );
}

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
  };
}
