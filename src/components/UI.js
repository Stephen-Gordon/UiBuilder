

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState, useRef, useEffect } from 'react';
import { Grid, Button, Typography, Box, CssBaseline, Card, CardActions, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import { alpha } from '@mui/material';
import { AnimatePresence, motion, useInView} from "framer-motion";
import TextGradient from './TextGradient';




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

      let options = {
        firstColor: theme.palette.primary.main, 
        secondColor: theme.palette.secondary.main, 
        direction: "right",
        variant: 'h3'
      }
       
    return (

        
      <>
    {/*     <Grid sx={{ position:'fixed', width: '50%', height: '50%', alignItems: 'center', justifyContent: 'flex-end', display: 'flex', opacity: 0.5, overflow: 'hidden' }}>
            <Grid sx={{ overflow: 'hidden', backgroundImage: `linear-gradient( to top, ${alpha(theme.palette.primary.main, 1)}, ${alpha(theme.palette.secondary.main, 1)})`, borderRadius: '100%', width: '20%', height: '20%'}}>
                
            </Grid>
        </Grid>
 */}
      
            <Grid
            container
            style={{ minHeight: '100vh',  alignContent: 'center', position: 'sticky', top: 0}} 
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
    


           
        
        



            <Grid
                container column={12} sx={{display: 'flex', position: 'sticky', top: '0px', backgroundColor:  alpha(theme.palette.background.default, 0.7), backdropFilter: 'blur(60px)',  borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
                borderTop: '1px solid', borderColor: 'border',
                }} 
                style={{ height: `calc(100vh - 130px)`, alignContent: 'center', justifyContent: 'center'  }} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `calc(50vh - 130px)`, mx:2, my:0,  borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', mt: 5, p:2,}}>

                            <TextGradient options={options}>
                            Design
                            </TextGradient>

                            <Typography variant='h5'>
                                Design your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            
                        </Grid>
                     
                    </Grid>

            </Grid>

            <Grid
                container 
                column={12} 
                sx={{display: 'flex', position: 'sticky', top: '130px', backgroundColor:  alpha(theme.palette.background.default, 0.7), backdropFilter: 'blur(60px)',  borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
                borderTop: '1px solid', borderColor: 'border',
                }} 
                style={{ height: `calc(100vh - 130px)`, alignContent: 'center', justifyContent: 'center'  }} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `calc(50vh - 130px)`, mx:2, my:0, borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', mt: 5, p:2,}}>

                            <TextGradient options={options}>
                            Customize
                            </TextGradient>

                            <Typography variant='h5'>
                                Design your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            
                        </Grid>
                     
                    </Grid>

            </Grid>

            <Grid
                container 
                column={12} 
                sx={{display: 'flex', position: 'relative', top: '130px', backgroundColor:  alpha(theme.palette.background.default, 0.7), backdropFilter: 'blur(60px)',  borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
                borderTop: '1px solid', borderColor: 'border',
                }} 
                style={{ height: `100vh`, alignContent: 'center', justifyContent: 'center'  }} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `calc(50vh - 130px)`, mx:2, my:0, borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', mt: 5, p:2,}}>

                            
                            <TextGradient options={options}>
                            Simulate
                            </TextGradient>

                            <Typography variant='h5'>
                            Simulate your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            
                        </Grid>
                     
                    </Grid>
           
            </Grid>

            {/* Cards */}
            <Grid 
               container column={12} sx={{display: 'flex', position: 'relative', top: '130px', backgroundColor: alpha(theme.palette.background.default, 1), pt: {xs:'130px', lg:0}
               }} 
               style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'space-around', }} 
            >
                
   
                {[...Array(3).keys()].map(() => {
                    return (
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
                    )
                })}
               
            </Grid> 
            

            {/* Paper cards */}
{/* 
            <Grid 
            container column={12} sx={{display: 'flex', position: 'sticky', top: '130px', backgroundColor:  alpha(theme.palette.background.default, 0.7), backdropFilter: 'blur(60px)',  borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
            borderTop: '1px solid', borderColor: 'border',
            }} 
            style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'center'  }} >
              
   
                {
                    fonts.map((font) => {
                        return (
                        <Grid xs={12} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card elevation={0} sx={{ m:2, width: '100%', borderRadius: '24px', p: 1, border: '1px solid', borderColor: 'border',}}>
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
            </Grid> */}


           
      </>
           
           
            
       
       
      )

};

export default UI;

