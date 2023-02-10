import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { CssBaseline } from "@mui/material";

import { NextPage } from "next";
import { theme } from "@/styles/theme";

import "@fontsource/montserrat";
import "@/styles/global.css";

type AppPropsWithLayout = AppProps & {
    Component: NextPage;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {typeof window !== undefined && <Component {...pageProps} />}
            </ThemeProvider>
        </>
    );
}
