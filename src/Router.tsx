import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/routes";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {ROUTES.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
};

export default AppRouter;
