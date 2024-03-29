import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import theme from './theme.jsx';

const StyledLink = styled(Link)((props) => ({
  color: props.color ? props.color : theme.palette.tertiary,
  fontSize: '18px',
  width: '100%',
  justifyContent: 'center',
  margin: '10px',
  marginRight: '10px',
  '&:hover': {
    color: theme.palette.tertiary,
    textDecorationThickness: '1px',
    textUnderlineOffset: '30%'
  }
}));

export default StyledLink;