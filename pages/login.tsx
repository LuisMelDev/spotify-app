import Head from "next/head";

import { Layout } from "../components";
import { ReactElement, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import { Arrow } from "icons";
import { useRouter } from "next/router";
import { useStore } from "../store/index";

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

export default function Login() {
    const router = useRouter();
    const { auth, token } = useStore();

    const handleLogin = () => {
        window.location.replace(spotifyUrl);
    };

    useEffect(() => {
        if (token) {
            router.push("/");
        }
        
        const access_token = router.asPath
            .split("&")[0]
            .replace("/login#access_token=", "");

        if (access_token !== "/login") {
            auth(access_token);
            router.push("/");
        }
    }, []);

    return (
        <Layout>
            <Head>
                <title>Spotify</title>
            </Head>

            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Box>
                        <Arrow sx={{ fontSize: "29rem" }} />
                    </Box>
                    <Box sx={{ maxWidth: "37rem" }}>
                        <Typography variant="h2">
                            Disfruta de la{" "}
                            <Typography
                                variant="inherit"
                                component="span"
                                color="text.secondary"
                            >
                                mejor música
                            </Typography>
                        </Typography>
                        <Typography sx={{ mt: "2.2rem", maxWidth: "21rem" }}>
                            Accede a tu cuenta para guardar tus albumes
                            favoritos.
                        </Typography>
                        <Typography
                            sx={{
                                mt: "6.5rem",
                                maxWidth: "21rem",
                                cursor: "pointer",
                                display: "flex",
                                gap: "1.5rem",
                            }}
                            onClick={handleLogin}
                        >
                            Log in con Spotify{" "}
                            <Arrow
                                fill="#fff"
                                sx={{
                                    fontSize: "inherit",
                                    transform: "rotate(45deg)",
                                }}
                            />
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Layout>
    );
}

