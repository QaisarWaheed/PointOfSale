import type { RouteObject } from "react-router";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Home from "../pages/Home";
import DeliveryChallans from "../pages/DeliveryChallans";
import Invoicing from "../pages/Invoicing";
import Inventory from "../pages/Inventory";
import Accounts from "../pages/Accounts";
import Expenses from "../pages/Expenses";
import CashFlow from "../pages/CashFlow";
import Report from "../pages/Report";
import UserManagement from "../pages/Usermanagement";
import PointOfSale from "../pages/PointOfSale";
import AddProduct from "../pages/AddProduct";
import CreateDeliveryChallan from "../pages/CreateDeliveryChallan";
import CreateInvoice from "../pages/CreateInvoice";
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
        path: "invoice",
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
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "point-of-sale",
        element: <PointOfSale />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "create-challan",
        element: <CreateDeliveryChallan />,
      },
      {
        path: "create-invoice",
        element: <CreateInvoice />,
      },
    ],
  },
];
export default routes;
