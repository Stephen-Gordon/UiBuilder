

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState } from 'react';
import { Grid, Button, Typography, Box, CssBaseline, Card, CardActions, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import CasinoIcon from '@mui/icons-material/Casino';
import Paper from '@mui/material/Paper';



const UI = ({theme, palette, palettes, font, fonts, setFont, updateAll, setPalette}) => {

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
                

               
                    
                    {/* <Paper elevation={24} sx={{mb:5, p:5, borderRadius: '8px'}}>
                        
                        <Typography color='text.primary' variant='p'>Whereas disregard and contempt for human rights have resulted </Typography>  

                       <Box sx={{mb:1}}>
                            <Typography color='text.secondary' variant='p'>{ font }</Typography> 
                        </Box> 

                        <Box sx={{mb:1}}>
                            <Typography color='text.secondary' variant='subtitle2'>{ palette.name }</Typography> 
                        </Box>

                    </Paper> */}

                    <Card elevation={0} sx={{ minWidth: '397px', maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', p:5, border: '1px solid', borderColor: 'background.paper'}}>
                        <CardContent>
                            <Typography variant="h4" sx={{mb:5}} component="div">
                                Roboto
                            </Typography>

                            <Typography  sx={{mb:5}} color="text.secondary" variant="body1">
                            Whereas disregard and contempt for human rights have resulted
                            </Typography>


                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button sx={{background: 'background.paper' }} variant="contained" size="small">Learn More</Button>
                        </CardActions>
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