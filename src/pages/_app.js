// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matsuko</title>
        <link rel="icon" href="/img/m.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
