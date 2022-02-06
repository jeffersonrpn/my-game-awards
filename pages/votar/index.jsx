import Head from "next/head";

import { Link, Container, Grid, Box } from "@mui/material";

export default function Home({ games }) {
  return (
    <>
      <Head>
        <title>NTC Game Awards - Votação</title>
      </Head>
      <Box bgcolor="#000">
        <Container fixed>
          <Grid container alignItems="center" justifyContent="center">
            <Link href="/">
              <img src="/imgs/ntc.gif" alt="NTC" width={60} />
            </Link>
          </Grid>
        </Container>
      </Box>
      <main>
        <Container fixed>
          <p>.</p>
        </Container>
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
