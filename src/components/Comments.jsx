import Box from "@mui/material/Box";
import theme from "./theme.jsx";
import StarIcon from "@mui/icons-material/Star";

function Comments(props) {
  const box = {
    borderRadius: "5px",
    margin: "auto",
    height: "40vh",
    display: "flex",
    padding: "10px",
    width: "300px",
    minWidth: "300px",
    cursor: "pointer",
    "&:hover": {},
  };

  const cont = {
    width: "100%",
  };

  const p = {
    margin: "0",
    fontSize: "14px",
    fontWeight: "600",
    width: "100%",
    paddingBottom: "13px",
    color: theme.palette.quinary,
  };

  const desc = {
    fontSize: "14px",
    fontWeight: "400",
    color: theme.palette.quinary,
  };

  const StarStyle = {
    margin: 0,
    display: "flex",
  };

  const Stardiv = {
    display: "flex",
    width: "10%",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "19.5px",
        width: "100%",
        overflow: "hidden",
        overflowX: "auto",
      }}
    >
      {props.comments &&
        props.comments.map((el, i) => {
          return (
            <Box key={i} sx={box} value={el}>
              <div style={cont}>
                <div style={Stardiv}>
                  {[...Array(el.quantity)].map((_, index) => (
                    <StarIcon key={index} style={StarStyle}></StarIcon>
                  ))}
                </div>
                <p style={desc}>{el.desc}</p>
                <p style={p}>{el.name}</p>
              </div>
            </Box>
          );
        })}
    </div>
  );
}

export default Comments;
