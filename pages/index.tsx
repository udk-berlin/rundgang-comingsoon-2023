import Head from "next/head";
import {
  Container,
  Main,
  MobileImage,
  DesktopImage,
} from "../components/sharedstyles";
import CursorLine from "../components/CursorLine";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Coming Soon UdK Rundgang 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <MobileImage src="mobile.svg" width="100%" height="100%" />
        <DesktopImage src="desktop.svg" width="100%" height="100%" />
        <CursorLine />
      </Main>
    </Container>
  );
}
