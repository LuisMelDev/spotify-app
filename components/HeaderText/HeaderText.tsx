import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface HeaderTextProps {
    whiteText: string;
    coloredText: string;
    text: string;
}

export const HeaderText: FC<HeaderTextProps> = ({
    coloredText,
    text,
    whiteText,
}) => {
    return (
        <Box
            sx={{
                maxWidth: "28rem",
                margin: "0 auto",
            }}
        >
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
                    textAlign: { xs: "initial", sm: "center" },
                }}
            >
                {whiteText}{" "}
                <Typography
                    variant="inherit"
                    component="span"
                    color="text.secondary"
                >
                    {coloredText}
                </Typography>
            </Typography>
            <Typography
                sx={{
                    mt: "1.6rem",
                    textAlign: { xs: "justify", sm: "center" },
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};
