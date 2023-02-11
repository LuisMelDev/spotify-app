import { render } from "@testing-library/react";
import { HeaderText } from "./HeaderText";

const mockFn = jest.fn();

jest.mock("@/store/index", () => {
    return {
        useStore: () => ({
            token: "fdasfdasfaaaasdf",
            logout: mockFn,
            loading: false,
        }),
    };
});

describe("<HeaderText />", () => {
    it("render successfully", () => {
        const { getByText } = render(
            <HeaderText
                coloredText="color"
                text="textooooo"
                whiteText="texto blanco"
            />
        );
        const text = getByText(/textooooo/i);
        expect(text).toBeInTheDocument();
    });
});
