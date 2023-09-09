import theme from "../themes/theme";
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
