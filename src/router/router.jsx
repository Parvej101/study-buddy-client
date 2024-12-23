import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import PendingAssignment from "./Pages/PendingAssignment";
import CreateAssignment from "./Pages/CreateAssignment";
import MyAttempted from "./Pages/MyAttempted";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/pending",
            element:<PendingAssignment></PendingAssignment>
        },
        {
            path: "/create",
            element: <CreateAssignment></CreateAssignment>
        },
        {
            path: "/myAttempted",
            element: <MyAttempted></MyAttempted>
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>
        },
      ],
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);

  export default router;