import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { autocompleteClasses } from "@mui/material";
import Flowers from "../images/Mom's Funeral Program - Eng.png";
import FlowersSpanish from "../images/Mom's Funeral Program.png";
import Youtube from "./Youtube"


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
  subtitle: {
    fontFamily: "'Karla', sans-serif",
    fontSize: "1em",
    width: "100%",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto"
    },
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
      type: "img",
      src: `/images/mom-and-me-baby.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-and-me-disney.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-funny.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-traditional-dress.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-headshot.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-shiny-dress.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-and-neme.jpeg`,
    },
    {
      type: "img",
      src: `/images/mom-living-room.jpeg`,
    },
    {
      type: "video",
      src: `/video/madrid-mom.mov`,
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
            <Carousel className={classes.mediaImage}
            navButtonsAlwaysVisible={true}
            autoPlay={false}
            swipe={true}
            indicators={true}
            >
        {items.map((item, i) => (
          <CardMedia
            key={i}
            className={classes.mediaImage}
            src={item.src}
            component={item.type}
            allow="autoplay"
            autoplay="true"
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
        <Typography className={classes.text}>{date} @ 2:30PM</Typography>
        <Typography className={classes.subtitle}>To join at distance please join on Zoom below</Typography>

        <Button
          variant="contained"
          className={classes.button}
          target="_blank"
          href="https://goo.gl/maps/XbDgZ8cyTD6S2LLj8"
        >
        Location on Google Maps
        </Button>
        <Button           variant="contained"
 className={classes.button} target="_blank" href="https://us02web.zoom.us/j/87670209935?pwd=anYyaVRVc25NVitpYiszS0R3VXloUT09">
          Join on Zoom
        </Button>
          <Button           variant="contained"
 href={Flowers} target="_blank">Download Program</Button>
          <Youtube/>
          <img  className={classes.image} src={Flowers}/>
        </TabPanel>
      <TabPanel value={value} index={"spanish"} className={classes.tabContent}>
        <Typography className={classes.text}>
          Celebremos la vida y el amor que compartimos por
        </Typography>
        <Typography align="center" className={classes.name}>
          Said Martinez
        </Typography>
        <Typography className={classes.text}>{date} @ 2:30PM</Typography>
        <Typography className={classes.subtitle}>Para participar a distancia junte por Zoom abajo</Typography>
        <Button
          className={classes.button}
          target="_blank"
          size="large"
          href="https://goo.gl/maps/XbDgZ8cyTD6S2LLj8"
          variant="contained"
        >
          Ubicacion en Google Maps
        </Button>
        <Button className={classes.button}           variant="contained"

        target="_blank" href="https://us02web.zoom.us/j/87670209935?pwd=anYyaVRVc25NVitpYiszS0R3VXloUT09">
          Unase por Zoom
        </Button>
          <Button href={FlowersSpanish} target="_blank"           variant="contained"

          >Descarga el Programa</Button>
          <Youtube/>
          <img className={classes.image}  src={FlowersSpanish}/>

      </TabPanel>
    </React.Fragment>
  );
};

export default Content;
