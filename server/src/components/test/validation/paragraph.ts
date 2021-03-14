import * as yup from "yup";

export const createParagraph = yup.object().shape({
  text: yup.string().required().trim(),
  test_id: yup.number(),
  image_id: yup.number(),
});
