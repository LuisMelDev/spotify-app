import { useStore } from "@/store/index";
import { Box, Typography, Grid, Pagination } from "@mui/material";
import { Item } from "interfaces";
import React from "react";
import { CardArtists } from "../CardArtists";

export const GridArtists = () => {
    const { onPaginate, artists, page } = useStore();

    if (Object.keys(artists).length === 0) return null;

    return (
        <Box maxWidth="80rem" margin="3rem auto 0 auto" sx={{ px: "2rem" }}>
            <Box maxWidth="80rem" margin="3rem auto 0 auto">
                <Typography>
                    Mostrando 4 resultados de {artists.total}
                </Typography>
            </Box>
            <Grid container maxWidth="80rem" mt="1rem">
                {artists?.items &&
                    artists.items.map((item: Item) => (
                        <CardArtists item={item} key={item.id} />
                    ))}
            </Grid>
            {artists.total !== 0 && (
                <Box mt="1rem" pb="2rem">
                    <Pagination
                    siblingCount={0}
                        page={page + 1}
                        count={Math.round(artists.total / 4) - 1}
                        color="secondary"
                        onChange={(_, page) => onPaginate(page)}
                    />
                </Box>
            )}
        </Box>
    );
};
