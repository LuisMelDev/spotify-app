import { render } from "@testing-library/react";
import { GridArtists } from "./GridArtists";
import userEvent from "@testing-library/user-event";
import { artists } from "@/mocks/index";

const mockFn = jest.fn();

jest.mock("@/store/index", () => {
    return {
        useStore: jest.fn(),
    };
});

import { useStore } from "@/store/index";

describe("<GridArtists />", () => {
    beforeEach(() => jest.clearAllMocks());
    it("render successfully", () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            token: "fdasfdasfaaaasdf",
            onPaginate: mockFn,
            artists: {},
            page: 0,
        }));
        const { baseElement } = render(<GridArtists />);
        expect(baseElement).toBeInTheDocument();
    });

    it("render artists and paginate", async () => {
        //@ts-expect-error error mock
        useStore.mockImplementation(() => ({
            token: "fdasfdasfaaaasdf",
            onPaginate: mockFn,
            artists,
            page: 0,
        }));
        const { getByText, getByTestId } = render(<GridArtists />);
        const text = getByText(/resultados/i);
        expect(text).toBeInTheDocument();
        const button: any = getByTestId("NavigateNextIcon");

        await userEvent.click(button);

        expect(mockFn).toHaveBeenCalled();
    });
});
