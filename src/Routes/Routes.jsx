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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>console.erro</h1>,
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
          fetch(`https://brain-bulders-server.vercel.app/toy/${params.id}`),
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
