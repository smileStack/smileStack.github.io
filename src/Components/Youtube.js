import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Flowers from "../images/Mom's Funeral Program - Eng.png";
import FlowersSpanish from "../images/Mom's Funeral Program.png";

const useStyles = makeStyles((theme) => ({
  video: {
    margin: theme.spacing(2),
  },
}));

const Youtube = () => {
  const classes = useStyles();
  return (
    <div className={classes.video}>
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/3GvgYsMOc6Y`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default Youtube;
