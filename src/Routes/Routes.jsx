import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import MyToy from "../Pages/Shared/MyToy/MyToy";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoy",
        element: <AllToy></AllToy>,
        loader: () => fetch("http://localhost:5000/alltoy"),
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
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
