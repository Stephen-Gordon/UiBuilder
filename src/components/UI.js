

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
        direction: "bottom",
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
            maxWidth="lg"
            column={12} 
            justifySelf="center"
            style={{ minHeight: '100vh',  alignContent: 'center', justifyContent:'center'}} 
            >
                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Typography 
                    variant='h3' 
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

                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', mt: 5, p:2,}}>
                    <Typography variant='h5' color="text.secondary">
                        Design, Customize and Simulate your User Interface in minutes 
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center',  mt: 5, p:2,}}>
                    <Button sx={{background: 'background.paper',}} variant="contained" size='medium'>Learn More</Button>
                </Grid>
            </Grid>
    


           
        
        
            {/* Design */}


            <Grid
                container 
                column={12} 
                maxWidth="lg"
                justifySelf="center"
                sx={{display: 'flex'}} 
                style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'center'  }} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `50vh   `, mx:2, my:0,  borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', alignContent: 'center', mt: { xs:3, md: 0}, p:2,}}>
                            <Grid>
                                <TextGradient options={options} >
                                Design
                                </TextGradient>
                            </Grid>
                            
                            <Typography sx={{my: { xs:3, md: 5}}} variant='h5' color="text.secondary">
                                Design your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            <Button sx={{background: 'background.paper', width: '50%'}} variant="outlined" size="medium">Learn More</Button>
                        </Grid>
                     
                    </Grid>

            </Grid>
            {/* Customize  */}
            <Grid
                container 
                column={12} 
                maxWidth="lg"
                justifySelf="center"
                sx={{display: 'flex'}} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `50vh   `, mx:2, my:0, borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', alignContent: 'center', mt: { xs:3, md: 0}, p:2,}}>

                            <Grid>
                            <TextGradient options={options} >
                                Customize
                            </TextGradient>
                            </Grid>
                            
                            <Typography sx={{my: { xs:3, md: 5}}} variant='h5' color="text.secondary">
                                Design your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            <Button sx={{background: 'background.paper', width: '50%'}} variant="outlined" size="medium">Learn More</Button>
                        </Grid>
                     
                    </Grid>

            </Grid>
            {/* Sim */}
            <Grid
                container 
                column={12} 
                maxWidth="lg"
                justifySelf="center"
                sx={{display: 'flex'}} 
                style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'center'  }} >
              
                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
                        <Card elevation={0} sx={{width: '100%', height: `50vh   `, mx:2, my:0, borderRadius: '24px', p: {xs:2, lg:5}}}>
                          
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center', alignContent: 'flex-start'}}>

                        <Grid item xs={12} lg={12} sx={{ display: 'grid', justifyContent: 'center', alignContent: 'center', mt: { xs:3, md: 0}, p:2,}}>

                            <Grid>
                            <TextGradient options={options} >
                            Simulate
                            </TextGradient>
                            </Grid>
                            
                            <Typography sx={{my: { xs:3, md: 5}}} variant='h5' color="text.secondary">
                            Simulate your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.
                            </Typography>
                            <Button sx={{background: 'background.paper', width: '50%'}} variant="outlined" size="medium">Learn More</Button>
                        </Grid>
                     
                    </Grid>

            </Grid>

            {/* Cards */}
            
            <Grid 
            maxWidth="lg"
            justifySelf="center"
            container 
            column={12} 
            sx={{ minHeight: '100vh', display: 'flex', alignContent: 'center', justifyContent: 'center', pt: {xs:'130px', lg:0}}} 
            >
                

             
                        <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
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
                                    <Button sx={{background: 'background.paper'  , mt: { xs:3, md: 0},}} color='secondary' variant="contained" size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={6} xl={6} sx={{display: 'flex',  justifyContent: 'center'}}>
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
                                    <Button sx={{background: 'background.paper'  , mt: { xs:3, md: 0},}} color='primary' variant="contained" size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
            
            
            </Grid> 
            {/* Paper cards */}
 
            <Grid 
            container 
            column={12}
             sx={{display: 'flex', backdropFilter: 'blur(60px)',
            }} 
            style={{ minHeight: '100vh', alignContent: 'center', justifyContent: 'center'  }} >
              
   
                <Grid xs={12} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ m:2, width: '100%', borderRadius: '24px', p: 1, border: '1px solid', borderColor: 'border',}}>
                        <a href='#'>
                        <CardContent>
                            <Typography variant="h4" sx={{mb:5}} component="div">
                                Ubuntu
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                        
                        </CardContent>
                        </a>
                    </Card>
                </Grid>
                <Grid xs={12} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ m:2, width: '100%', borderRadius: '24px', p: 1, border: '1px solid', borderColor: 'border',}}>
                        <a href='#'>
                        <CardContent>
                            <Typography variant="h4" sx={{mb:5}} component="div">
                                Arial
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                        
                        </CardContent>
                        </a>
                    </Card>
                </Grid>
                <Grid xs={12} lg={3} xl={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Card elevation={0} sx={{ m:2, width: '100%', borderRadius: '24px', p: 1, border: '1px solid', borderColor: 'border',}}>
                        <a href='#'>
                        <CardContent>
                            <Typography variant="h4" sx={{mb:5}} component="div">
                                Roboto
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                        
                        </CardContent>
                        </a>
                    </Card>
                </Grid>
                
                <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Primary</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                            <Button  variant='contained' sx={{m:1, backgroundColor:'primary.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                            <Button  variant='contained' sx={{m:1, backgroundColor:'primary.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                            <Button  variant='contained' sx={{m:1, backgroundColor:'primary.dark', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Secondary</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>

                    <Grid  item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Error</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'error.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'error.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'error.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>

                    <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Warning</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>

                    <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Info</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'info.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'info.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'info.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>
            
                    <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                        <Typography  align='center' sx={{mt:1, mb:1}}>Success</Typography>
                        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'success.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'success.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        <Button  variant='contained'  sx={{m:1, backgroundColor:'success.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                        </Grid>
                    </Grid>
            </Grid> 

          {/*   <Grid
                style={{ minHeight: '100vh'}} 
                maxWidth="lg"
                container
                column={12} 
                justifyContent={"center"}
                spacing={0}
                sx={{ position: 'sticky', top: '130px', display: 'flex', justifyContent: 'center', sm: {p:1, }, md: {p:5}, borderRadius: '24px', backgroundColor: 'background.default', border: '1px solid', borderColor: 'border', }}>
                    
                

                </Grid> */}


           
      </>
           
           
            
       
       
      )

};

export default UI;

