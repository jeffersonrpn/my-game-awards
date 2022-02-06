import Head from "next/head";

import styled from "styled-components";
import { Typography, Button } from "@mui/material";

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

const Center = styled.div`
  text-align: center;
`;

function GamesWall(props) {
  const games = props.games;
  return (
    <>
      <Head>
        <title>NTC Game Awards</title>
      </Head>
      <Heading>
        <Grid>
          {games.map((game, i) => {
            return <img key={game.id} src={game.img} alt="{game.name}" />;
          })}
        </Grid>
        <Title>
          <Center>
            <Typography variant="h1" mb={2}>NTC Game Awards</Typography>
            <Button variant="contained" size="large" href="/votar">
              Participe
            </Button>
          </Center>
        </Title>
      </Heading>
    </>
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
