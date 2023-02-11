import { render, waitFor } from "@testing-library/react";
import { Navbar } from "./Navbar";
import userEvent from '@testing-library/user-event';

const mockFn = jest.fn();

jest.mock("@/store/index", () => {
    return {
        useStore: () => ({
            token: "fdasfdasfaaaasdf",
            logout: mockFn,
        }),
    };
});

describe("<Navbar />", () => {
    it("render successfully", () => {
        const { getByText, debug } = render(<Navbar />);
        const text = getByText(/spotify/i);
        expect(text).toBeInTheDocument();
    });

    it("render menu", async () => {
        const { getByText } = render(<Navbar />);
        await waitFor(() => {
            const text = getByText(/buscar/i);
            expect(text).toBeInTheDocument();
        });
    });

    it("click link logout", async () => {
        const { getByText } = render(<Navbar />);
        await waitFor(() => {
            const link = getByText(/Cerrar/i);
            userEvent.click(link)
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
