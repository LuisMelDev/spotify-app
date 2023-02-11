import { render } from "@testing-library/react";
import { Layout } from "./Layout";

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

describe("<Layout />", () => {
    it("render successfully", () => {
        const { getByText, debug } = render(
            <Layout>
                <div>hola</div>
            </Layout>
        );
        const text = getByText(/hola/i);
        expect(text).toBeInTheDocument();
    });
});
