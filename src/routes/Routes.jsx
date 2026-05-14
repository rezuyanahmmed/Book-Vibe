import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/homepage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/Errorpage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <Books></Books>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },

]);
