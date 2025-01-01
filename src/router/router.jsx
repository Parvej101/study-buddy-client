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
import AssignmentDetails from "../Components/AssignmentDetails";
import TakeAssignment from "./Pages/TakeAssignment";
import MarkAssignment from "./Pages/MarkAssignment";

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
        loader : () => fetch('https://study-buddy-server-omega.vercel.app/submitAssignment'),
      },
      {
        path: "/create",
        element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>,
      },
      {
        path: "/myAttempted",
        element: <PrivateRoutes><MyAttempted></MyAttempted></PrivateRoutes>,
        loader : () => fetch('https://study-buddy-server-omega.vercel.app/myAttempts')
      },
      {
        path: "/allAssignment",
        element: <AllAssignment></AllAssignment>,
        loader : () => fetch('https://study-buddy-server-omega.vercel.app/assignment')
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
        element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>,
        loader : ({params}) => fetch(`https://study-buddy-server-omega.vercel.app/assignment/${params.id}`)
      },
      {
        path: "/assignmentDetails/:id",
        element:<PrivateRoutes><AssignmentDetails></AssignmentDetails></PrivateRoutes>,
        loader : ({params}) => fetch(`https://study-buddy-server-omega.vercel.app/assignment/${params.id}`)
      },
      {
        path : "/takeAssignment",
        element:<TakeAssignment></TakeAssignment>,
        
      },
      {
        path : "/markAssignment/:id",
        element:<PrivateRoutes><MarkAssignment></MarkAssignment></PrivateRoutes>,
        loader : ({params}) => fetch(`https://study-buddy-server-omega.vercel.app/submitAssignment/${params.id}`)
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;