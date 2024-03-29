import { Outlet } from "react-router";
import PrimarySearchAppBar from "../Components/NavBar.jsx";
import "../styles/navbar.css";
import { Box } from "@mui/material";
import Links from "../Components/Links.jsx";
import Footer from "../Components/Footer.jsx";
import heart from "../icons/heart.png";
import Buttons from "../Components/Button.jsx";

export default function MainLayout() {
  return (
    <>
      <div className="body">
        <div className="NavBar">
          <PrimarySearchAppBar>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                width: "40%",
                height: "60%",
              }}
            >
              <img src={heart} alt="logo" />
              <p className="Zap">Zap Energy</p>
            </Box>
            <Box
              sx={{
                width: "20%",
                height: "60%",
              }}
            >
              <Links href="/about" underline="hover">
                {"Sobre Nosotros"}
              </Links>
              <Links href="/contact" underline="hover">
                {"Contacto"}
              </Links>
              <Buttons
                text="Comprar"
                color="#000000"
                colorHover="#fffcf4"
                colorText="#fffff"
                colorText2="#000000"
                width="30%"
                height="100%"
                margin="0 0 0 10px"
                fontSize="18px"
                href="/store"
              >
              </Buttons>
            </Box>
          </PrimarySearchAppBar>
        </div>

        <div className="cont">
          <Outlet />{" "}
          <div className="Footer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
