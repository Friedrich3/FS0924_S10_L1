import fantasy from '../data/fantasy.json'
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";

//montaggio del componente
//all'avvio deve esserci il titolo Comment Area
//all'avvio non deve esserci il form 
// all'avvio non deve esserci la lista


//Al click di un libro la comment area deve comparire


describe('Verifica che il componente CommentArea venga renderizzato correttamente.',()=>{
    it('Viene montata booklist per montare anche commentArea con le varie props',()=>{
        render(<BookList books={fantasy} />);
    });

    it('All avvio comment area deve essere vuota ma il titolo deve essere presente',()=>{
        //1
        render(<BookList books={fantasy} />);
        //2
        const h3 = screen.getByText('Comment Area')
        
        //3
        //4
        expect(h3).toBeInTheDocument()
    });
    it('e non deve essere presente il form',()=>{
        //1
        render(<BookList books={fantasy} />);
        //2
        const button = screen.queryByText(/Invia/i)
        //3
        //4
        expect(button).not.toBeInTheDocument()
    });
    //ES 7
    it('e non deve essere presente la lista',()=>{
        //1
        render(<BookList books={fantasy} />);
        //2
        const commentList = screen.queryAllByTestId('listElement')
        //3
        //4
        expect(commentList).toHaveLength(0)
    });
})