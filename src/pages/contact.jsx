import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import "../styles/contact.css";
import heart from "../icons/heartgreen.png";
import Buttons from "../Components/Button.jsx";
import TextField from "../Components/TextField.jsx";

function contact() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="ContactPrincipal">
          <div className="ContactSec">
            <div className="ContactInfo">
              <div>
                <div className="ContactTitle">
                  <h5>Contact Us</h5>
                  <img src={heart} alt="heart" />
                </div>
                <p className="ContactDesc">(+506) 2444-2231</p>
                <p className="ContactDesc">ZapEnergy@corp.co</p>
                <p className="ContactDesc">
                  Alajuela, Alajuela Centro, Costa Rica
                </p>
                <p className="ContactDesc">Alajuela, 20104</p>
              </div>
              <div className="ContactButton">
                <Buttons
                  text="Send"
                  color={theme.palette.quinary}
                  colorHover={theme.palette.primary}
                  colorText={theme.palette.tertiary}
                  colorText2={theme.palette.tertiary}
                  width="50%"
                  height="90%"
                  fontSize="20px"
                  href="/"
                ></Buttons>
              </div>
            </div>
            <div className="ContactForm">
              <TextField id="Name" label="Name"></TextField>
              <TextField id="Email" label="Email"></TextField>
              <TextField id="Message" rows="16" label="Message"></TextField>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default contact;
