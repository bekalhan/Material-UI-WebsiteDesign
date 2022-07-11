import React from 'react';
import { Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {Products} from '../../data/index';
import SingleProduct from './SingleProduct';

function Index() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


    const renderProducts = Products?.map((product) =>(
        <Grid item key={product.id} display="flex" flexDirection="column" alignItems="center" xs={2} sm={4} md={4}>
            <SingleProduct product={product} matches={matches} />
        </Grid>
    ));


  return (
    <Container>
        <Grid container
        justifyContent="center"
        sx={{margin : "20px 4px 10px 4px"}}
        spacing={{xs:2,md:3}}  
        columns={{xs:4, sm:8, md:12}}
          >
            {renderProducts}
        </Grid>
    </Container>
  )
}

export default Index