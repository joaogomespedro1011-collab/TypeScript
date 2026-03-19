import { useState } from "react";
import type { Book } from "../types/Book";

interface Props {
    onAdd: (book: Book) => void;
}

export default function BookForm({ onAdd }: Props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState<"Lido" | "Não Lido">("Não Lido");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newBook: Book = {
            title,
            author,
            status
        };

        onAdd(newBook);

        setTitle("");
        setAuthor("");
        setStatus("Não Lido");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
                <option value="Não lido">Não lido</option>
                <option value="Lido">Lido</option>
            </select>

            <button type="submit">Adicionar</button>
        </form>
    );
}