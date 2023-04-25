import { generate } from "@k-vyn/coloralgorithm";
import { Grid, Typography, Box, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { AnimatePresence, motion } from "framer-motion";




const MobilePrimaryController = ({addToPalette, PrimaryPalette, setRenderController, isPrimaryVisible, setIsPrimaryVisible, primaryJSON, setPrimaryColorPalette, setPrimaryJSON}) => {

  
    let primaryColors;



    useEffect(() => {
        
        
        primaryColors = generate(primaryJSON)

        setPrimaryColorPalette(primaryColors[0].colors)

      }, [primaryJSON, primaryColors]);



    /* PRIMARY PALETTE */


    const handlePrimaryHueStart = (e) => {    
     
        setPrimaryJSON(prevState => (
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

    const handlePrimarySaturationStart = (e) => {      
        
        setPrimaryJSON(prevState => (
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

    const handlePrimarySaturationEnd = (e) => {
          
        setPrimaryJSON(prevState => (
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

    const handleBrightnessStart = (e) => {
           
        setPrimaryJSON(prevState => (
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

    const handleBrightnessEnd = (e) => {
         
        setPrimaryJSON(prevState => (
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
        <AnimatePresence>
            {isPrimaryVisible && (
                    
        <motion.div 
            sx={{width: '100%'}}
            initial={{  x: 900 }}
            style={{width: '100%'}}
            animate={{ x:0}}
            exit={{ x: 900 }}
            transition={{duration:0.6}}
        >

        <Grid sx={{p:3, width: '100%', position: 'relative',  backgroundColor: '' }} >
                        
       


                <Typography sx={{ml:2, mt:3}}  variant={"subtitle1"}  color="text.secondary">
                    Hue
                </Typography>

                <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                
                    <Grid sx={{width: '100%',}}>
                        <Grid sx={{mb:1}}>
                            <Grid sx={{mb:1}}>
                                <Typography variant={"body2"}   color="text.secondary">
                                    Start
                                </Typography>
                            </Grid>
                            <Stack spacing={2} direction="row"  alignItems="center">
                                    <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        aria-label="Temperature"
                                        defaultValue={primaryJSON.hue.start}
                                        min={0}
                                        max={360}
                                        step={10}
                                        onChange={handlePrimaryHueStart} 
                                        color="primary"
                                    />
                    
                                <Typography color="text.secondary" variant="body1">
                                359
                                </Typography>
                            </Stack>
                        </Grid>
                        
                    
                    </Grid>
                
                </Grid>

                <Grid>
                    <Typography sx={{ml:2, mt:3}}  variant={"subtitle1"}  color="text.secondary">
                            Saturation
                    </Typography>

                        <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                        
                            <Grid sx={{width: '100%',}}>
                                <Grid sx={{mb:1}}>
                                    <Grid sx={{mb:1}}>
                                        <Typography variant={"body2"}   color="text.secondary">
                                            Start
                                        </Typography>
                                    </Grid>
                                    <Stack spacing={2} direction="row"  alignItems="center">
                                            <Typography textAlign="center" color="text.secondary" variant="body1">
                                                0
                                            </Typography>
                                            <Slider
                                                fullWidth 
                                                defaultValue={primaryJSON.saturation.start}
                                                min={0}
                                                max={1} 
                                                step={0.01} 
                                                onChange={handlePrimarySaturationStart}
                                                color="primary"
                                            />
                            
                                        <Typography color="text.secondary" variant="body1">
                                            1
                                        </Typography>
                                    </Stack>
                                </Grid>
                                
                                <Grid sx={{mb:1, mt:2, borderTop: '1px solid', borderColor: 'border',}}>
                                </Grid>

                                <Grid sx={{mb:1, mt:2}}>
                                    <Typography variant={"body2"}   color="text.secondary">
                                        End
                                    </Typography>
                                </Grid>
                                <Stack spacing={2} direction="row" alignItems="center">
                                <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        defaultValue={primaryJSON.saturation.end}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        onChange={handlePrimarySaturationEnd}
                                        color="primary"
                                    />
                                    <Typography color="text.secondary" variant="body1">
                                        1
                                    </Typography>
                                </Stack>
                                
                            </Grid>
                        
                        </Grid>
                    </Grid>


                
                    
                   
                    <Grid>
                       <Typography sx={{ml:2, mt:3}}  variant={"subtitle1"}  color="text.secondary">
                            Brightness
                        </Typography>

                        <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px', width: '100%', display: 'flex', alignItems: 'center', }}>
                          
                            <Grid sx={{width: '100%',}}>
                                <Grid sx={{mb:1}}>
                                    <Grid sx={{mb:1}}>
                                        <Typography variant={"body2"}   color="text.secondary">
                                            Start
                                        </Typography>
                                    </Grid>
                                    <Stack spacing={2} direction="row"  alignItems="center">
                                            <Typography textAlign="center" color="text.secondary" variant="body1">
                                                0
                                            </Typography>
                                            <Slider
                                                fullWidth
                                                defaultValue={primaryJSON.brightness.start}
                                                min={0}
                                                max={1}
                                                step={0.01}
                                                onChange={handleBrightnessStart}
                                                color="primary"
                                            />
                               
                                        <Typography color="text.secondary" variant="body1">
                                            1
                                        </Typography>
                                    </Stack>
                                </Grid>
                                
                                <Grid sx={{mb:1, mt:2, borderTop: '1px solid', borderColor: 'border',}}>
                                </Grid>

                                <Grid sx={{mb:1, mt:2}}>
                                    <Typography variant={"body2"}   color="text.secondary">
                                        End
                                    </Typography>
                                </Grid>
                                <Stack spacing={2} direction="row" alignItems="center">
                                <Typography textAlign="center" color="text.secondary" variant="body1">
                                        0
                                    </Typography>
                                    <Slider
                                        fullWidth
                                        defaultValue={primaryJSON.brightness.end}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        onChange={handleBrightnessEnd}
                                        color="primary"
                                    />
                                    <Typography color="text.secondary" variant="body1">
                                        1
                                    </Typography>
                                </Stack>
                                
                            </Grid>
                          
                        </Grid>

                       </Grid>
                       

                            
                            
                   
                                
                 
       

        <Grid container xl={6} lg={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
                                
        <Grid sx={{ width: '100%', maxWidth: '100%', my:3, p:1, border: '1px solid', borderColor: 'border', borderRadius: '24px', backgroundColor: 'background.default', cursor: '-moz-grab', cursor: 'grab'}}>

         

            <Grid container justifyContent="space-around ">
                {PrimaryPalette} 
            </Grid>

        </Grid>

        </Grid>
    </Grid>

    </motion.div>
        )}
        </AnimatePresence>
                   
    )


}

export default MobilePrimaryController