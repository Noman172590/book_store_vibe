import { createBrowserRouter } from "react-router";
import Root from "../Page/Root/Root";
import NavPath from "./NavPath";
import Home from "../Page/Root/Home/Home";

const router = createBrowserRouter([
  {
    path: NavPath.Home,
    Component:Root,
    children:[
        { index: true, Component: Home }
    ]
  },
]);

export default router