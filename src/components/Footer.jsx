import Grid from "@mui/material/Grid";
import Link from "./Links.jsx";
import theme from "./theme.jsx";
import heart from "../icons/heart.png";

function Footer() {
  const grid = {
    width: "100%",
    height: "30vh",
    margin: "auto",
    display: "flex",
    backgroundColor: theme.palette.primary,
  };

  const div = {
    width: "20%",
    height: "30%",
    padding: "10px",
    border: "1px solid #fffcf4",
  };
  return (
    <Grid sx={grid}>
      <div style={div}>
        <div className="TitleInfo">
          <h2>ENERGY ZAP</h2>
          <img src={heart} alt="heart" />
        </div>
      </div>
    </Grid>
  );
}

export default Footer;
