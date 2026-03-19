import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import { getBooks, addBook, deleteBook, updateBook } from "./services/api";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAdd = async (book: Book) => {
    await addBook(book);
    loadBooks();
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };

  const handleToggle = async (book: Book) => {
    const updated = {
      title: book.title,
      author: book.author,
      status: book.status === "Lido" ? "Não lido" : "Lido"
    };

    await updateBook(book._id!, updated);
    loadBooks();
  };

  return (
    <div>
      <h1>📚 Catálogo de Livros</h1>
      <BookForm onAdd={handleAdd} />
      <BookList
        books={books}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;