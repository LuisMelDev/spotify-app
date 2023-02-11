import { render } from "@testing-library/react";
import { CardAlbum } from "./CardAlbum";
import userEvent from "@testing-library/user-event";
import { artist } from "@/mocks/index";

const mockAddAlbum = jest.fn();
const mockDeleteAlbum = jest.fn();

jest.mock("@/store/index", () => {
    return {
        useStore: jest.fn(),
    };
});

import { useStore } from "@/store/index";

describe("<CardAlbum />", () => {
    beforeEach(() => jest.clearAllMocks());
    it("render successfully", () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            page: 0,
            myAlbums: [],
            addAlbum: mockAddAlbum,
            deleteAlbum: mockDeleteAlbum,
        }));
        const { baseElement } = render(
            <CardAlbum item={{ ...artist.albums[0] }} />
        );

        expect(baseElement).toBeInTheDocument();
    });

    it("Click on addAlbum", async () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            page: 0,
            myAlbums: [],
            addAlbum: mockAddAlbum,
            deleteAlbum: mockDeleteAlbum,
        }));
        const { getByRole } = render(
            <CardAlbum item={{ ...artist.albums[0] }} />
        );
        const card = getByRole("button");

        await userEvent.click(card);
        // const text = getByText(/ Guarda tus/i);
        expect(mockAddAlbum).toHaveBeenCalled();
    });
    it("Click onDeleteAlbum", async () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            page: 0,
            myAlbums: [{ ...artist.albums[0] }],
            addAlbum: mockAddAlbum,
            deleteAlbum: mockDeleteAlbum,
        }));
        const { getByRole } = render(
            <CardAlbum item={{ ...artist.albums[0] }} />
        );
        const card = getByRole("button");

        await userEvent.click(card);
        expect(mockDeleteAlbum).toHaveBeenCalled();
    });

    it("album without images", async () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            page: 0,
            myAlbums: [{ ...artist.albums[0] }],
            addAlbum: mockAddAlbum,
            deleteAlbum: mockDeleteAlbum,
        }));
        const { getByRole } = render(
            <CardAlbum item={{ ...artist.albums[0], images: [] }} />
        );
        const card = getByRole("button");

        await userEvent.click(card);
        expect(mockDeleteAlbum).toHaveBeenCalled();
    });
});
