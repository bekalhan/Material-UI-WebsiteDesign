import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme/theme';
import AppBar from './components/appBar/Index';
import Banner from './components/banner/Index';
import Promotions from './components/promotions/Index';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
          <AppBar />
          <Banner />
          <Promotions />
      </Container>
    </ThemeProvider>
   
  );
}

export default App;
