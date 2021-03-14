import * as yup from "yup";

export const validateCreateTest = yup.object().shape({
  title: yup.string().required().trim(),
  description: yup.string().trim(),
  image_id: yup.number().required(),
});
