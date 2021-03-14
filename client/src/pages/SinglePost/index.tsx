import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { PageComponent } from "../../components";
import { useGet } from "../../hooks";
import { capitalize } from "../../util";

interface Props {
  id: string;
}
interface IParagraph {
  text: string;
  title: string;
  image?: {
    path: string;
  };
}
interface IPost {
  title: string;
  slug: string;
  description: string;
  image?: {
    path: string;
  };
  paragraphs: IParagraph[];
}

export const SinglePost: React.FC = () => {
  const { id } = useParams<Props>();
  const { data: post, loading, error } = useGet<IPost>(`posts/${id}`, {
    description: "",
    title: "",
    paragraphs: [],
    slug: "",
  });
  if (loading) return <div></div>;
  if (error) return <Redirect to='/error404' />;
  console.log(post);
  return (
    <PageComponent>
      <Container maxWidth='md'>
        <Typography variant='h4' align='center' style={{ marginTop: 20 }}>
          {capitalize(post.title)}
        </Typography>
        <Typography variant='subtitle1' align='center'>
          {post.description}
        </Typography>
        <img
          style={{
            borderRadius: 15,
            overflow: "hidden",
            maxHeight: 300,
          }}
          src={post.image?.path}
          width='100%'
          alt=''
        />
        {post.paragraphs.map((paragraph, index) => (
          <Box key={index} mt={2}>
            <Typography variant='subtitle1' style={{ fontWeight: "bold" }}>
              {capitalize(paragraph.title)}
            </Typography>
            <Typography paragraph>{paragraph.text}</Typography>
          </Box>
        ))}
      </Container>
    </PageComponent>
  );
};
