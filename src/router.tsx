import { createBrowserRouter } from "react-router-dom";
import UsersView from "./views/Users";
import DetailsView from "./views/Details";
import { action as deleteUserAction } from "./components/UserDetails";
import EditUserView from "./views/EditUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersView />,
  },
  {
    path: "/details/:userId",
    element: <DetailsView />,
  },
  {
    path: "/edit/:userId",
    element: <EditUserView />,
  },

  {
    path: "/users/:userId/delete",
    action: deleteUserAction,
  },
]);
