import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { ITrending } from "../const";
import { useStyles } from "./styles";

const Card: React.FC<ITrending> = ({
  description,
  title,
  image,
  slug,
  type,
}) => {
  const classes = useStyles({ image });
  return (
    <Link to={`${type}/${slug}`}>
      <Paper className={classes.root}>
        <div className={classes.bgContainer}>
          <div className={classes.bg}></div>
        </div>
        <Button
          variant='contained'
          color={type === "posts" ? "primary" : "secondary"}
          size='small'
          style={{ color: "white", position: "absolute", top: 20, right: 20 }}
        >
          {type === "posts" ? "Articulo" : "Cuestionario"}
        </Button>
        <Typography
          variant='h4'
          style={{ color: "white", position: "absolute", bottom: 50, left: 20 }}
        >
          {title}
        </Typography>
        <Typography
          variant='h6'
          style={{ color: "white", position: "absolute", bottom: 20, left: 20 }}
        >
          {description}
        </Typography>
      </Paper>
    </Link>
  );
};

export default Card;
