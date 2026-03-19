const BASE_URL = "https://crudcrud.com/api/15a312b2aaca4dfd85305ed0a27f78ca/books";

export const getBooks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addBook = async (book: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });
  return res.json();
};

export const deleteBook = async(id : string ) => {
    await fetch(`${BASE_URL}/${id}` , {
        method : "DELETE"
    });
};

export const updateBook = async ( id: string, book: any) => {
    await fetch(`${BASE_URL}/${id}` , {
        method : "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(book)
    });
};