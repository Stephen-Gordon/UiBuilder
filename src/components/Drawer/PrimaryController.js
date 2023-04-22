import { generate } from "@k-vyn/coloralgorithm";
import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';





const PrimaryController = ({primaryColorPalette, primaryJSON, setPrimaryColorPalette, setPrimaryJSON}) => {

  
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
        <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px'}}>
                    
                    <Grid>
                            <Grid sx={{mb:3, mt:1}}>
                                <Typography gutterBottom>
                                    Hue
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
                        </Grid>

                        <Grid sx={{mb:3, mt:1}}>
                            <Typography gutterBottom>
                                Saturation
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
                            <Slider
                                fullWidth
                                defaultValue={primaryJSON.saturation.end}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={handlePrimarySaturationEnd}
                                color="primary"
                            />
                        </Grid>

                        <Grid sx={{mb:3, mt:1 }}>
                            <Typography gutterBottom>
                                Brightness
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
                            <Slider
                                fullWidth
                                defaultValue={primaryJSON.brightness.end}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={handleBrightnessEnd}
                                color="primary"
                            />
                        </Grid>
                                
                               
                
                    </Grid>
                       
        </Grid>
                   
    )


}

export default PrimaryController