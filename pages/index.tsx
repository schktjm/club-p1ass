import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { createRef, useEffect, useState } from 'react'
import styled from 'styled-components'


const Home = () => {
  const [name, setName] = useState("");
  let inputRef: HTMLInputElement;

  useEffect(() => {
    inputRef.focus();
  }, [])
  return (
    <Container>
      <Head>
        <title>Create Next App </title>
        < link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" key="twittercard" />
        <meta name="twitter:site" content="@schktjm" />
        <meta name="twitter:creator" content="@schktjm" key="twittercreate" />
        <meta property="og:title" content="CLUB p1ass" />
        <meta property="og:description" content="UNOFFICIAL FANCLUB MEMBER'S CARD" />
        <meta property="og:image" content="https://club-p1ass.schktjm.vercel.app/p1ass-card.png" key="ogp" />
      </Head>

      < Main >
        <Image src="/p1ass-card.png" alt="p1ass fanclub card" width={1016} height={532} />
        <Register>
          <Input type="text" ref={ref => inputRef = ref} value={name} onChange={(e) => setName(e.target.value)} placeholder="Suzuki Taro" >
          </Input>
          <Link href={`/card/${encodeURIComponent(name)}`}>
            <Button type="button">Register</Button>
          </Link>
        </Register>
      </ Main >
    </Container>
  )
}

const Container = styled.div`
  background-image: url("https://imgur.com/hFqt3ih.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Register = styled.p`
  position: relative;
  margin-top: 4rem;
  background-color: black;
  font-size: 1rem;
  width: 496px;
  border-radius: 4px;
`;
const Input = styled.input`
  border: none;
  background-color: black;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  width: 496px;
  border-radius: 4px;

`;
const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 120px;
  height: 40px;
  font-size: 0.8rem;
  border: none;
  box-shadow: none;
  border-radius: 3px;
  background-color: #e79572;
  color: white;
`;

export default Home;
