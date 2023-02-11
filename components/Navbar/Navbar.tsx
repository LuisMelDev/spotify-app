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
import { Logout } from "@/icons/index";

export const Navbar = () => {
    const router = useRouter();
    const { token, logout } = useStore();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: "none" }}>
                <Toolbar>
                    <Link href="/" passHref legacyBehavior>
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{ flexGrow: 1 }}
                        >
                            Spotify
                        </Typography>
                    </Link>
                    {token && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: { xs: ".5rem", lg: "1.5rem" },
                                fontSize: { xs: ".8rem", sm: "1rem" },
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
                                <Typography
                                    display={{ xs: "none", sm: "block" }}
                                >
                                    Cerrar sesión
                                </Typography>
                                <Logout
                                    sx={{
                                        display: { xs: "block", sm: "none" },
                                    }}
                                />
                            </LinkComponent>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
