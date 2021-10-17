import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import ElevateAppBar from "./Components/navbar";
import Content from "./Components/Content";
import Youtube from "./Components/Youtube";
import Flowers from "./images/flowers2.jpeg";

const theme = createTheme({
  components: {},
  palette: {},
});

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${Flowers})`,
    marginTop: `5px`,
    height: `100%`,
  },
  container: {
    background: "#fff",
    height: `100%`,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.background}>
          <ElevateAppBar></ElevateAppBar>
          <Container fixed className={classes.container}>
            <Content />
            <Youtube />
          </Container>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
