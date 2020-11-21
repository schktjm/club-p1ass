import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { TwitterShareButton, TwitterIcon } from 'react-share'

const Page = ({ id }) => {
    return (
        <Container>
            <Head>
                <meta name="twitter:card" content="summary_large_image" key="twittercard" />
                <meta name="twitter:site" content="@schktjm" />
                <meta name="twitter:creator" content="@schktjm" key="twittercreate" />
                <meta property="og:title" content="CLUB p1ass" />
                <meta property="og:description" content="UNOFFICIAL FANCLUB MEMBER'S CARD" />
                <meta property="og:image" content={`https://og-image-alpha-topaz.vercel.app/${id}`} key="ogp" />
            </Head>
            <Main>
                <Image src={`https://og-image-alpha-topaz.vercel.app/${id}`} alt="fanclub card" width={1016} height={532} />
                <Icons>
                    <Back>
                        <Link href="/">
                            <svg viewBox="0 0 24 24" fill="#fff" width="28px" height="28px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                        </Link>
                    </Back>

                    <TwitterShareButton hashtags={["club_p1ass", "p1ass_LT"]} url={`https://club-p1ass.schktjm.vercel.app/card/${id}`} >
                        <TwitterIcon size={48} round>
                        </TwitterIcon>
                    </TwitterShareButton>
                </Icons>
            </Main>
        </Container>
    )
}


Page.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
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
const Icons = styled.p`
  margin-top: 3rem;
  width: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Back = styled.button`
    margin: 0;
    padding: 0;
    width: 48px;
    height: 48px;
    background-color: black;
    border: none;
    box-shadow: none;
    border-radius: 50%;
`

export default Page;
