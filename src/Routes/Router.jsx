import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SkillDetails from "../pages/SkillDetails";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "skilldetail/:id",
        element: <SkillDetails />,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
