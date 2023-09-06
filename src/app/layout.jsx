import "../styles/globals.css";
import theme from "../theme";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

export const metadata = {
  title: "Razor Swift",
  description: "Razor Swift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Delicious+Handrawn&family=Oswald:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
