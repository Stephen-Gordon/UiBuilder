
import '../App.css';
import { generate } from "@k-vyn/coloralgorithm";

import {  createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';

import palettes from '../assets/data/projects.json';
import UI from '../components/UI'
import ColorGenerator from '../components/ColorGenerator'
import PrimaryColorGenerator from '../components/PrimaryColorGenerator';

//motion
import { motion, useScroll } from "framer-motion";


const Home = () => {


  
  const [palette, setPalette] = useState(
    {
      "name": "Colors",
      "primary": {
          "main": "#4c82ed",
          "light": "",
          "dark": ""
      },
      "secondary": {
          "main": "#8798ba"
      },
      "background": {
          "default": "#121214",
          "paper": "#2c2d33"
      },
      "text": {
          "primary": "#fff",
          "secondary": "#cbcbcd",
          "disabled": ""
      }
  }
  )

  let fonts = [
    'Segoe UI',
    'Arial',
    'sans-serif',
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Inter',
    'Roboto',
    'Ubuntu',
    'Open Sans',
    'Montserrat'

]
  
  const [backgroundColorPalette, setBackgroundColorPalette] = useState([])

  const [primaryColorPalette, setPrimaryColorPalette] = useState([])


  const [font, setFont] = useState(fonts[Math.floor(Math.random()*fonts.length)])


  const [backgroundJSON, setBackgroundJSON] = useState(
        {
            steps: 20,
            hue: {
              start: 220, // 0 - 359
              end: 235, // 0 - 359
              rotation: "cw",
              curve: "easeInQuad", // See acceptable curves below
              direction: "easeOut"
            },
             saturation: {
                start: 0.14, // 0 - 1
                end: 0.14, // 0 - 1
                curve: "easeOutQuad",
                rate: 1, // 1 is default
                direction: "easeOut"
              }, 
             brightness: {
                start: 0.85, // 0 - 1
                end: 0.08, // 0 - 1
                curve: "linear",
                direction: "linear"
              }, 
        }
    )

    const [primaryJSON, setPrimaryJSON] = useState(
      {
          steps: 20,
          hue: {
            start: 220, 
            end: 220, 
            rotation: "cw",
            curve: "easeInQuad", 
            direction: "easeOut"
          },
           saturation: {
              start: 0.14, 
              end: 0.6, 
              curve: "easeOutQuad",
              rate: 1, 
              direction: "easeOut"
            }, 
           brightness: {
              start: 0.85,
              end: 0.08, 
              curve: "linear",
              direction: "linear"
            }, 
      }
  )  

  const { scrollYProgress } = useScroll();
    

    useEffect(() => {
      let colors = generate(backgroundJSON);
      setBackgroundColorPalette(colors[0].colors)

      let primaryColors = generate(primaryJSON);
      setPrimaryColorPalette(primaryColors[0].colors)
      
  }, [palette])
   


  
     const theme = createTheme({
        typography: {
          fontFamily: font
        },
        palette: {
         
            primary: {
                main: palette.primary.main,
                //contrastText: palette.text.primary,
            },
            secondary: {
                main: palette.secondary.main,
                //contrastText: palette.text.primary,
            },
            background: {
                default: palette.background.default,
                paper: palette.background.paper

            },
            text: {
                primary: palette.text.primary,
                secondary: palette.text.secondary
            }
        },
        overrides: {
          /* MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarColor: "#f7f7f7 #f7f7f7",
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                  backgroundColor: "#f7f7f7",
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                  borderRadius: 8,
                  backgroundColor: "#f7f7f7",
                  minHeight: 24,
                  border: "3px solid #f7f7f7",
                },
                "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                  backgroundColor: "#f7f7f7",
                },
                "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                  backgroundColor: "#f7f7f7",
                },
                "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: "#f7f7f7",
                },
                "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                  backgroundColor: "#f7f7f7",
                },
              },
            },
          }, */
          MuiCssBaseline: {
            '@global': {
              body: {
                transition: 'all 5s linear',
              },
            },
          },
        },
        components: {
            MuiPaper: {
              styleOverrides: {
                root: {
                 borderColor: '#2b2b2b'
                }
              }
            },
            MuiButton: {
              styleOverrides: {
                root: {
                  fontSize: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  //fontWeight: '700',
                  borderRadius: '24px'
                }
              }
            }
          },
        
    });
     

    
    return (

    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <motion.div
        style={{ scaleX: scrollYProgress, background: `linear-gradient(90deg, ${palette.secondary.main}, ${palette.primary.main})`, height: '20px', position: 'fixed', transformOrigin: '0%', top: 0, left: '0', right: 0 }}
      />
      
        <ColorGenerator fonts={fonts} setFont={setFont} primaryJSON={primaryJSON} setPrimaryJSON={setPrimaryJSON }  primaryColorPalette={primaryColorPalette} setPrimaryColorPalette={setPrimaryColorPalette} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} backgroundColorPalette={backgroundColorPalette} setBackgroundColorPalette={setBackgroundColorPalette} palette={palette}  setPalette={setPalette} />

        <PrimaryColorGenerator/>

        <UI theme={theme} palette={palette} palettes={palettes} setPalette={setPalette} /* updateAll={updateAll} */ /* setFont={setFont}  font={font} fonts={fonts} *//> 
       
        

    </ThemeProvider>
    
   
  )
}

export default Home;
