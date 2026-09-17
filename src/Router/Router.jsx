import { createBrowserRouter } from "react-router";
import Root from "../Page/Root/Root";
import NavPath from "./NavPath";
import Home from "../Page/Root/Home/Home";
import { Component } from "react";
import Listed_Books from "../Page/Root/Listed_Books/Listed_Books";
import PageToRead from "../Page/Root/PageToRead/PageToRead";

const router = createBrowserRouter([
  {
    path: NavPath.Home,
    Component:Root,
    children:[
        { index: true, Component: Home },
        {
          path:NavPath.Listed_Books,
          Component:Listed_Books
        },
        {
          path:NavPath.PageToRead,
          Component:PageToRead
        },

    ]
  },
]);

export default router