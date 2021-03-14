import React from "react";
import { PageComponent, RouterComponent } from "../../components";
import { useRoutes } from "../../hooks";
import { testRoutes } from "./routes";

export const SingleTestPage: React.FC = () => {
  const [routes] = useRoutes(testRoutes);
  return (
    <PageComponent>
      <RouterComponent routes={routes} />
    </PageComponent>
  );
};
