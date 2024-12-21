import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import PendingAssignment from "./Pages/PendingAssignment";
import CreateAssignment from "./Pages/CreateAssignment";
import MyAttempted from "./Pages/MyAttempted";

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
        }
      ],
    },
  ]);

  export default router;