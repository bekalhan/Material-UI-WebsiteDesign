import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@emotion/react';
import theme from './styles/theme/theme';
import AppBar from './components/appBar/Index';


function App() {
  return (
    <ThemeProvider theme={theme}>
       <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
          <AppBar />
      </Container>
    </ThemeProvider>
   
  );
}

export default App;
