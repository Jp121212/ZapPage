import { ThemeProvider } from "styled-components";
import theme from "../Components/theme.jsx";
import "../styles/about.css";
import Mission from "../icons/mission.png";
import Vision from "../icons/vision.png"
import Propouse from "../icons/propouse.png"

const About = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="AboutInfo">
          <div className="AboutInfoLeft">
            <div className="AboutTitle">
              <h1>MISSION</h1>
              <div className="AboutDesc">
                <p>
                  In Zap, our mission is to offer a natural and revitalizing
                  source of energy that empowers people to reach their full
                  potential. We are committed to providing high-quality
                  products, crafted with carefully selected ingredients and
                  backed by scientific innovation. We seek to inspire an active
                  and healthy lifestyle, providing our consumers with the
                  vitality and boost they need to face each challenge with
                  confidence and determination
                </p>
              </div>
            </div>
          </div>
          <div className="AboutInfoRight">
            <div className="AboutImg">
              <img src={Mission}></img>
            </div>
          </div>
        </div>
        <div className="AboutInfo2">
          <div className="AboutInfoLeft2">
            <div className="AboutImg">
              <img src={Vision}></img>
            </div>
          </div>
          <div className="AboutInfoRight2">
            <div className="AboutTitle">
              <h1>VISION</h1>
              <div className="AboutDesc">
                <p>
                  Our vision is to become the world's leading brand in energy
                  drinks, distinguished by our unwavering commitment to quality,
                  innovation, and the well-being of our consumers. We strive to
                  expand our global presence and be the preferred choice for
                  those seeking authentic and natural energy to power their
                  lives
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="AboutInfo3">
          <div className="AboutInfoLeft3">
            <div className="AboutTitle">
              <h1>PROPOUSE</h1>
              <div className="AboutDesc">
                <p>
                  Our purpose at Zap is to inspire and empower individuals to
                  live more vibrant and active lives. We are committed to
                  providing products that not only offer energy but also an
                  experience that stimulates the senses and uplifts the spirit.
                  We believe in the power of positive energy to drive change and
                  improve the world around us, and we strive to be a positive
                  force in the lives of our consumers and communities
                </p>
              </div>
            </div>
          </div>
          <div className="AboutInfoRight3">
            <div className="AboutImg">
              <img src={Propouse}></img>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default About;
