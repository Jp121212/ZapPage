import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import "../styles/store.css";
import heart from "../icons/heartgreen.png";
import Search from "../Components/search.jsx";
import Buttons from "../Components/Button";
import Item from "../Components/Items.jsx";
import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { ItemContext } from "../Providers/item.provider.js";
import { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Store = () => {
  const [search, setSearch] = useState("");
  const { badgeCount } = useContext(ItemContext);
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 600,
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
  const datos = [
    {
      name: "Zap Energy Orange",
      price: "12$",
      desc: "Experience a burst of energy with the refreshing taste of orange in every sip.",
    },
    {
      name: "Zap Energy Berry",
      price: "15$",
      desc: "Get ready for a blast of energy with the irresistible blend of berries and invigorating ingredients.",
    },
    {
      name: "Zap Energy Lemon",
      price: "8$",
      desc: "Feel the zing with this energizing lemon-infused beverage that will awaken your senses.",
    },
    {
      name: "Zap Energy Tropical",
      price: "10$",
      desc: "Take a sip of paradise with this tropical punch infused with Zap Energy to power you through your day.",
    },
    {
      name: "Zap Energy Apple",
      price: "11$",
      desc: "Get a kickstart with the crisp flavor of apple combined with the energizing power of Zap Energy.",
    },
    {
      name: "Zap Energy Mango",
      price: "9$",
      desc: "Dive into a splash of energy with the exotic flavor of mango blended with Zap Energy for a refreshing boost.",
    },
    {
      name: "Zap Energy Cherry",
      price: "13$",
      desc: "Fizz up your day with the delightful taste of cherry and the energizing fizz of Zap Energy.",
    },
    {
      name: "Zap Energy Water",
      price: "14$",
      desc: "Ride the wave of energy with the juicy sweetness of watermelon infused with Zap Energy to keep you refreshed and focused.",
    },
  ];

  const filteredData = datos.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="StorePrincipal">
          <div className="StoreSec">
            <div className="StoreSecLeft">
              <div className="StoreTitle">
                <h5>Store</h5>
                <img src={heart} alt="heart" />
              </div>
            </div>
            <div className="StoreSecRight">
              <div className="StoreSearch">
                <Badge badgeContent={badgeCount ? badgeCount : 0} color="error">
                  {" "}
                </Badge>
                <Buttons
                  text="Cart"
                  color={theme.palette.quinary}
                  colorHover={theme.palette.primary}
                  colorText={theme.palette.tertiary}
                  colorText2={theme.palette.tertiary}
                  width="5%"
                  height="42px"
                  fontSize="16px"
                  onClick={handleOpen}
                ></Buttons>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    <div className="ModalCart">
                       <h1>Cart</h1>
                    </div>
                  </Box>
                </Modal>
                <Search
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></Search>
              </div>
              <div className="Store">
                {filteredData.map((props, index) => (
                  <Item
                    key={index}
                    id={index}
                    name={props.name}
                    price={props.price}
                    desc={props.desc}
                  ></Item>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Store;
