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
                sx={{
                    margin: "3rem auto 0 auto",
                    maxWidth: "80rem",
                    paddingX: "2rem",
                    overflow: "hidden",
                    display: "flex",
                    gap: { xs: "2.5rem", sm: "4rem" },
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                }}
            >
                {artist?.images && (
                    <Box maxWidth={{ xs: "10.5rem", md: "15rem" }}>
                        <img
                            src={artist?.images[0]?.url || "/empty.jpg"}
                            style={{
                                width: "100%",
                                borderRadius: "100%",
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
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
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: {
                                    xs: "2.5rem",
                                    sm: "4rem",
                                },
                                lineHeight: {
                                    xs: "3rem",
                                    sm: "5rem",
                                },
                                fontWeight: 700,
                                mb: "2rem",
                            }}
                        >
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
