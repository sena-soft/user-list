import { createBrowserRouter } from "react-router-dom";
import UsersView from "./views/Users";
import DetailsView from "./views/Details";
import EditUserView from "./views/EditUser";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UsersView />,
      },
      {
        path: "/details/:userId",
        element: <DetailsView />,
      },
      {
        path: "/edit/:userId",
        element: <EditUserView />,
      }
    ],
  },
]);
