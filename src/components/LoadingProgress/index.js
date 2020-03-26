import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    color: "#212d47"
  }
}));

export default function LoadingProgress() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
