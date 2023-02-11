import { FC, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useStore } from "@/store/index";

import { Navbar } from "../Navbar";

export const Layout: FC<any> = ({ children }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const { loading } = useStore();

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <>
            {isHydrated && !loading ? (
                <>
                    <Navbar />
                    <main>{children}</main>
                </>
            ) : (
                <Box
                    sx={{
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        background: "#222222",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress color="secondary" />
                </Box>
            )}
        </>
    );
};
