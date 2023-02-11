import { render } from "@testing-library/react";
import { InputSearch } from "./InputSearch";
import userEvent from "@testing-library/user-event";

const mockFn = jest.fn();

jest.mock("@/store/index", () => {
    return {
        useStore: () => ({
            token: "fdasfdasfaaaasdf",
            onSeach: mockFn,
        }),
    };
});

describe("<InputSearch />", () => {
    it("render successfully", () => {
        const { getByText } = render(<InputSearch />);
        const text = getByText(/search/i);
        expect(text).toBeInTheDocument();
    });

    it("typing in input and submit", async () => {
        const { getByRole } = render(<InputSearch />);
        const textInput: any = getByRole("textbox");
        const button: any = getByRole("button");

        await userEvent.type(textInput, "hola");
        await userEvent.click(button);

        expect(mockFn).toHaveBeenCalled();
        expect(textInput?.value).toEqual("hola");
    });
});
