import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import { Signout } from "./pages/SignOut";
import ReactPlayground from './ReactPlayGround';
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Form from './Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
    errorElement: (<NotFound />)
  },
  {
    path: "/signin",
    element: <Signin />,
    errorElement: (<NotFound />)
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: (<NotFound />)
  },
  {
    path: "/signout",
    element: <Signout />,
    errorElement: (<NotFound />)
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (<HomePage />),
        errorElement: (<NotFound />)
      },
      {
        path: "/home",
        element: (<HomePage />),
        errorElement: (<NotFound />)
      },
      {
        path: "/tasks",
        element: (<TaskListPage />),
        errorElement: (<NotFound />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />),
        errorElement: (<NotFound />)
      },
      
    ]
  }
]);

const App = () => {
  return (
    <>
         
    <Form />
    <RouterProvider router={router} />
    </>
  );
}

export default App