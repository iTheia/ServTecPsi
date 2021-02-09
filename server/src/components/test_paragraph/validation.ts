import * as yup from "yup";

export const createParagraph = yup.object().shape({
    text: yup.string().required().trim(),
    image_id: yup.number().required(),
});
