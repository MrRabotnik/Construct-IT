import App from "../App";
import NotFound from "../components/NotFound/NotFound";

export const ROUTES = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
