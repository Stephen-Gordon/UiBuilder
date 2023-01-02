//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Drawer, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { palette } from "@mui/system";


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const ColorGenerator = ({ palette, setPrimaryJSON, backgroundColorPalette, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, setPalette, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {
  



    const [characters, updateCharacters] = useState(primaryColorPalette);
   
    const [customPalette, setCustomPalette] = useState([]);


    let primary
    function handleOnDragEnd(result) {
            if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
    }
    
    let primaryColors;
    let backgroundColors;

    


    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
        primaryColors = generate(primaryJSON)

        setPrimaryColorPalette(primaryColors[0].colors)
        setBackgroundColorPalette(backgroundColors[0].colors)
        updateCharacters(primaryColors[0].colors)
        console.log(characters)
       
        primary = primaryColors[0].colors[0].hex
        if(characters.length >= 1){
            primary = characters[0].hex
        }

        setPalette(prevState => ({
        
            ...prevState,
            "name": prevState.name,
             "primary": {
                "main": primary
            }, 
            "secondary": {    
                "main":  primary
            },
            "background": {
                "default": backgroundColors[0].colors[19].hex,
                "paper": backgroundColors[0].colors[15].hex
            },     
        }));
      }, [primaryJSON, primaryColors, backgroundJSON, backgroundColors]);



      useEffect(() => {
       
        if(characters.length >= 1){
            primary = characters[0].hex
            console.log(primary)
            setPalette(prevState => ({
        
                ...prevState,
                "name": prevState.name,
                 "primary": {
                    "main": primary
                }, 
                "secondary": {    
                    "main":  primary
                }
            }));
        }
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
                end: prevState.hue.end,
                rotation: "cw",
                curve: "easeInQuad", 
                direction: "easeOut"
            }
        }
        ));
    }

    const handlePrimaryHueEnd = (e) => {    
     
        setPrimaryJSON(prevState => (
        {   ...prevState,
            hue: {
                start: prevState.hue.start,
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
        console.log(customPalette)
    }
    


    
    let BackgroundPalette = backgroundColorPalette.map((c, i)=> {
        return <Button fullWidth key={i} variant='contained' sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
    })

    let PrimaryPalette = primaryColorPalette.map((c, i)=> {
        return (
            <Button fullWidth key={i} onClick={addToPalette} variant='contained' value={c.hex} sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
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
            style={{ minHeight: '100vh' }}>
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
                            <Slider
                            label="Hi"
                                sx={{width: '200px'}}
                                aria-label="Temperature"
                                defaultValue={220}
                                min={0}
                                max={360}
                                step={10}
                                valueLabelDisplay="auto" 
                                onChange={handlePrimaryHueEnd} 
                               
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

                         
                    <Box sx={{mt:3}}>
                        
                    {SidePalette}
                    </Box>  
                        </AccordionDetails>
                    </Accordion>
                    
                     
                </Drawer>


                <Grid sx={{display: 'flex', flexDirection: 'row'}}>
                    <Grid sx={{width: '400px'}}>
                        {BackgroundPalette} 
                    </Grid>
                    
                    <Grid sx={{ml:5, width: '400px'}}>
                        {PrimaryPalette}    
                    </Grid>

                   
                    {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                    
                        <Droppable droppableId="characters">
                            {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {characters.map((c, i, index) => {
                                return (
                                    <>
                                    <Grid sx={{display: 'flex', flexDirection: 'row'}}>
                                    <Grid sx={{ml:5, width: '400px'}}>
                                    <Draggable key={i} draggableId={c.hex} index={i}>
                                    {(provided) => (           
                                        <Box
                                            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
                                            onClick={null}  
                                            key={i} 
                                            variant='contained' 
                                            sx={{ borderRadius: '0px', backgroundColor: c.hex, paddingTop: '8px',
                                            paddingBottom: '8px',
                                            paddingLeft: '32px',
                                            paddingRight: '32px',
                                            fontWeight: '700',
                                            }}
                                            >
                                            {c.hex}
                                        </Box>                                      
                                    )}
                                    </Draggable>
                                    </Grid>
                                    
                                    </Grid>
                                    </>
                                );
                                })}
                                {provided.placeholder}
                            </ul>
                            )}
                        </Droppable>
                        
                    </DragDropContext> */}
                    
                 

                    
                </Grid>
           </Grid> 
           
        </>
    )
}

export default ColorGenerator