import React, { useLayoutEffect } from "react";
import { HeaderText, Layout, GridAlbums } from "@/components/index";
import { useStore } from "@/store/index";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Head from "next/head";
import { ArtistAlbums } from "../interfaces/index";

const MyAlbums = () => {
    const router = useRouter();
    const { getArtist, token, clearArtist, myAlbums } = useStore();

    useLayoutEffect(() => {
        if (!token) {
            router.push("/login");
        }

        if (router.query.artistId) {
            getArtist(router.query.artistId as string);
        }
        return () => clearArtist();
    }, []);

    return (
        <Layout>
            <Head>
                <title>My Albums </title>
            </Head>

            <Box
                sx={{
                    px: "2rem",
                    pt: "3rem",
                    maxWidth: "42rem",
                    textAlign: "center",
                    margin: "0 auto",
                }}
            >
                <HeaderText
                    coloredText="guardados"
                    text="Disfruta de tu música a un solo click y descube que discos has guardado dentro de  “mis  álbumes”"
                    whiteText="Mis albumes"
                />
            </Box>

            <GridAlbums artist={{ albums: myAlbums } as ArtistAlbums} />
        </Layout>
    );
};

export default MyAlbums;
