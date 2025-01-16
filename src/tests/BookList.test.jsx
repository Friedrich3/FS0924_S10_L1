import fantasy from "../data/fantasy.json";
import { fireEvent, render, screen } from "@testing-library/react";
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

//devo controllare che ci sia un searchbar
//devo controllare se il numero di carte e' minore del numero di oggetti dentro al json
//diversi test su carte

describe("Verifica che il .filter avvenga correttamente", () => {
  it("Controllo se la searchbar e presente", () => {
    //1)
    render(<BookList books={fantasy} />);
    // 2)
    const searchBar = screen.getByPlaceholderText(/cerca un libro/i);
    // 3)
    // 4)
    expect(searchBar).toBeInTheDocument();
  });

  it('Controllo il numero di carte quando inserisco un input',()=>{
     //1)
     render(<BookList books={fantasy} />);
     // 2)
     const searchBar = screen.getByPlaceholderText(/cerca un libro/i);
     // 3)
     fireEvent.change(searchBar,{target: { value:'witcher'}} )
     const cards1 = screen.getAllByRole('img');
     // 4)
     expect(cards1.length).toBeLessThan(fantasy.length)
  });
  it('Controllo il numero di carte quando inserisco un input',()=>{
    //1)
    render(<BookList books={fantasy} />);
    // 2)
    const searchBar = screen.getByPlaceholderText(/cerca un libro/i);
    // 3)
    fireEvent.change(searchBar,{target: { value:'warcraft'}})
    const cards2 = screen.getAllByRole('img');
    // 4)
    expect(cards2.length).toBeLessThan(fantasy.length)
 });
 it('Controllo il numero di carte quando inserisco un input impossibile',()=>{
  //1)
  render(<BookList books={fantasy} />);
  // 2)
  const searchBar = screen.getByPlaceholderText(/cerca un libro/i);
  // 3)
  fireEvent.change(searchBar,{target: { value:'fgabnoigagag'}})
  const cards2 = screen.queryAllByRole('img');
  // 4)
  expect(cards2).toHaveLength(0)
})
});
