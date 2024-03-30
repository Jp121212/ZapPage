import "../styles/home.css";
import cansvg from "../icons/can.svg";
import heart from "../icons/heartgreen.png";
import Buttons from "../Components/Button";
import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import Card from "../Components/Card";
import vitamin from "../icons/vita.png";
import energy from "../icons/fruit.png";
import process from "../icons/lab.png";

const home = () => {
  const options = [
    {
      name: "Natural Energy",
      img: energy,
      desc: "At Zap, we take pride in offering you a source of natural energy to fuel your daily activities. Our carefully selected ingredients provide you with the boost you need without compromising your well-being.",
    },
    {
      name: "Vitamins and Antioxidants",
      img: vitamin,
      desc: "At Zap, we not only care about your energy but also your health. Our formula is enriched with key vitamins and antioxidants to support your overall well-being and keep you at your best.",
    },
    {
      name: "Production Process",
      img: process,
      desc: "From the meticulous selection of ingredients to the careful blending in our state-of-the-art laboratories, each step of the production process is carried out with the utmost care and attention to detail.",
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="ContentHome">
          <div className="Welcome">
            <div className="WelcomeInfo">
              <div className="TitleInfo">
                <h2>ENERGY DRINK ZAP</h2>
                <img src={heart} alt="heart" />
              </div>
              <div className="PhraseInfo">
                <h1>
                  REFRESH YOUR MOMENTS, THE SPARK THAT TRANSFORMS EVERY MOMENT
                  INTO A VIBRANT EXPERIENCE.
                </h1>
              </div>
              <div className="DescInfo">
                <p>
                  "Zap takes you to the next level. Get ready to unleash your
                  potential and conquer each day with passion and vitality!
                  Welcome to the world of Zap, where energy is your ally!
                </p>
              </div>{" "}
              <div className="WelcomeButton">
                <Buttons
                  text="Order Now"
                  color={theme.palette.quinary}
                  colorHover={theme.palette.primary}
                  colorText={theme.palette.secondary}
                  colorText2={theme.palette.tertiary}
                  width="35%"
                  height="100%"
                  fontSize="20px"
                  href="/store"
                ></Buttons>
              </div>
            </div>
            <div className="WelcomeImg">
              <img src={cansvg} alt="Welcome" />
            </div>
          </div>
          <div className="WelcomeSec2">
            <div className="OurIngr">
              <div className="OurIngredients">
                <h2>Our Ingredients</h2>
              </div>
              <Card options={options}></Card>
            </div>
          </div>
          <div className="WelcomeSec2">
            <div className="OurIngr">
              <Card options={options}></Card>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default home;
