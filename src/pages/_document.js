// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    ></link>

    <link
      href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    ></link>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
