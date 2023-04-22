

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState } from 'react';
import { Grid, Button, Typography, Box, CssBaseline, Card, CardActions, CardContent } from '@mui/material';
import { Container } from '@mui/system';

import { AnimatePresence, motion } from "framer-motion";


const UI = ({isVisible, theme, palette, font,  setPalette}) => {

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
      
        <Grid
            container
            maxWidth="xl"
            columns={12}
            sx={{display: 'flex', flexDirection: 'column'}}
            style={{ minHeight: '100vh' }} >

                       
                          

                    <Grid container column={12}  sx={{display: 'flex'}}>
                       
                       
                    <AnimatePresence>
                                
                        {isVisible && (
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0}}
                            transition={{type: 'spring', }}
                            
                    >
                        <Card  item lg={2} md={2} sm={4} xs={6} elevation={0} sx={{ minWidth: '0px', maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', my:3,  p:5, sm: {p:1}, border: '1px solid', borderColor: 'border'}}>
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
                        
                    
                        <Card item lg={2} md={2} sm={4} xs={6} elevation={0} sx={{  maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', my:3,  p:5, border: '1px solid', borderColor: 'border'}}>
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
                        </motion.div>
                    )}
                              
                </AnimatePresence>
                    </Grid>

                  

            
        </Grid>


           
      </>
           
           
            
       
       
      )

};

export default UI;

