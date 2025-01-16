import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe('Montaggio componente ',()=>{
    it('montaggio welcome',()=>{
        // 1)
        render(<Welcome/>)
        // 2)
         const h1 = screen.getByText(/Benvenuti in EpiBooks!/i)

        // 3) NON presenti interazioni con la pagina
        // 4)
        expect(h1).toBeInTheDocument()
    })
})