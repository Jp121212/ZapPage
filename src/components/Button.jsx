import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Buttons(props) {
  const Button1 = styled(Button)({
    margin: props.margin,
    color: props.colorText,
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    borderRadius: '5px',
    width: props.width,
    height: props.height,
    fontFamily: 'Exo,sans-serif',
    fontSize: props.fontSize,
    lineHeight: 1.5,
    backgroundColor: props.color,
    '&:hover': {
      backgroundColor: props.colorHover,
      color: props.colorText2
    }
  });
  return (
    <Button1
      variant="contained"
      disableRipple
      href={props.href}
      onClick={props.onClick}
      type={props.type}
      startIcon={props.startIcon ? props.startIcon : ""}>
      {props.text}
    </Button1>
  );
}

export default Buttons;