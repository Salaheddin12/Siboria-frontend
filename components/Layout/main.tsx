import Head from "next/head";
import React from "react";
import NavBar from "../Navbar";
import styles from "../../styles/Home.module.css";
import { Box, Container } from "@chakra-ui/react";

declare interface AppProps {
  children: React.ReactNode;
}
const Main = (AppProps: AppProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Siboria website" />
        <meta name="author" content="Ait Balkacm Salah Eddine" />
        <meta name="author" content="Ab-Salah" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SalahEddine12_" />
        <meta name="twitter:creator" content="@SalahEddine12_" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Siboria Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Salah Eddin Ait Belkacm - Homepage</title>
      </Head>
      <Container maxW="container.lg">
        <NavBar />
        {AppProps.children}
      </Container>
    </Box>
  );
};

export default Main;
