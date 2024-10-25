import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home/Home";
import ToyDetails from "../Pages/Home/ToysCategory/ToyDetails";
import SingleToy from "../Pages/AllToys/SingleToy";
import UpdateMyToy from "../Pages/MyToys/UpdateMyToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        // loader: () => fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys"),
        loader: () =>
          fetch(
            "https://assignment-11-toy-land-bd-m-73-server.vercel.app/totalToys"
          ),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "updateToy/:id",
        element: (
          <PrivateRoute>
            <UpdateMyToy></UpdateMyToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-land-bd-m-73-server.vercel.app/updateToy/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "addAToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "categories/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-land-bd-m-73-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
