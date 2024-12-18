import { createBrowserRouter } from "react-router-dom";
import RVP from "./MenuItem/RVP";
import App from "../App";
import PriceList from "./components/PriceList/PriceList";

export const router = createBrowserRouter([
  {
    children: [
      { path: "/rvp", element: <RVP /> },
      { path: "/", element: <App /> },
      { path: "/pricelist", element: <PriceList /> },
    ],
  },
]);
