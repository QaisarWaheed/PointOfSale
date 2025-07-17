import type { RouteObject } from "react-router";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Home from "../pages/Home";
import DeliveryChallans from "../pages/DeliveryChallans";
import Invoicing from "../pages/Invoicing";
import Inventory from "../pages/Inventory";
import Accounts from "../pages/Accounts";
import Expenses from "../pages/Expenses";
import CashFlow from "../pages/CashFlow";

const routes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "challan",
        element: <DeliveryChallans />,
      },
      {
        path: "invoicing",
        element: <Invoicing />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "cash-flow",
        element: <CashFlow />,
      },
    ],
  },
];
export default routes;
