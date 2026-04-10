import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books);

  const { bookId } = useParams();
  // console.log(bookId);

  const mainData = books.find((book) => book.bookId == bookId);
  // console.log(mainData);

  const {
    bookName,
    image,
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    review,
    author,
  } = mainData;

  const [storeBooks, setStoreBooks] = useState([]);

  const handleRead = (currentBook) => {
    //1. store book id or book object
    //2. where store
    //3. array or collection
    //4. jodi array te already book ta thake tahole toast dekhabo.
    //5. jodi book ta na thake tahole book ta amra dekhabo.
    const isExistBook = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    // console.log(isExitBook);

    if (isExistBook) {
      alert("Book already exits");
    } else {
      setStoreBooks([...storeBooks, currentBook]);
    }

    console.log(currentBook, "Book");
  };

  return (
    <div className="grid grid-cols-2 shadow-sm gap-10  w-[85%] mx-auto my-10 p-10">
      <figure className="bg-zinc-200 flex justify-center items-center rounded-2xl">
        <img src={image} alt="Album" className="h-100" />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title text-3xl text-black">{bookName}</h2>
        <p className="text-2xl font-bold">By : {author}</p>
        <h3 className="border-t border-b py-2">{category}</h3>
        <p> Review : {review}</p>

        {tags.map((tag, ind) => {
          return (
            <div
              className="badge text-green-500 bg-green-100 font-bold"
              key={ind}
            >
              {" "}
              {tag}
            </div>
          );
        })}
        <div className="border-t py-2 space-y-3">
          <div className="flex justify-between items-center gap-5">
            <span>Number of pages :</span>{" "}
            <span className="font-bold text-xl">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <span> Publisher :</span>{" "}
            <span className="font-bold text-xl">{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <span>Year of publisher :</span>{" "}
            <span className="font-bold text-xl">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <span>Rating :</span>{" "}
            <span className="font-bold text-xl">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn" onClick={() => handleRead(mainData)}>
            Read
          </button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
