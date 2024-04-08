import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import "../styles/store.css";
import heart from "../icons/heartgreen.png";
import Search from "../Components/search.jsx"
import Buttons from "../Components/Button";

const Store = () => {
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
                <Buttons
                text="Cart"
                color={theme.palette.quinary}
                colorHover={theme.palette.primary}
                colorText={theme.palette.tertiary}
                colorText2={theme.palette.tertiary}
                width="5%"
                height="42px"
                fontSize="16px"
                href="/"
                ></Buttons>
                <Search></Search>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Store;
