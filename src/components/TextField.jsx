import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Theme from './theme.jsx';

const Input = styled(TextField)(({ theme, ...props }) => ({
  margin: '10px',
  backgroundColor: Theme.palette.tertiary,
  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    '& fieldset': {
      height: props.height
    },
    '&:hover fieldset': {
      color: Theme.palette.primary,
    },
    '&.Mui-focused fieldset': {
      color: Theme.palette.primary,
    }
  }
}));

export default Input;

