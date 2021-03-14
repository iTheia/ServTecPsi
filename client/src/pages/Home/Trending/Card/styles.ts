import { makeStyles, Theme } from "@material-ui/core";

interface Props {
  image: string;
}
export const useStyles = makeStyles<Theme, Props>((_) => ({
  root: {
    margin: 10,
    height: 250,
    position: "relative",
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    color: "#000",
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
