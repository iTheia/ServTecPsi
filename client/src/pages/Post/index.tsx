import React from "react";
import { PageComponent, SearchEngine } from "../../components";

export const PostPage: React.FC = () => {
  return (
    <PageComponent>
      <SearchEngine url='posts/' title='Articulos' />
    </PageComponent>
  );
};
