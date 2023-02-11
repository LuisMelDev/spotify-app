import { render } from "@testing-library/react";
import { GridAlbums } from "./GridAlbums";
import { artist } from "@/mocks/index";

jest.mock("@/store/index", () => {
    return {
        useStore: jest.fn(),
    };
});

import { useStore } from "@/store/index";

describe("<GridAlbums />", () => {
    beforeEach(() => jest.clearAllMocks());
    it("render successfully", () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            token: "fdasfdasfaaaasdf",
            page: 0,
            myAlbums: []
        }));
        const { getByText } = render(<GridAlbums artist={artist} />);
        const text = getByText(/Guarda tus/i);
        expect(text).toBeInTheDocument();
    });
});
