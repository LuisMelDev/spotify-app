import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
    palette: {
        primary: {
            main: "#222222",
        },
        secondary: {
            main: "#D6F379",
        },
        error: {
            main: "#E3513D",
        },
        text: {
            primary: "#ffffff",
            secondary: "#D6F379",
        },
    },
});

theme.typography = {
    ...theme.typography,
    h2: {
        fontFamily: "Montserrat",
        fontWeight: 700,
        fontSize: "64px",
        lineHeight: "78px",
    },
};
