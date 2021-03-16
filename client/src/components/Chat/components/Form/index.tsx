import React from "react";
import { AttachFile } from "@material-ui/icons";
import { Formik } from "formik";
import { TextField, useTheme } from "@material-ui/core";
import { useStyles } from "./style";
import { PLACE_HOLDER, initialValues, BUTTON_TEXT } from "./const";

export const ChatForm: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  function handleSubmit() {}
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <form className={classes.form}>
          <AttachFile color='primary' fontSize='large' />
          <TextField
            variant='outlined'
            placeholder={PLACE_HOLDER}
            className={classes.input}
          />
          <button
            className={classes.button}
            type='submit'
            disabled={isSubmitting}
          >
            {BUTTON_TEXT}
          </button>
        </form>
      )}
    </Formik>
  );
};
