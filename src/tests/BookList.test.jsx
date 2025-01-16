import fantasy from "../data/fantasy.json";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";

describe("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  it("controllo se Booklist viene caricata correttamente", () => {
    render(<BookList books={fantasy} />);
  });
  it("controllo sulla quantita di carte", () => {
    //1)
    render(<BookList books={fantasy} />);
    //2)
    const cards = screen.getAllByRole("img");
    //3) Non c'e' interazione
    //4)
    expect(cards).toHaveLength(fantasy.length);
  });
});
