import React from 'react';
import {useMediaQuery} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import AppbarMobile from './AppbarMobile';
import AppbarDesktop from './AppbarDesktop';


function Index() {

const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
    {matches ? <AppbarMobile /> : <AppbarDesktop />}
    </>
  )
}

export default Index