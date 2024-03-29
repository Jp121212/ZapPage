import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Theme from './theme.jsx';

const StyledLink = styled(Link)((props) => ({
  color: props.color ? props.color : Theme.palette.quinary,
  fontSize: '14px',
  fontFamily: 'Poppins, sans-serif',
  width: '100%',
  marginRight: '10%',
  '&:hover': {
    color: Theme.palette.primary,
    textDecorationThickness: '1px',
    textUnderlineOffset: '30%'
  }
}));

export default StyledLink;