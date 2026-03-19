import type { Book } from "../types/Book";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
  onDelete: (id: string) => void;
  onToggle: (book: Book) => void;
}

export default function BookList({ books, onDelete, onToggle }: Props) {
  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}