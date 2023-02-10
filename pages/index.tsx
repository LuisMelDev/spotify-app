import React, { ReactElement, useEffect } from "react";
import { HeaderText, Layout, InputSearch,GridArtists } from "@/components/index";
import { useStore } from "@/store/index";
import { useRouter } from "next/router";
import {
    Box,
} from "@mui/material";
import Head from "next/head";

const Home = () => {
    const router = useRouter();
    const { getArtists, onPaginate,token, artists } = useStore();

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
        getArtists();
    }, []);

    return (
        <Layout>
          <Head>
            <title>
              Search Artists
            </title>
          </Head>
            <Box
                sx={{
                    px: "2.5rem",
                    pt: "3rem",
                    maxWidth: "42rem",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                <HeaderText
                    coloredText="artistas"
                    text="Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos"
                    whiteText="Busca tus"
                />
                <InputSearch />
            </Box>
            <GridArtists />
        </Layout>
    );
};

export default Home;
