import PrimarySearchAppBar from "../components/NavBar.jsx";
import "../styles/navbar.css";
import { Box } from "@mui/material";
import Link from "../components/Link.jsx";

export default function MainLayout() {
  return (
    <>
      <div className="body">
        <div className="NavBar">
          <PrimarySearchAppBar>
            <Box sx={{ alignItems: "center", width: "30%", height: "60%" }}>
              <Link href="/Restaurant" underline="hover">
                {("Restaurants")}
              </Link>
              <Link href="/Subscription" underline="hover">
                {("Subscription")}
              </Link>
              <Link href="/Orders" underline="hover">
                {("Orders")}
              </Link>
            </Box>
          </PrimarySearchAppBar>
        </div>
        <div className="cont">
          <div className="Footer"></div>
        </div>
      </div>
    </>
  );
}
