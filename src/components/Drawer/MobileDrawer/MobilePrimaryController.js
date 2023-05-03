import { generate } from "@k-vyn/coloralgorithm";
import { Grid, Typography, Box, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { AnimatePresence, motion } from "framer-motion";

import { alpha } from "@mui/material";


const MobilePrimaryController = ({theme, addToPalette, PrimaryPalette, setRenderController, isPrimaryVisible, setIsPrimaryVisible, primaryJSON, setPrimaryColorPalette, setPrimaryJSON}) => {

  
    let primaryColors;



    useEffect(() => {
        
        
        primaryColors = generate(primaryJSON)

        setPrimaryColorPalette(primaryColors[0].colors)

      }, [primaryJSON, primaryColors]);
      

      let bgPal;
      

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
                sx={{width: '100%', height: '100%'  }}
                style={{width: '100%', }}
                initial={{ x: "100%" ,  scale: 0.8}}
                animate={{
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
                }}
                exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0.2, ease: [0.1, 0.8, 0.9, 0.2], opacity: 0.2 },
                }}
                
            >


        <motion.span
            initial={{ scale: 0.5, opacity: 0}}
            transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            >
            <Grid sx={{position: 'absolute', p:3, width: '100%',  height: '760px', overflow: 'hidden', }} container justifyContent="center">
                {
                    bgPal = PrimaryPalette.map((Pal, i) => {
                    Pal.props.sx.height = '30px'
                    return Pal
                    })
                }
            </Grid>
        </motion.span>


        <Grid sx={{p:3, width: '100%', position: 'relative', backdropFilter: "blur(100px)", backgroundBlendMode: 'overlay',  height: '100%',  }} >
                        
       


                <Typography sx={{ml:2, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
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

        
                    <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
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
                 


                
                    
                   
                  
                       <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
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

                       

                            
                        <Grid container xl={6} lg={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
                                
                        <Grid sx={{ width: '100%', my:3, p:1, border: '1px solid', borderColor: 'border', borderRadius: '24px', backgroundColor: 'background.default', cursor: '-moz-grab', cursor: 'grab'}}>
                
                            
                            <Grid container alignItems="space-around" justifyContent="space-around" display={'flex'}>
                                {
                                    bgPal = PrimaryPalette.map((Pal, i) => {
                                    console.log(Pal.props.sx) 
                                    Pal.props.sx.height = '100px'
                                    /* Pal.props.sx.width = '47%' */
                                    


                                    return Pal
                                 })
                                } 
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