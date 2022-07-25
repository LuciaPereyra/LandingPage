import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { MenuAppBar } from '../MenuAppBar';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchAppBar.styles';

interface Props { setSearch: Function }
export const SearchAppBar: FC<Props> = ({ setSearch }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <Toolbar>
        <Search>

          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            onClick={() => setSearch(true)}
            onBlur={() => setSearch(false)}
            placeholder="Buscar"
            inputProps={{ 'aria-label': 'buscar' }}
          />

        </Search>
      </Toolbar>
      {/* </AppBar> */}
    </Box>


  );
}







