import React from 'react';
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";
  import banner from '../../img/banner.png';



function Index() {

const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <BannerContainer >
    <BannerImage src={banner} />
    <BannerContent>
      <Typography variant="h6">Huge Collection</Typography>
      <BannerTitle variant="h2">
        New Bags
      </BannerTitle>

      <BannerDescription variant="subtitle">
        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
        tempor incididunt ut labore et dolore magna
      </BannerDescription>

      <BannerShopButton color="primary">Shop Now</BannerShopButton>
    </BannerContent>
  </BannerContainer>

  )
}

export default Index