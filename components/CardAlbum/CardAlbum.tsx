import { useStore } from "@/store/index";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { Album } from "interfaces";
import { useMemo } from "react";

export const CardAlbum = ({ item }: { item: Album }) => {
    const { addAlbum, deleteAlbum, myAlbums } = useStore();

    const onAddAlbum = () => {
        addAlbum(item);
    };

    const onDeleteAlbum = () => {
        deleteAlbum(item.id);
    };

    const isAdded = useMemo(
        () => myAlbums.some((album) => album.id === item.id),
        [myAlbums, item]
    );

    if(typeof window === 'undefined') return null;

    return (
        <Grid item xs={3}>
            <Card
                sx={{
                    width: "100%",
                    padding: "1.3rem",
                    background: "transparent",
                    boxShadow: "none",
                    borderRadius: "24px",
                }}
            >
                <CardMedia
                    sx={{ height: 240, borderRadius: "24px" }}
                    image={item.images[0]?.url || '/empty.jpg'}
                    src={item.images[0]?.url || '/empty.jpg'}
                    title={item.name}
                />
                <CardContent>
                    <Typography variant="h5" mb="1rem" noWrap>
                        {item.name}
                    </Typography>
                    <Typography> Publicado: {item.release_date}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "100px",
                            textTransform: "none",
                            fontWeight: 700,
                            boxShadow: "none",
                            paddingX: "2rem",
                        }}
                        color={isAdded ? "error" : "secondary"}
                        onClick={isAdded ? onDeleteAlbum : onAddAlbum}
                    >
                        {isAdded ? "- Remove album" : "+ Add album"}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
