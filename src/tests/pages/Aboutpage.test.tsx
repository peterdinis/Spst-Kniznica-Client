import {render, screen} from "@testing-library/react";
import Aboutpage from "../../pages/Aboutpage";

describe("<Aboutpage />", () => {
    test("Render heading O applikácií", () => {
        render(<Aboutpage />);
        const text = screen.getByText("O applikácií");
        expect(text).toBeInTheDocument();
    })

    test("Render aboutpage text", () => {
        render(<Aboutpage />);
        const text = screen.getByText("Webová stránka knižnice SPŠT v Bardejove. Na tejto stránke sú dostupné všetky knihy ktoré sa nachádzajú v školskej knižnici. Knižnicu nájdete pri vstupe na internát na 3 poschodí, smer doľava.");
        expect(text).toBeInTheDocument();
    })
})