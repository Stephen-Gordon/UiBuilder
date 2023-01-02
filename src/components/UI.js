

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState } from 'react';
import { Grid, Button, Typography, Box, CssBaseline, Card } from '@mui/material';
import { Container } from '@mui/system';
import CasinoIcon from '@mui/icons-material/Casino';
import Paper from '@mui/material/Paper';

//motion
import { motion } from "framer-motion";
import theme from 'prism-react-renderer/themes/dracula';
import { BorderColor } from '@mui/icons-material';


//components
import ColorGenerator from './ColorGenerator';


const UI = ({palette, palettes, font, fonts, setFont, updateAll, setPalette}) => {

   
   const handleClick = () => {
    updateAll()
   }
   /*  
    const handleFont = () => {
        setFont(fonts[Math.floor(Math.random()*fonts.length)])
    } */

    const handlePalette = () => {
        setPalette(palettes[Math.floor(Math.random() * palettes.length)])
    }   
   

      
    
        const exampleCode = 
        `
        const theme = createTheme({
            typography: {
                fontFamily: ${font}
            },
            palette: {
                primary: {
                    main: ${palette.primary.main}
                },
                secondary: {
                    main: ${palette.secondary.main}
                },
                background: {
                    default: ${palette.background.default}
                    paper: ${palette.background.paper}
                },
                text: {
                    primary: ${palette.text.primary},
                    secondary: ${palette.text.secondary}        
                }
            },
        });
    `; 

    const copyToClipboard = (e) => {
        console.log(e.target.value)
        navigator.clipboard.writeText(e.target.value)
      }


    return (

        
      <>
      <div className='App-header'>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
                

               
                    
                    <Paper elevation={24} sx={{mb:5, p:5, borderRadius: '8px'}}>
                        
                        <Typography color='text.primary' variant='p'>Whereas disregard and contempt for human rights have resulted </Typography>  

                     {/*    <Box sx={{mb:1}}>
                            <Typography color='text.secondary' variant='p'>{ font }</Typography> 
                        </Box> */}

                        <Box sx={{mb:1}}>
                            <Typography color='text.secondary' variant='subtitle2'>{ palette.name }</Typography> 
                        </Box>

                    </Paper>
                    
             
           
            {/* <Button variant="contained" color="primary"  sx={{m:3, display: 'flex',  justifyContent: 'center'}} onClick={handleClick}><CasinoIcon/></Button>
             */}
            
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
                
               {/*  <Button variant="contained" color="secondary" size="large" sx={{m:3}} onClick={handleFont}>Font</Button> */}
                {/* <Button variant="contained" color="secondary" sx={{m:3}} onClick={handlePalette}>Palatte</Button>        */}  
            </Container>
        </Grid>
    

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            
                <Grid sx={{ mb:5, p:5, borderRadius: '8px', border: '1px solid #ffffff21'}}>

                    <Button value={palette.primary.main} onClick={copyToClipboard} variant="contained" color="primary" sx={{m:5, width: '100px', height: '100px'}} >
                        { palette.primary.main } pri
                    </Button>

                    <Button value={palette.secondary.main} onClick={copyToClipboard} variant="contained" color="secondary" sx={{m:5, width: '100px', height: '100px'}} >
                        { palette.secondary.main } sec
                    </Button>
                    
                    <Button value={palette.background.default} onClick={copyToClipboard} color="secondary" variant={palette.background.default}  sx={{backgroundColor: 'background.default', m:5, width: '100px', height: '100px', border: `1px solid #ffffff21`}} >
                        { palette.background.default } bg
                    </Button>

                    <Button value={palette.background.paper} onClick={copyToClipboard} color="secondary" variant={palette.background.paper}  sx={{backgroundColor: 'background.paper', m:5, width: '100px', height: '100px', border: `1px solid #ffffff21`}} >
                        { palette.background.paper } paper
                    </Button>


                </Grid>
                <Card sx={{width: '300px', height: '300px'}}>
                <Typography>
                    Hi
                </Typography>
                </Card>
        </Grid>


        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
        
            <Highlight theme={dracula} {...defaultProps} code={exampleCode} language={'jsx'}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
            </Highlight> 
        
        </Grid>
        </div>        
      </>
           
           
            
       
       
      )

};

export default UI;