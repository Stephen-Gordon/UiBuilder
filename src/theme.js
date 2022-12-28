import { useTheme , createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
        main: '#0971F1',
        secondary: '#053e85',
    },
    background: {
      default:'#2b2b2b',  //primary background
      primary:'#1e2024',
      secondary: '#232529',
      form: '#31343A',   //secondary background color
      white: "#f7f7f7",   //white
      light: "#edeff4",
      blue: '#1892ed',
      lightBlue: '#38a9ff',
      red: '#f52a59',
      darkRed: '#f52a59',
      border: '#494E58'
    },
  },
components: {
  root: {
    button: {
      color: 'f7f7f7'
    }
  }
}    
});
export default theme