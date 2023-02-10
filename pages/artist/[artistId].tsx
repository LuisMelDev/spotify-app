import React, { ReactElement, useLayoutEffect } from "react";
import { HeaderText, Layout, GridAlbums } from "@/components/index";
import { useStore } from "@/store/index";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { Certified } from "icons";

const Artist = () => {
    const router = useRouter();
    const { getArtist, token, clearArtist, artist } = useStore();

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
                <title>Artist </title>
            </Head>

            <Box
                maxWidth="80rem"
                margin="3rem auto 0 auto"
                sx={{
                    overflow: "hidden",
                    display: "flex",
                    gap: '4rem'
                }}
            >
                {artist?.images && (
                    <Box maxWidth="15rem">
                        <img
                            src={artist?.images[0]?.url || '/empty.jpg'}
                            style={{ width: "100%", borderRadius: "100%" }}
                            alt={artist.name}
                        />
                    </Box>
                )}
                {artist.followers && artist.name && (
                    <Box>
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                mb: ".5rem",
                            }}
                        >
                            <Certified /> Artista certificado
                        </Typography>
                        <Typography variant="h2" mb="2rem" fontWeight={700}>
                            {artist.name}
                        </Typography>
                        <Typography>
                            Followers: {artist.followers.total}
                        </Typography>
                    </Box>
                )}
            </Box>
            <GridAlbums artist={artist} />
        </Layout>
    );
};

export default Artist;
