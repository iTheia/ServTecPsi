import { Box, LinearProgress, Typography } from "@material-ui/core";

interface Props {
  value: number;
}

export function LinearProgressWithLabel({ value }: Props) {
  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%' mr={1}>
        <LinearProgress variant='determinate' value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant='body2' color='textSecondary'>{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
