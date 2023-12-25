import { Navigate, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import NotFound from "../pages/NotFound";
import AccountLayout from "../layouts/accounts";
import ProtectedRoute from "../ProtectedRoute";
import Projects from "../pages/projects"
import Members from "../pages/members"
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Navigate to="/account/projects" replace />
  },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  {
    path: "account",
    element: (
                <ProtectedRoute>
                <AccountLayout />
                </ProtectedRoute>
                ),
                children: [
                    { index: true, element: <Navigate to="/account/projects" replace /> },
                    {
                        path: "dashboard",
                        element: (<Dashboard/>)
                    },
                    {
                      path: "projects",
                      element: (<Projects />)
                    },
                    {
                      path: "members",
                      element: (<Members />)
                    },
                    { 
                        path: "logout", 
                        element: <Navigate to={"/signin"} /> 
                      },
                  ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
export default router;