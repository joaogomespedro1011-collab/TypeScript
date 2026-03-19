import type { Book } from "../types/Book";

interface Props {
    book : Book;
    onDelete : (id : string) => void;
    onToggle : (book : Book) => void;
}

export default function BookItem({ book , onDelete , onToggle} : Props){
    return(
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>Status: {book.status}</p>

            <button onClick={() => onDelete(book._id!)}>Remover</button>

            <button onClick={() => onToggle(book)}>Alterar Status</button>
        </div>
    );
}