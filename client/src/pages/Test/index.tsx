import React from "react";
import { SearchEngine, PageComponent } from "../../components";

export const TestsPage: React.FC = () => {
  return (
    <PageComponent>
      <SearchEngine url='tests' title='Cuestionarios' />
    </PageComponent>
  );
};
