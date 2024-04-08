import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import "../styles/contact.css";
import heart from "../icons/heartgreen.png";
import Buttons from "../Components/Button.jsx";
import TextField from "../Components/TextField.jsx";
import Snackbar from "../Components/Snackbar.jsx";
import Alert from "../Components/alert.jsx";
import Form from "../Components/Form.jsx";
import { useEffect, useState } from "react";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {}, [email, message, name, alert, severity]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const SendMessage = async (e) => {
    e.preventDefault();
    setAlert("");
    setSeverity("");

    if (!email || !name || !message) {
      setAlert("Please fill in all fields. ");
      setSeverity("error");
      setOpenSnackbar(true)
      return;
    } else {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setAlert("Message send successfully!");
        setSeverity("success");
        setOpenSnackbar(true);
        setEmail("");
        setName("");
        setMessage("");
      } catch (error) {
        setAlert(
          "An error occurred while send message. Please try again later."
        );
        setSeverity("error");
        setOpenSnackbar(true);
      }
    }
  };

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
                  onClick={SendMessage}
                ></Buttons>
              </div>
            </div>
            <div className="ContactForm">
              <Form width="100%" height="100%">
                <TextField
                  color="success"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="Name"
                  label="Name"
                  inputProps={{ maxLength: "100" }}
                ></TextField>
                <TextField
                  color="success"
                  width="100%"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="Email"
                  label="Email"
                  inputProps={{ maxLength: "100" }}
                ></TextField>{" "}
                <TextField
                  color="success"
                  width="100%"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  id="Message"
                  inputProps={{ maxLength: "1000" }}
                  label="Message"
                  multiline
                  maxRows={18}
                  minRows={18}
                  height="100%"
                ></TextField>
              </Form>
            </div>
          </div>
          <div className="ContactAlerts">
            <Snackbar
              open={openSnackbar}
              autoHideDuration={1700}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert severity={severity}>{alert}</Alert>
            </Snackbar>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Contact;
