import type { RouteObject } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
];
export default routes;
