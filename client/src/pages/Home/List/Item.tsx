import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../../util";

interface Props {
  post: {
    image: {
      path: string;
    };
    title: string;
    description: string;
    slug: string;
  };
  prefix: string;
}

export const Item: React.FC<Props> = ({ prefix, post }) => (
  <Link to={prefix + post.slug}>
    <Card style={{ margin: 10 }}>
      <CardActionArea>
        <img src={post.image.path} alt='' height={150} width='100%' />
        <CardContent>
          <Typography paragraph>{capitalize(post.title)}</Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);
