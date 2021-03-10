import * as yup from "yup";

export const validateCreatePost = yup.object().shape({
  title: yup.string().required().trim(),
  description: yup.string().trim(),
  image_id: yup.number().required(),
  paragraphs: yup.array().of(
    yup.object().shape({
      text: yup.string().required().trim(),
      image_id: yup.number(),
    })
  ),
});
