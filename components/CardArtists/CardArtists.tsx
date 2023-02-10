import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Item } from "interfaces";
import { useRouter } from "next/router";
import { memo } from "react";

export const CardArtists = memo(({ item }: { item: Item }) => {
    const router = useRouter();
    return (
        <Grid item xs={12} sm={6} md={3} onClick={() => router.push(`/artist/${item.id}`)}>
            <Card
                sx={{
                    width: "100%",
                    padding: "1.3rem",
                    background: "transparent",
                    boxShadow: "none",
                    borderRadius: "24px",
                    "&:hover": (theme) => ({
                        background: theme.palette.secondary.main,
                        color: theme.palette.primary.main,
                    }),
                }}
            >
                <CardMedia
                    sx={{ width: '100%', borderRadius: "24px", aspectRatio: '1/1', objectFit: 'cover' }}
                    image={item.images[0]?.url || '/empty.jpg'}
                    title={item.name}
                />
                <CardContent>
                    <Typography variant="h5" mb="1rem" noWrap>
                        {item.name}
                    </Typography>
                    <Typography>Followers: {item.followers.total}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
});
