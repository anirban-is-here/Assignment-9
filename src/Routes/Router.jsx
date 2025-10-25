import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SkillDetails from "../pages/SkillDetails";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
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
        element: (
        <PrivateRoute>
          <SkillDetails />
        </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
        <PrivateRoute>
          <MyProfile/>
        </PrivateRoute>
        ),
      },

      {
        path: "updateProfile",
        element: (
        <PrivateRoute>
          <UpdateProfile/>
        </PrivateRoute>
        ),
      },
    ],
  },
]);
