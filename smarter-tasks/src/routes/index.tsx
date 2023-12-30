import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import NotFound from "../pages/NotFound";
import AccountLayout from "../layouts/accounts";
import ProtectedRoute from "../ProtectedRoute";
import Projects from "../pages/projects"
import Members from "../pages/members"
import Dashboard from "../pages/dashboard";
import ProjectDetails from "../pages/project_details";
import ProjectContainer from "../pages/projects/ProjectContainer";
import NewTask from "../pages/tasks/NewTask";

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
    path: "*",
    element: <NotFound />
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
                      element: <ProjectContainer />,

                      children: [
                        { index: true, element: <Projects /> },
                        {
                          path: ":projectID",
                          element: <ProjectDetails />,
                          children: [
                            { index: true, element: <></> },
                            {
                              path: "tasks",
                              children: [
                                { index: true, element: <Navigate to="../" replace /> },
                                { path: "new", element: <NewTask /> },
                                {
                                  path: ":taskID",
                                  children: [{ index: true, element: <>Show Task Details</> }],
                                },
                              ],
                            },
                          ],
                        }
                      ]
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
  }
  
]);
export default router;