import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "../components/Loader";
import { RouterComponent } from "../components/Router";
import { AppContext } from "../providers/App";
import { AuthContext } from "../providers/Auth";
import { adminRoutes, authRoutes } from "./routes";

export const Router: React.FC = () => {
    const { isLoading } = useContext(AppContext);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {}, [currentUser]);
    if (isLoading) {
        return <Loader />;
    }

    if (currentUser && currentUser.role === "admin") {
        return (
            <BrowserRouter>
                <RouterComponent routes={adminRoutes} />
            </BrowserRouter>
        );
    }
    return (
        <BrowserRouter>
            <RouterComponent routes={authRoutes} />
        </BrowserRouter>
    );
};
