import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { useStyles } from "./style";

interface Props {
  item: any;
  url: string;
}
export const Item: React.FC<Props> = ({ item, url }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={item.image.path}
        title={item.title}
      />
      <div className={classes.details}>
        <Link
          to={`${url}${item.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              {item.title}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {item.description}
            </Typography>
          </CardContent>
        </Link>
      </div>
    </Card>
  );
};
