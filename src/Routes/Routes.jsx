import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";

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
    ],
  },
]);

export default router;
