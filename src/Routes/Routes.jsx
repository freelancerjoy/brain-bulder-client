import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import MyToy from "../Pages/Shared/MyToy/MyToy";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivetRoute from "./PrivetRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/Shared/EroorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";

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
        path: "/alltoy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoute>
            <SingleToy></SingleToy>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brain-server-two.vercel.app/toy/${params.id}`),
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/details/:id",
        element: <AddToy></AddToy>,
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://brain-server-two.vercel.app/update/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
