import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Game Awards</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          My Game Awards
        </h1>
        <p>
          It's just the beginning
        </p>
    </Container>
    </>
  )
}
