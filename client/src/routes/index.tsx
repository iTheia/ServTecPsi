import React, { useContext, useEffect } from "react";
import {
  AppContext,
  AuthContext,
  Layout,
  Loader,
  RouterComponent,
} from "../components";
import { authRoutes, userRoutes } from "./routes";

export const Router: React.FC = () => {
  const { isLoading } = useContext(AppContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {}, [currentUser]);
  if (isLoading) {
    return <Loader />;
  }
  if (!currentUser) {
    return (
      <Layout>
        <RouterComponent routes={authRoutes} />
      </Layout>
    );
  }
  return (
    <Layout>
      <RouterComponent routes={userRoutes} />
    </Layout>
  );
};
