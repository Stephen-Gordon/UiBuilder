
import { generate } from "@k-vyn/coloralgorithm";
import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';




const BackgroundController = ({backgroundJSON, setBackgroundJSON, setBackgroundColorPalette}) => {


    
   
    let backgroundColors;

    


    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
  
        setBackgroundColorPalette(backgroundColors[0].colors)       

      }, [ backgroundJSON, backgroundColors]);





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
        </>
    )

}

export default BackgroundController