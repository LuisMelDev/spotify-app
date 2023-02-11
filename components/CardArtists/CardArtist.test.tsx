import { render } from "@testing-library/react";
import { CardArtists } from "./CardArtists";
import userEvent from "@testing-library/user-event";
import { artists } from "@/mocks/index";

const artist = artists.items[0];

const mockFn = jest.fn();

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: mockFn,
    }),
}));

describe("<CardArtists />", () => {
    beforeEach(() => jest.clearAllMocks());
    it("render successfully", () => {
        const { baseElement } = render(<CardArtists item={{ ...artist }} />);

        expect(baseElement).toBeInTheDocument();
    });

    it("Click on card", async () => {
        const { getByTestId, debug } = render(
            <CardArtists item={{ ...artist }} />
        );
        const card = getByTestId("card-artist");

        await userEvent.click(card);
        expect(mockFn).toHaveBeenCalled();
    });
});
