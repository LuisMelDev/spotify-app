import { ApiInstance } from "../config";

export const getArtists = async ({
    token,
    search = "",
    limit = 4,
    offset = 0,
}: {
    token: string;
    search?: string;
    limit?: number;
    offset: number;
}) => {
    const response = await ApiInstance.get(
        `/search?q=artist:${search}&type=artist&limit=${limit}&offset=${offset}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data.artists;
};

export const getArtistData = async ({
    token,
    id,
}: {
    token: string;
    id: string;
}) => {
    const response = await ApiInstance.get(`/artists/${id}/albums`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const responseArtist = await ApiInstance.get(`/artists/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return { ...responseArtist.data, albums: response.data.items };
};
