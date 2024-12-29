import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import PendingAssignment from "./Pages/PendingAssignment";
import CreateAssignment from "./Pages/CreateAssignment";
import MyAttempted from "./Pages/MyAttempted";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoutes from "../PrivateRoutes";
import AllAssignment from "./Pages/AllAssignment";
import UpdateAssignment from "../Components/UpdateAssignment";

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
        element: (
          <PrivateRoutes>
            <PendingAssignment></PendingAssignment>
          </PrivateRoutes>
        ),
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
        path: "/allAssignment",
        element: <AllAssignment></AllAssignment>,
        loader : () => fetch('http://localhost:5000/assignment')
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/updateAssignment/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader : ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;