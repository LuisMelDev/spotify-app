import { useStore } from "@/store/index";
import { Box, Typography, Grid } from "@mui/material";
import { Album, ArtistAlbums } from "interfaces";
import React, { useEffect, useState } from "react";
import { CardAlbum } from "../CardAlbum/CardAlbum";

export const GridAlbums = ({ artist }: { artist: ArtistAlbums }) => {
    return (
        <Box maxWidth="80rem" margin="3rem auto 0 auto">
            {artist?.name && (
                <Box maxWidth="80rem" margin="3rem auto 0 auto">
                    <Typography>
                        Guarda tus álbumes favoritos de{" "}
                        <span>{artist.name}</span>
                    </Typography>
                </Box>
            )}
            <Grid container maxWidth="80rem" mt="1rem">
                {artist?.albums &&
                    artist?.albums.map((item: Album) => (
                        <CardAlbum item={item} key={item.id} />
                    ))}
            </Grid>
        </Box>
    );
};
