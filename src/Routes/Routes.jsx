import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import HomePages from "../Pages/Home-pages/HomePages";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
        Component : Books
      },
      {
        path : "bookDetails/:bookId",
        Component : BookDetails,
        loader : () => fetch('/Data.json')
      }
    ],

    errorElement : <ErrorPage></ErrorPage>
  }

]);