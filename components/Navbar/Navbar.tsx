import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Link as LinkComponent,
} from "@mui/material";
import Link from "next/link";
import { useStore } from "@/store/index";
import { useRouter } from "next/router";

export const Navbar = () => {
    const router = useRouter();
    const { token, logout } = useStore();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: "none" }}>
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{ flexGrow: 1 }}
                    >
                        Spotify
                    </Typography>
                    {token && (
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1.5rem",
                            }}
                        >
                            <Link href="/" passHref legacyBehavior>
                                <LinkComponent underline="none" color="inherit">
                                    Buscar
                                </LinkComponent>
                            </Link>
                            <Link href="/my-albums" passHref legacyBehavior>
                                <LinkComponent underline="none" color="inherit">
                                    Mis albumes
                                </LinkComponent>
                            </Link>
                            |
                            <LinkComponent
                                underline="none"
                                color="inherit"
                                onClick={() => {
                                    logout();
                                    router.push("/login");
                                }}
                            >
                                Cerrar sesión
                            </LinkComponent>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
