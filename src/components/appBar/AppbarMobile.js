import {AppBarContainer,AppbarHeader,MyList} from '../../styles/appbar';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { IconButton } from "@mui/material";

export default function AppbarMobile({ matches }) {
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
}