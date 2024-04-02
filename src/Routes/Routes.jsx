import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Academic from "../Pages/Academic/Academic";
import Skill from "../Pages/Skills/Skill";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Registation/SignUp";

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
    ],
  },
]);
