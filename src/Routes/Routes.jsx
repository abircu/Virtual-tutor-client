import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Academic from "../Pages/Academic/Academic";
import Skill from "../Pages/Skills/Skill";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Registation/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import Secret from "../Shared/Secret/Secret";
import PopularCard from "../Components/Home/PopularCard";
import PcourseDetails from "../Components/Home/PcourseDetails";
import Videos from "../Components/Videos";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Deshboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/academic",
        element: <Academic></Academic>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/popularcard",
        element: <PopularCard></PopularCard>,
      },
      {
        path: "/course/:courseId",
        element: <PcourseDetails></PcourseDetails>,
      },
      {
        path: "/videos",
        element: <Videos></Videos>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoutes>
            <Secret></Secret>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/deshboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
