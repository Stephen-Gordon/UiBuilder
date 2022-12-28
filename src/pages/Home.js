
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

  
  const [palette, setPalette] = useState(palettes[Math.floor(Math.random()*palettes.length)])
  
  const [colorPalette, setColorPalette] = useState([])

  const [primaryColorPalette, setPrimaryColorPalette] = useState([])

  

  const [JSON, setJSON] = useState(
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

    const [primaryPalette, setPrimaryPalette] = useState(
      {
          steps: 20,
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

 
   
   const [font, setFont] = useState(fonts[Math.floor(Math.random()*fonts.length)])

     const theme = createTheme({
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
        typography: {
          fontFamily: font
        },
        components: {
          variants: [
            {
              props: { variant: 'dashed', color: 'primary' },
              style: {
                border: '1px dashed darkblue',
              },
            },
            {
              props: { variant: 'dashed', color: 'secondary' },
              style: {
                border: '1px dashed darkred',
              },
            },
          ],
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
                  fontWeight: '700',
                  borderRadius: '16px'
                }
              }
            }
          },
        
    });
     
      
    const updateAll = () => {
        setPalette(palettes[Math.floor(Math.random() * palettes.length)])
        setFont(fonts[Math.floor(Math.random()*fonts.length)])
    }

    useEffect(() => {
        let colors = generate(JSON);
        setColorPalette(colors[0].colors)

        let primaryColors = generate(primaryPalette);
        setPrimaryColorPalette(primaryColors[0].colors)
        console.log("pri",primaryColors.colors)
    },[])

    console.log(primaryPalette)
    return (

    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <motion.div
        style={{ scaleX: scrollYProgress, background: `linear-gradient(90deg, ${palette.secondary.main}, ${palette.primary.main})`, height: '20px', position: 'fixed', transformOrigin: '0%', top: 0, left: '0', right: 0 }}
      />
      
        <ColorGenerator primaryPalette={primaryPalette} setPrimaryPalette={setPrimaryPalette }  primaryColorPalette={primaryColorPalette} setPrimaryColorPalette={setPrimaryColorPalette} JSON={JSON} setJSON={setJSON} colorPalette={colorPalette} setColorPalette={setColorPalette} palette={palette}  setPalette={setPalette} />

        <PrimaryColorGenerator/>

        <UI palette={palette} JSON={JSON} setJSON={setJSON} palettes={palettes} font={font} fonts={fonts} setPalette={setPalette} updateAll={updateAll} setFont={setFont}/>
       
        

    </ThemeProvider>
    
   
  )
}

export default Home;
