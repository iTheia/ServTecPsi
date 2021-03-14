import React from "react";

import { Pagination } from "@material-ui/lab";
import { Box } from "@material-ui/core";
interface Props {
  page: number;
  handleChange: any;
  count: number;
}
const Container: React.FC<Props> = ({
  count,
  page,
  children,
  handleChange,
}) => (
  <Box minHeight={"1000px"}>
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      shape='rounded'
      color='primary'
      variant='text'
      size='large'
    />

    {children}
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      shape='rounded'
      color='primary'
      variant='text'
      size='large'
    />
  </Box>
);

export default Container;
