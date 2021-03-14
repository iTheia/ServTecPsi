import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { IQuestion } from "../../types";
import { useStyles } from "./styles";

function StyledRadio(props: any) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={
        <span className={`${classes.icon} ${classes.checkedIcon}`} />
      }
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function Question({ title, answers }: IQuestion) {
  return (
    <Box mt={2} mb={2}>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </FormLabel>
        <RadioGroup name='customized-radios'>
          {answers.map((answer) => (
            <FormControlLabel
              value={answer.points}
              control={<StyledRadio />}
              label={answer.title}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
