import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { autocompleteClasses } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  name: {
    fontFamily: "'Tangerine', cursive",
    fontSize: "75px",
  },
  mediaImage: {
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      maxHeight: "400px",
      width: "auto",
      alignContent: "center",
    },
  },
  tabContent: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {},
  },
  text: {
    fontFamily: "'Karla', sans-serif",
    fontSize: "2em",
    width: "100%",
  },
  button: {
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "5px 75px",
    },
  },
}));

const downloadFile = (fileUrl, fileName) => {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
};

const Content = () => {
  const [value, setValue] = React.useState("spanish");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var items = [
    {
      name: "Image #1",
      description: "Happy we were able to...",
      image: `/images/flowers2.jpeg`,
    },
    {
      name: "Image #2",
      description: "The time we...",
      image: `/images/flowers.jpeg`,
    },
  ];

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const date = value === "english" ? "October 17, 2021" : "17 de octubre";

  const classes = useStyles();

  return (
    <React.Fragment>
      <Carousel className={classes.mediaImage}>
        {items.map((item, i) => (
          <CardMedia
            key={i}
            className={classes.mediaImage}
            image={item.image}
            title={item.name}
            component="img"
          ></CardMedia>
        ))}
      </Carousel>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary"
      >
        <Tab value="english" label="English" />
        <Tab value="spanish" label="Español" />
      </Tabs>
      <TabPanel value={value} index={"english"} className={classes.tabContent}>
        <Typography className={classes.text}>
          Join me in celebrating the life and memory of
        </Typography>
        <Typography align="center" className={classes.name}>
          Said Martinez
        </Typography>
        <Typography className={classes.text}>{date} @ 2PM</Typography>
        <Button
          variant="outlined"
          className={classes.button}
          size="large"
          target="_blank"
          href="https://goo.gl/maps/XbDgZ8cyTD6S2LLj8"
        >
          Google Maps
        </Button>
        <Button>Program</Button>
      </TabPanel>
      <TabPanel value={value} index={"spanish"} className={classes.tabContent}>
        <Typography className={classes.text}>
          Celebremos la vida y el amor que compartimos por
        </Typography>
        <Typography align="center" className={classes.name}>
          Said Martinez
        </Typography>
        <Typography className={classes.text}>{date} @ 2PM</Typography>
        <Button
          className={classes.button}
          variant="outlined"
          target="_blank"
          size="large"
          href="https://goo.gl/maps/XbDgZ8cyTD6S2LLj8"
        >
          Google Mapas
        </Button>
        <Button>Program</Button>
      </TabPanel>
    </React.Fragment>
  );
};

export default Content;
