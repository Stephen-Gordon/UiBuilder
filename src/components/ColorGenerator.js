//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select , CssBaseline   } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { palette } from "@mui/system";

import ThemeAccordian from './ThemeAccordian';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { AnimatePresence, motion } from "framer-motion";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';



const ColorGenerator = ({ palette, setPrimaryJSON, backgroundColorPalette, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, setPalette, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {
  



    const [characters, updateCharacters] = useState(primaryColorPalette);
   
    const [customPalette, setCustomPalette] = useState([]);


    let primary
    function handleOnDragEnd(result) {
        if (!result.destination) {
            items.splice(result.destination.index, 0, reorderedItem);
        };

        const items = Array.from(customPalette);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCustomPalette(items);
    }
    
    let primaryColors;
    let backgroundColors;

    


    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
        primaryColors = generate(primaryJSON)

        setPrimaryColorPalette(primaryColors[0].colors)
        setBackgroundColorPalette(backgroundColors[0].colors)
        updateCharacters(primaryColors[0].colors)
       
        
       

      }, [primaryJSON, primaryColors, backgroundJSON, backgroundColors]);



      useEffect(() => {
   
      }, [characters]);



    /* BACKGROUND PALETTE */
   

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


    const addToPalette = (e) => {
        setCustomPalette(prevState => ([
             ...prevState,
             e.target.value 
        ]));
    }
    


    
    let BackgroundPalette = backgroundColorPalette.map((c, i)=> {
        return <Button style={{ transition: 'all 0.5s linear' }}  key={i} onClick={addToPalette} variant='contained' value={c.hex} sx={{m:1, width: '100px', height: '100px', borderRadius: '16px', backgroundColor: c.hex}}>{c.hex}</Button>
    })

    let PrimaryPalette = primaryColorPalette.map((c, i)=> {
        return (
            <Button style={{ transition: 'all 0.5s linear' }} key={i} onClick={addToPalette} variant='contained' value={c.hex} sx={{m:1, width: '100px', height: '100px', borderRadius: '16px', backgroundColor: c.hex, transition: 'ease-in', }}>{c.hex}</Button>
        )
        
    })  
    
    let SidePalette;

    if(customPalette.length > 0){
        SidePalette = customPalette.map((c, i)=> {
            return (
                <Button fullWidth key={i} variant='contained' value={c} sx={{ borderRadius: '0px', backgroundColor: c}}>{c}</Button>
            )
            
        })  
    }


    return (
        

        <>
        
         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', transition: 'all 0.5s linear'}}>
              
                <Drawer
                    sx={{
                    width: '300px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '300px',
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Background</Typography>
                    </AccordionSummary>
                        <AccordionDetails>

                        <Grid sx={{ml:3}}> 
                                
                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Hue
                            </Typography>


                            <Slider
                            label="Hi"
                            sx={{width: '200px'}}
                            aria-label="Temperature"
                            defaultValue={220}
                            min={200}
                            max={280}
                            step={10}
                            valueLabelDisplay="auto" 
                            onChange={handleBackgroundHueStart}
                            color="primary"
                            />
                        </Grid>

                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Saturation
                            </Typography>

                            <Slider
                                label="input"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'} 
                                defaultValue={0.07}
                                min={0}
                                max={1} 
                                step={0.01} 
                                valueLabelDisplay="auto" 
                                onChange={handleBackgroundSaturationStart}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.7}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBackgroundSaturationEnd}
                                color="primary"
                            />
                        </Grid>

                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Brightness
                            </Typography>

                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.9}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBackGroundBrightnessStart}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.1}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBackGroundBrightnessEnd}
                                color="primary"
                            />
                        </Grid>
                                
                               
                
                        </Grid>
                        </AccordionDetails>
                    </Accordion>
                
                    <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Primary</Typography>
                    </AccordionSummary>
                        <AccordionDetails>

                        <Grid sx={{ml:3}}> 
                                
                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Hue
                            </Typography>


                            <Slider
                            label="Hi"
                                sx={{width: '200px'}}
                                aria-label="Temperature"
                                defaultValue={220}
                                min={0}
                                max={360}
                                step={10}
                                valueLabelDisplay="auto" 
                                onChange={handlePrimaryHueStart} 
                               
                                color="primary"
                            />
                        </Grid>

                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Saturation
                            </Typography>

                            <Slider
                                label="input"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'} 
                                defaultValue={0.07}
                                min={0}
                                max={1} 
                                step={0.01} 
                                valueLabelDisplay="auto" 
                                onChange={handlePrimarySaturationStart}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.6}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handlePrimarySaturationEnd}
                                color="primary"
                            />
                        </Grid>

                        <Grid>
                            <Typography id="input-slider" gutterBottom>
                                Brightness
                            </Typography>

                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.9}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBrightnessStart}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={0.1}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBrightnessEnd}
                                color="primary"
                            />
                        </Grid>
                                
                               
                
                        </Grid>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Palette</Typography>
                            </AccordionSummary>
                            <AccordionDetails>

                                
                            
                                <DragDropContext onDragEnd={handleOnDragEnd}>
                                    <Droppable droppableId="characters">
                                        {(provided) => (
                                        <Box className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                            {customPalette.map((c, i) => {
                                            return (     
                                                <Grid key={i} sx={{display: 'flex', flexDirection: 'row',}}>
                                                        <Draggable key={i} draggableId={c} index={i}>
                                                        {(provided) => (           
                                                            <Box
                                                                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
                                                                onClick={null}  
                                                                key={i} 
                                                                variant='contained' 
                                                                
                                                                sx={{
                                                                    
                                                                backgroundColor: c,
                                                                 paddingTop: '20px',
                                                                m:1, width: '100px', height: '100px', borderRadius: '16px',
                                                                justifyContent: 'space-between',
                                                                fontWeight: '700',

                                                                }}
                                                                >
                                                                {c}
                                                            </Box>                                      
                                                        )}
                                                        </Draggable>
                                                </Grid>
                                            );
                                            })}
                                            {provided.placeholder}
                                        </Box>
                                        )}
                                    </Droppable>
                                    
                                </DragDropContext> 
                        
                            </AccordionDetails>
                    </Accordion>
                    <ThemeAccordian customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                </Drawer>
                
                <Grid sx={{display: 'flex', flexDirection: 'row'}}>

                <motion.div drag  dragConstraints={{ left: -400, right: 1}}>
                    <Grid sx={{width: '600px'}}>
                        <DragIndicatorIcon sx={{display: 'flex', flexDirection: 'row'}} />
                        {BackgroundPalette} 
                    </Grid>
                </motion.div>
                <AnimatePresence>
                    <motion.div 
                        initial={{opacity: 0, x: -400}}
                        animate={{opacity: 1, x: 500}}
                        exit= {{opacity: 0}}
                        drag
                        >
                        <Grid sx={{width: '600px'}}>
                            <DragIndicatorIcon sx={{display: 'flex', flexDirection: 'row'}} />
                            {PrimaryPalette} 
                        </Grid>
                    </motion.div>
                </AnimatePresence>
                    
                </Grid>
           
           </Grid> 
           
        </>
    )
}

export default ColorGenerator