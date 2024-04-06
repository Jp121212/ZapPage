import Grid from "@mui/material/Grid";
import theme from "./theme.jsx";
import heart from "../icons/heart.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const grid = {
    width: "100%",
    height: "100%",
    margin: "auto",
    display: "flex",
    backgroundColor: theme.palette.primary,
  };

  const div = {
    width: "20%",
    height: "80%",
    padding: "10px",
    marginLeft: "4%",
    marginTop: "2%",
  };
  const div1 = {
    width: "12%",
    height: "70%",
    marginRight: "4%",
    padding: "10px",
    marginTop: "2%",
    display: "flex"
  };

  const textp = {
    fontSize: "16px",
    fontWeight: "300",
    color: theme.palette.tertiary,
    margin: 0,
    padding: 0,
  };

  const texta = {
    fontSize: "16px",
    fontWeight: "300",
    color: theme.palette.tertiary,
    display: "flex",
    textDecoration: "none",
  };

  const text1 = {
    fontSize: "25px",
    fontWeight: "300",
    color: theme.palette.tertiary,
  };

  const email = {
    fontSize: "16px",
    color: theme.palette.tertiary,
    fontWeight: "400",
  };

  const hour = {
    width: "60%"
  };

  const socials = {
    display: "flex",
  };

  const icon = {
   color: theme.palette.tertiary
  };
  return (
    <Grid sx={grid} justifyContent="space-between">
      <div style={div}>
        <div className="TitleInfo">
          <h2 style={text1}>ZAP ENERGY</h2>
          <img src={heart} alt="heart" />
        </div>
        <div className="Local">
          <p style={textp}>Alajuela, Alajuela Centro, Costa Rica</p>
          <p style={textp}>Alajuela, 20104</p>
        </div>
        <div className="email">
          <h3 style={email}>ZapEnergy@corp.co</h3>
        </div>
      </div>
      <div style={div1}>
        <div style={hour}>
          <p style={textp}>Hour</p>
          <p style={textp}>Mon-Sat</p>
          <p style={textp}>7am-5pm</p>
        </div>
        <div className="Socials">
          <div style={socials}>
            <FacebookIcon style={icon}></FacebookIcon>
            <a style={texta} href="https://www.facebook.com/?locale=es_LA">
              Facebook
            </a>
          </div>
          <div style={socials}>
            <InstagramIcon style={icon}></InstagramIcon>
            <a style={texta} href="https://www.instagram.com/">
              Instragram
            </a>
          </div>
          <div style={socials}>
            <XIcon style={icon}></XIcon>
            <a style={texta} href="https://twitter.com">
              X
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Footer;
