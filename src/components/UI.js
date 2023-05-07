

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState } from 'react';
import { Grid, Button, Typography, Box, CssBaseline, Card, CardActions, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import { alpha } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";


const UI = ({isVisible, theme, palette, font,  setPalette, fonts}) => {

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
      console.log(theme)
       
    return (

        
      <>
    {/*     <Grid sx={{ position:'fixed', width: '50%', height: '50%', alignItems: 'center', justifyContent: 'flex-end', display: 'flex', opacity: 0.5, overflow: 'hidden' }}>
            <Grid sx={{ overflow: 'hidden', backgroundImage: `linear-gradient( to top, ${alpha(theme.palette.primary.main, 1)}, ${alpha(theme.palette.secondary.main, 1)})`, borderRadius: '100%', width: '20%', height: '20%'}}>
                
            </Grid>
        </Grid>
 */}
      
            <Grid
            container
            style={{ minHeight: '100vh', width: '100%', alignContent: 'center',  }} 
            >
                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Typography variant='h3' 
                    sx={{
                        p:2,
                        backgroundImage: `linear-gradient( to top, ${alpha(theme.palette.primary.main, 1)}, ${alpha(theme.palette.secondary.main, 1)})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                        }}
                        >
                        UI Designer     
                    </Typography>              
                </Grid>

                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center',  mt: 5, p:2,}}>
                    <Typography variant='h5'>
                        Design, Customize and Simulate your User Interface in minutes 
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center',  mt: 5, p:2,}}>
                    <Button sx={{background: 'background.paper',}} variant="contained" size="large">Learn More</Button>
                </Grid>
            </Grid>
    


            {/* Cards */}

            <Grid 
            container column={12} sx={{display: 'flex'}} 
            style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'space-around'  }} >
              
   
                <Grid item xs={12} lg={6} xl={4} sx={{display: 'flex',  justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ minWidth: '0px', m:2, maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', p: {xs:2, lg:5}, border: '1px solid', borderColor: 'border'}}>
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

                <Grid item xs={12} lg={6} xl={4} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ minWidth: '0px', m:2, maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', m:2, p: {xs:2, lg:5}, border: '1px solid', borderColor: 'border'}}>
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
            
                <Grid item xs={12} lg={6} xl={4} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ minWidth: '0px', maxWidth: '514px', borderRadius: '24px', backgroundColor: 'background.default', m:2,  p: {xs:2, lg:5}, border: '1px solid', borderColor: 'border'}}>
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

            </Grid>




            {/* Paper cards */}

            <Grid 
            container column={12} sx={{display: 'flex'}} 
            style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'center'  }} >
              
   
                {
                    fonts.map((font) => {
                        return (
                        <Grid item xs={12} lg={3} xl={3} sx={{display: 'flex',  justifyContent: 'center'}}>
                            <Card elevation={0} sx={{ minWidth: '0px', m:2, width: '100%', borderRadius: '24px', p: 1, border: '1px solid', borderColor: 'border',}}>
                                <a href='#'>
                                <CardContent>
                                    <Typography variant="h4" sx={{mb:5}} component="div">
                                        {font}
                                    </Typography>

                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                    </Typography>
                                
                                </CardContent>
                                </a>
                            </Card>
                        </Grid>
                        )
                    })
                }
             

              

            </Grid>


           
      </>
           
           
            
       
       
      )

};

export default UI;

