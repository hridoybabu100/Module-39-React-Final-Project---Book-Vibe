import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm space-y-6 p-10 ">
      <figure className="bg-[#F3F3F3] p-10 rounded-2xl">
        <img src={book.image} className="w-20" alt="Shoes" />
      </figure>
      <div className="space-y-4">
        <div className="flex gap-6">
          <div className="badge badge-secondary">Young Adult</div>
          <div className="badge badge-secondary">Identity</div>
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <h2 className="font-bold text-2xl">By : {book.author}</h2>

        <div className="border border-dotted"></div>
        <div className="card-actions flex justify-between gap-3 items-center">
          <h2>Fiction </h2>
          <div className="">
            <h2 className="flex gap-2 items-center">
              {book.rating}
              <CiStar />{" "}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
