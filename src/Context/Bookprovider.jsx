import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const Bookprovider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  // const bookContext = useContext(BookContext);
  // console.log(bookContext);

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
      toast.error("The Book already added in read list.");
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read List`);
    }

    // console.log(currentBook, "Book");
  };
  const handleWishList = (currentBook) => {
    //1. store book id or book object
    //2. where store
    //3. array or collection
    //4. jodi array te already book ta thake tahole toast dekhabo.
    //5. jodi book ta na thake tahole book ta amra dekhabo.
    const isExistBook = wishListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    // console.log(isExitBook);

    if (isExistBook) {
      toast.error("The Book already added in Wish list.");
    } else {
      setWishListBooks([...wishListBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to read List`);
    }

    // console.log(currentBook, "Book");
  };

  const data = {
    handleRead,
    storeBooks,
    setStoreBooks,
    wishListBooks,
    setWishListBooks,
    handleWishList
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default Bookprovider;
