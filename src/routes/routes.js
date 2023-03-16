import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import CurrencyConverter from "../pages/converter/currency-converter/CurrencyConverter";
import TimeConverter from "../pages/converter/time-converter/TimeConverter";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/time-converter",
                element: <TimeConverter></TimeConverter>
            },
            {
                path: "/currency-converter",
                element: <CurrencyConverter></CurrencyConverter>
            },
            {
                path: "/",
                element: ""
            },
            {
                path: "/",
                element: ""
            },
            {
                path: "/",
                element: ""
            }
        ]
    }
])
