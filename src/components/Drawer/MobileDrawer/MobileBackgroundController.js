
import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

import { AnimatePresence, motion } from "framer-motion";


const MobileBackgroundController = ({BackgroundPalette, addToPalette,renderController, setRenderController, setIsVisible, isBackgroundVisible, setIsBackgroundVisible, backgroundJSON, setBackgroundJSON, setBackgroundColorPalette}) => {


    
   
    let backgroundColors;

    


    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
      
        setBackgroundColorPalette(backgroundColors[0].colors)       

      }, [ backgroundJSON, backgroundColors,isBackgroundVisible]);





    const handleBackgroundHueStart = (e) => {    
     
        setBackgroundJSON(prevState => (
        {   ...prevState,
            hue: {
                start: e.target.value,
                end: e.target.value,
                rotation: "cw",
                curve: "easeInQuad", 
                direction: "easeOut"
            }
        }
        ));
    }

    const handleBackgroundSaturationStart = (e) => {      
        
        setBackgroundJSON(prevState => (
        {   ...prevState,
            saturation: {
                start: e.target.value, 
                end: prevState.saturation.end, 
                curve: "easeOutQuad",
                rate: 1, 
                direction: "easeOut"
            }, 
        }
        ));
    }

    const handleBackgroundSaturationEnd = (e) => {
          
        setBackgroundJSON(prevState => (
            {   ...prevState,
                saturation: {
                    start: prevState.saturation.start,
                    end: e.target.value, 
                    curve: "easeOutQuad",
                    rate: 1, 
                    direction: "easeOut"
                }, 
            }
        ));
    
    }

    const handleBackGroundBrightnessStart = (e) => {
           
        setBackgroundJSON(prevState => (
            {   
                ...prevState,
                brightness: {
                    start: e.target.value, 
                    end: prevState.brightness.end,
                    curve: "linear",
                    direction: "linear"
                }, 
            }
        ));
    }

    const handleBackGroundBrightnessEnd = (e) => {
         
        setBackgroundJSON(prevState => (
            {   
                ...prevState,
                brightness: {
                    start: prevState.brightness.start,
                    end: e.target.value, 
                    curve: "linear",
                    direction: "linear"
                }, 
            }
        ));
    }



    

    return (
        <>
         <AnimatePresence>
                {isBackgroundVisible && (
                    
            <motion.div 
                sx={{width: '100%'}}
                initial={{  x: 900 }}
                style={{width: '100%'}}
                animate={{ x:0}}
                exit={{ x: 900 }}
                transition={{duration:0.5}}
            >
           
                <Grid sx={{p:3, width: '100%', position: 'relative',  backgroundColor: 'background.default' }} >


                            
                <Grid sx={{mb:1}}>
                    <Box 
                    sx={{cursor: 'pointer'}}
                    onClick={() => {
                        setRenderController(true) 
                        setIsBackgroundVisible(false)
                    }}
                    >
                        
                        <Grid sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                        <ArrowBackIosIcon  fontSize="xs" color="primary"/>
                        <Typography color="primary" variant="p">
                        
                            Controller
                        </Typography>
                        
                        </Grid>


                    </Box>
                </Grid>







                <Typography sx={{mb:1}} variant="h4">
                Background
                </Typography>

                <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px'}}>
                        
                        <Grid>
                            <Grid sx={{mb:3, mt:1}}>

                                <Typography gutterBottom>
                                    Hue
                                </Typography>


                                <Slider
                                    fullWidth
                                    defaultValue={backgroundJSON.hue.start}
                                    min={200}
                                    max={280}
                                    step={10}
                                    onChange={handleBackgroundHueStart}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>

                        <Grid>
                            <Grid sx={{mb:3, mt:1}}>
                                <Typography gutterBottom>
                                    Saturation
                                </Typography>

                                <Slider
                                    fullWidth 
                                    defaultValue={backgroundJSON.saturation.start}
                                    min={0}
                                    max={1} 
                                    step={0.01} 
                                    onChange={handleBackgroundSaturationStart}
                                    color="primary"
                                />
                                <Slider
                                    fullWidth
                                    defaultValue={backgroundJSON.saturation.end}
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    onChange={handleBackgroundSaturationEnd}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>

                        

                        <Grid sx={{mb:3, mt:1 }}>
                            <Typography gutterBottom>
                                Brightness
                            </Typography>

                            <Slider
                                fullWidth
                                defaultValue={backgroundJSON.brightness.start}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={handleBackGroundBrightnessStart}
                                color="primary"
                            />
                            <Slider
                                fullWidth
                                defaultValue={backgroundJSON.brightness.end}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={handleBackGroundBrightnessEnd}
                                color="primary"
                            />
                        </Grid>
                </Grid> 
                <Grid container xl={6} lg={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
                                
                <Grid sx={{ width: '100%', maxWidth: '400px', my:3, p:1, border: '1px solid', borderColor: 'border', borderRadius: '24px', backgroundColor: 'background.default', cursor: '-moz-grab', cursor: 'grab'}}>
        
                    
        
                    <Grid container justifyContent="space-around ">
                        {BackgroundPalette} 
                    </Grid>
        
                </Grid>
        
                </Grid>


                </Grid>
            </motion.div>
              )}
              </AnimatePresence>
        </>
    )

}

export default MobileBackgroundController