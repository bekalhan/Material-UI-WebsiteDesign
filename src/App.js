import './App.css';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme/theme';
import AppBar from './components/appBar/Index';
import Banner from './components/banner/Index';
import Promotions from './components/promotions/Index';
import Products from './components/products/Index';
import { Typography,Box } from '@mui/material';
import Footer from './components/footer/Index';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
          <AppBar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent="center" sx={{p:4}}  >
              <Typography variant='h4'>Our Products</Typography>
          </Box>
          <Products />
          <Footer />
      </Container>
    </ThemeProvider>
   
  );
}

export default App;
