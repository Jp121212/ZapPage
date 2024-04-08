import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Theme from './theme.jsx';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 10
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1.2, 1),
  position: 'absolute',
  pointerEvents: 'none',
  color: '#185434',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '16px',
    color: '#185434',
    borderRadius: '5px',
    border: '1px solid #E9E9E9',
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    width: '40vh',
    height: '30px'
  }
}));

export default function SearchAppBar(props) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" onChange={props.onChange} />
    </Search>
  );
}