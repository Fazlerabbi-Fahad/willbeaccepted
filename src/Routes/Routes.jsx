import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/component-overview/Home/Home";
import Confess from "../pages/component-overview/Confess/Confess";
import AnotherConfess from "../pages/component-overview/AnotherConfess/AnotherConfess";
import LastPage from "../pages/component-overview/LastPage/LastPage";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/confess",
    element: <Confess />,
  },
  {
    path: "/proposal",
    element: <AnotherConfess />,
  },
  {
    path: "/letsGo",
    element: <LastPage />,
  },
]);

export default MainRoutes;
