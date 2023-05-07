
import '../App.css';
import { generate } from "@k-vyn/coloralgorithm";

import {  createTheme, ThemeProvider, alpha } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';


import ColorGenerator from '../components/ColorGenerator'


//motion
import { motion, useScroll } from "framer-motion";


const Home = () => {


  
  const [palette, setPalette] = useState(
    {
      "name": "Colors",
      "primary": {
          "main": "#4c82ed",
          "light": "#7196e1",
          "dark": "#0e43ad"
      },
      "secondary": {
        "main": "#FF6767",
        "light": "#8638d4",
        "dark": "#5805ab"
      },
      "error": {
        "main": "#FF6767",
        "light": "#FFA8A8",
        "dark": "#FF5757"
      },
      "warning": {
        "main": "#FFA954",
        "light": "#FFBF80",
        "dark": "#FF9E3D"
      },
      "info": {
        "main": "#70B7FF",
        "light": "#B4DAFF",
        "dark": "#57ABFF"
      },
      "success": {
        "main": "#70ff87",
        "light": "#b4ffc1",
        "dark": "#57ff73"
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
            steps: 18,
            hue: {
              start: 220,
              end: 235, 
              rotation: "cw",
              curve: "easeInQuad", 
              direction: "easeOut"
            },
             saturation: {
                start: 0.14,
                end: 0.14, 
                curve: "easeOutQuad",
                rate: 1, // 1 is default
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

    
    const [primaryJSON, setPrimaryJSON] = useState(
      {
          steps: 18,
          hue: {
            start: 220, 
            end: 220, 
            rotation: "cw",
            curve: "easeInQuad", 
            direction: "easeOut"
          },
           saturation: {
              start: 0.14, 
              end: 0.9, 
              curve: "easeOutQuad",
              rate: 1, 
              direction: "easeOut"
            }, 
           brightness: {
              start: 1,
              end: 0.4, 
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
            border: alpha(palette.text.primary, 0.1),
            primary: {
                light: palette.primary.light,
                main: palette.primary.main,
                dark: palette.primary.dark
            },
            secondary: {
                light: palette.secondary.light,
                main: palette.secondary.main,
                dark: palette.secondary.dark,
            },
            error: {
              light: palette.error.light,
              main: palette.error.main,
              dark: palette.error.dark,
            },
            warning: {
              light: palette.warning.light,
              main: palette.warning.main,
              dark: palette.warning.dark,
            },
            info: {
              light: palette.info.light,
              main: palette.info.main,
              dark: palette.info.dark,
            },
            success: {
              light: palette.success.light,
              main: palette.success.main,
              dark: palette.success.dark,
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
            MuiList: {
              styleOverrides: {
                root: {
                  display: 'flex',
                  flexFlow: "row wrap",
                  justifyContent: 'center',
                  borderRadius: '12px',
                  maxWidth: '200px',
                }
              }
            },
            MuiTabs: {
              styleOverrides: {
                root: {
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  justifyContent: 'space-around',
                  borderRadius: '12px',
                  width: '100%',
                }
              }
            },
            MuiOutlinedInput: {
              styleOverrides: {
                root: {
                  width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'
                },
                notchedOutline:{
                  border: 0,
                  
                },
              }
            },
            MuiButton: {
              styleOverrides: {
                root: {
                  ":hover": {
                    opacity: 0.9,
                    
                  },
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
{/* 
      <motion.div
          style={{ scaleX: scrollYProgress, background: `linear-gradient(90deg, ${palette.secondary.main}, ${palette.primary.main})`, 
          height: '20px', 
          position: 'fixed', 
          transformOrigin: '0%', 
          top: 0, 
          left: '0', 
          right: 0 }}
      /> */}
     
      <ColorGenerator 
          theme={theme} 
          fonts={fonts} 
          setFont={setFont} primaryJSON={primaryJSON} 
          setPrimaryJSON={setPrimaryJSON }  
          primaryColorPalette={primaryColorPalette} 
          setPrimaryColorPalette={setPrimaryColorPalette} backgroundJSON={backgroundJSON} 
          setBackgroundJSON={setBackgroundJSON} backgroundColorPalette={backgroundColorPalette} 
          setBackgroundColorPalette={setBackgroundColorPalette} palette={palette}  setPalette={setPalette} 
      />

       
       
     

    </ThemeProvider>
    
   
  )
}

export default Home;
