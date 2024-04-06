import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields(props) {
  const div2 = {
    width: "100%",
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "98%" }
      }}
      noValidate
      autoComplete="off"
    >
      <div style={div2}>
        <TextField
          inputProps={{style: {fontSize: 14}}} 
          InputLabelProps={{style: {fontSize: 14}}} 
          id={props.id}
          label={props.label}
          multiline
          color="success"
          rows={props.rows}
        />
      </div>
    </Box>
  );
}
