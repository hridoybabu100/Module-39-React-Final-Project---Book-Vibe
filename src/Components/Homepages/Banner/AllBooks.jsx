import React, { use } from "react";
import BookCard from "../../UI/BookCard";
const promiseData = fetch("/Data.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(promiseData);
//   console.log(books);

  return (
    <div>
      <h1 className="text-black text-4xl font-bold text-center">Books</h1>

      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {books.map((book,index) => {
          return (
           <BookCard key={index} book={book}></BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
