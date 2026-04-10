import React, { useContext } from "react";
import { BookContext } from "../../Context/Bookprovider";
import BookCard from "../UI/BookCard";

const ReadListBook = () => {
  const { storeBooks } = useContext(BookContext);

  if (storeBooks.length === 0) {
    return (
      <div className="flex justify-center items-center bg-zinc-300 h-[60vh] rounded-2xl">
        <h1 className="text-4xl font-bold">No Read Book Lis Found Hare</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {storeBooks.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ReadListBook;
