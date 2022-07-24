import {render, screen} from "@testing-library/react";
import Homepage from "../../pages/Homepage";

describe("<Homepage />", () => {
    test("Render heading SPŠT Knižnica", () => {
        render(<Homepage />);
        const text = screen.getByText("SPŠT Knižnica");
        expect(text).toBeInTheDocument();
    })
})