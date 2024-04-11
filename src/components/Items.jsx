import Card from "@mui/material/Card";
import "../styles/body.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useContext } from "react";
import theme from "./theme.jsx";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Buttons from "../Components/Button";
import Snackbar from "../Components/Snackbar";
import Alert from "../Components/alert";
import SvgImg from "../icons/can.svg";
import { ItemContext } from "../Providers/item.provider.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ActionAreaCard(props) {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addProduct, alert, severity, removeProduct } =
    useContext(ItemContext);

  const ProductProps = {
    id: props.id,
    name: props.name,
    desc: props.desc,
    price: props.price,
    image: props.img,
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleAddProduct = () => {
    setOpenSnackbar(true);
    addProduct(ProductProps);
  };

  const handleDeleteProduct = () => {
    setOpenSnackbar(true);
    removeProduct(ProductProps);
  };

  const StyledCardActionArea = styled(CardActionArea)({
    transition: "all 0.2s ease-in-out",
  });

  const card = {
    background: "none",
    boxShadow: "none",
    width: "80%",
    height: "80%",
    marginTop: "20px",
    marginLeft: "10%",
    marginRight: "10%",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 350,
    width: 510,
    bgcolor: theme.palette.tertiary,
    boxShadow: 12,
    borderRadius: 2,
    p: 1,
    overflow: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  const Content = {
    fontSize: "16px",
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <Card style={card}>
      <StyledCardActionArea>
        <CardMedia
          sx={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            margin: "auto",
            width: "70%",
          }}
          component={"img"}
          border="none"
          image={props.img ? props.img : SvgImg}
          alt="ProductIMG"
        />
        <CardContent sx={{ padding: 2 }}>
          <div style={Content}>
            <div>
              <p>{props.name}</p>
              <p>Price: {props.price}</p>
            </div>
            <div>
              <Buttons
                onClick={handleOpen}
                height="100%"
                width="100%"
                text="Add"
                color={theme.palette.primary}
                colorHover={theme.palette.quinary}
                colorText={theme.palette.secondary}
                colorText2={theme.palette.tertiary}
                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
              ></Buttons>
            </div>
          </div>
        </CardContent>
      </StyledCardActionArea>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="ModalCard">
            <img
              className="ContModal1"
              src={props.img ? props.img : SvgImg}
            ></img>
            <div className="ContModal2">
              <h1 className="TitleModal">{props.name}</h1>
              <h1 className="SubTitleModal1">Price: {props.price}</h1>
              <div className="DescModal">
                <h1 className="SubTitleModal">{props.desc}</h1>
              </div>
              <div className="ButModal">
                <Buttons
                  open={openSnackbar}
                  onClick={handleAddProduct}
                  height="40px"
                  width="50%"
                  margin="3px"
                  text="Add"
                  color={theme.palette.primary}
                  colorHover={theme.palette.primary}
                ></Buttons>
                <Buttons
                  margin="3px"
                  open={openSnackbar}
                  onClick={handleDeleteProduct}
                  height="40px"
                  width="50%"
                  text="Remove"
                  color={theme.palette.quaternary}
                  colorHover={theme.palette.quaternary}
                ></Buttons>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1700}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {alert}
        </Alert>
      </Snackbar>
    </Card>
  );
}
