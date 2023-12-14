import { createBrowserRouter } from "react-router-dom";

import App from "./components/views/app/App";
import Home from "./components/pages/home/Home";
import UIItem from "./components/pages/ui-item/UIItem";
import SignIn from "./components/pages/sign-in/SignIn";
import SignUp from "./components/pages/sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: "",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/store/:title/:id",
        element: <UIItem />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
