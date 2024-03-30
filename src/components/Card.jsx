import Box from "@mui/material/Box";
import theme from "./theme.jsx";

function Ingredients(props) {
  const img = {
    width: "40%",
    height: "40%",
    margin: "auto",
  };

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
    fontSize: "20px",
    fontWeight: "600",
    width: "100%",
    paddingBottom: "13px",
    borderBottom: "2px solid #185434",
    color: theme.palette.quinary,
  };

  const desc = {
    marginTop: "10%",
    fontSize: "14px",
    fontWeight: "400",
    color: theme.palette.quinary,
  };

    const divImg = { 
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
      {props.options &&
        props.options.map((el, i) => {
          return (
            <Box key={i} sx={box} value={el}>
              <div style={cont}>
                <p style={p}>{el.name}</p>
                <p style={desc}>{el.desc}</p>
                <div style={divImg}>
                  <img style={img} src={el.img}></img>{" "}
                </div>
              </div>
            </Box>
          );
        })}
    </div>
  );
}

export default Ingredients;
