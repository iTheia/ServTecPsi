import { Box, Button, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IService } from "./const";

interface Props {
  service: IService;
}

export const Service: React.FC<Props> = ({
  service: { Icon, title, description, to },
}) => (
  <Box mb={2}>
    <Box display='flex' justifyContent='start' alignItems='center'>
      <Icon color='secondary' />
      <Box ml={1}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
    </Box>
    <Typography paragraph>{description}</Typography>
    <Link to={to}>
      <Button variant='contained' size='small' color='primary'>
        Ver mas
      </Button>
    </Link>
  </Box>
);
