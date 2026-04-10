import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import HomePages from "../Pages/Home-pages/HomePages";
import Book from "../Pages/Book/Book";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/Book/BookDetails";

export const router = createBrowserRouter([
  {
    path : "/",
    Component : Mainlayout,
    children : [
      {
        index : true,
        Component : HomePages
      },
      {
        path : '/books',
        Component : Book
      },
      {
        path : "bookDetails/:bookId",
        Component : BookDetails,
        loader : () => fetch('/public/Data.json')
      }
    ],

    errorElement : <ErrorPage></ErrorPage>
  }

]);