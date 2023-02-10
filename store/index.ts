import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
    getArtists as getArtistsService,
    getArtistData,
} from "@/services/index";
import { ArtistAlbums, Artists, Album } from "interfaces";

interface State {
    token: string;
    search: string;
    page: number;
    artists: Artists;
    artist: ArtistAlbums;
    myAlbums: Album[];
    auth: (code?: string) => void;
    getArtists: () => void;
    getArtist: (id: string) => void;
    onSeach: (text: string) => void;
    onPaginate: (number: number) => void;
    logout: () => void;
    clearArtist: () => void;
    addAlbum: (album: Album) => void;
    deleteAlbum: (albumId: string) => void;
}

export const useStore = create<State>()(
    persist(
        (set, get) => ({
            token: "",
            page: 0,
            artists: {} as Artists,
            artist: {} as ArtistAlbums,
            search: "",
            myAlbums: [],
            auth: (token) => {
                set({ token: token });
            },
            logout: () => {
                set({ token: "" });
            },
            getArtists: async () => {
                const { token, search, page } = get();
                try {
                    const artists = await getArtistsService({
                        token,
                        offset: page * 4,
                        search,
                    });
                    set({ artists });
                } catch (error: any) {
                    if (error.response.status === 401) {
                        get().logout();
                        window.location.replace("/");
                    }
                    console.log(error);
                }
            },
            onSeach: (text) => {
                set({
                    search: text,
                    page: 0,
                });
                get().getArtists();
            },
            onPaginate: (page) => {
                set({
                    page,
                });
                get().getArtists();
            },
            getArtist: async (id) => {
                const { token } = get();
                try {
                    const artist = await getArtistData({ token, id });
                    console.log(artist);
                    set({ artist });
                } catch (error: any) {
                    if (error.response.status === 401) {
                        get().logout();
                        window.location.replace("/");
                    }
                    console.log(error);
                }
            },
            clearArtist: () => {
                set({
                    artist: {} as ArtistAlbums,
                });
            },
            addAlbum: (album) => {
                set((prev) => ({
                    myAlbums: [...prev.myAlbums, album],
                }));
            },
            deleteAlbum: (albumId) => {
                const newAlbums = get().myAlbums.filter(
                    (album) => album.id !== albumId
                );
                set({
                    myAlbums: newAlbums,
                });
            },
        }),
        {
            name: "spotify-storage", // name of the item in the storage (must be unique)
        }
    )
);
