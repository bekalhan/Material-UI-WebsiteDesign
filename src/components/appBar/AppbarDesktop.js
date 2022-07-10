import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import {AppBarContainer,AppbarHeader,MyList} from '../../styles/appbar';
import SearchIcon from "@mui/icons-material/Search";
import Actions from './Actions';

function AppbarDesktop({matches}) {
  return (
   <AppBarContainer>
        <AppbarHeader>
            ROOT!
        </AppbarHeader>
        <MyList type="row">
            <ListItemText primary="Home" />
            <ListItemText primary="Categories" />
            <ListItemText primary="Products" />
            <ListItemText primary="Contact Us" />
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        <Actions matches={matches}/>
   </AppBarContainer>
  )
}

export default AppbarDesktop