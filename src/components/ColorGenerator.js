//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { palette } from "@mui/system";
import theme from "prism-react-renderer/themes/dracula";



const ColorGenerator = ({ palette, setPrimaryPalette, colorPalette, setColorPalette, JSON, setJSON, setPalette, primaryPalette, primaryColorPalette, setPrimaryColorPalette }) => {
  
    let colors 

    let primaryColors;

    const [input, setInput] = useState(220)
    const [input2, setInput2] = useState(Number(input +15))
    
    const [saturation, setSaturation] = useState(0.14)
    const [saturation2, setSaturation2] = useState(saturation)

    const [brightness, setBrightness] = useState(0.85)
    const [brightness2, setBrightness2] = useState(0.08)




    const [primaryHueStart, setPrimaryHueStart] = useState(220)
    const [primaryHueEnd, setPrimaryHueEnd] = useState(Number(primaryHueStart))
    
    const [primarySaturationStart, setPrimarySaturationStart] = useState(0.14)
    const [primarySaturationEnd, setPrimarySaturationEnd] = useState(0.6)

    const [primaryBrightnessStart, setPrimaryBrightnessStart] = useState(0.85)
    const [primaryBrightnessEnd, setPrimaryBrightnessEnd] = useState(0.08)

    let background;
    let paper;
    let primary;

    

    const generateBackgroundPalette = () => {
        
        setJSON(
            {
                steps: 20,
                hue: {
                  start: input, // 0 - 359
                  end: input2, // 0 - 359
                  rotation: "cw",
                  curve: "easeInQuad", // See acceptable curves below
                  direction: "easeOut"
                },
                 saturation: {
                    start: saturation, // 0 - 1
                    end: saturation2, // 0 - 1
                    curve: "easeOutQuad",
                    rate: 1, // 1 is default
                    direction: "easeOut"
                  }, 
                 brightness: {
                    start: brightness, // 0 - 1
                    end: brightness2, // 0 - 1
                    curve: "linear",
                    direction: "linear"
                  }, 
            }
        )
      
        colors = generate(JSON);
        
        setColorPalette(colors[0].colors)
         
        background = colorPalette.length -1
        paper = colorPalette.length - 4
        primary = colorPalette.length /2


        setPalette(prevState => ({
           
             
            "name": prevState.name,
            "primary": {
                "main": prevState.primary.main,
            },
            "secondary": {
                "main": prevState.secondary.main
            },
            "background": {
                "default": `${colors[0].colors[background].hex}`,
                "paper": `${colors[0].colors[paper].hex}`
            },
            "text": {
                "primary": `${colors[0].colors[0].hex}`,
                "secondary": `${colors[0].colors[2].hex}`,
                "disabled": ""
            }
            
          
        }));

    }

    const generatePrimaryPalette = () => {

        setPrimaryPalette(
            {
                steps: 20,
                hue: {
                  start: primaryHueStart,
                  end: primaryHueEnd,
                  rotation: "cw",
                  curve: "easeInQuad", 
                  direction: "easeOut"
                },
                 saturation: {
                    start: primarySaturationStart,
                    end: primarySaturationEnd,
                    curve: "easeOutQuad",
                    rate: 1, 
                    direction: "easeOut"
                  }, 
                 brightness: {
                    start: primaryBrightnessStart,
                    end: primaryBrightnessEnd,
                    curve: "linear",
                    direction: "linear"
                  }, 
            }
            
        )

        
       
      
        primaryColors = generate(primaryPalette);


        setPrimaryColorPalette(primaryColors[0].colors)
        background = primaryColorPalette.length - 1;
        paper = primaryColorPalette.length - 4;
       
        setPalette(prevState => ({
           
             
              "name": prevState.name,
              "primary": {
                  "main": `${primaryColorPalette[9].hex}`
              },
              "secondary": {
                  "main": `${primaryColorPalette[1].hex}`
              },
              "background": {
                  "default": prevState.background.default,
                  "paper": prevState.background.paper
              },
              "text": {
                  "primary": prevState.text.primary,
                  "secondary": prevState.text.secondary,
                  "disabled": ""
              }
              
            
          }));
       
        console.log(palette.name)
        
    }



    /* BACKGROUND PALETTE */


    const handleInput = (e) => {    
            setInput(e.target.value)
            setInput2(Number(e.target.value) + 15)         
            generateBackgroundPalette()    
    }

    const handleSaturation = (e) => {      
       
            setSaturation(e.target.value)
            generateBackgroundPalette()
        
    }
    const handleSaturation2 = (e) => {
       
            setSaturation2(e.target.value)
            generateBackgroundPalette()
        
    }

    const handleBrightness = (e) => {
       
            setBrightness(e.target.value)
            generateBackgroundPalette()
        
        
    }
    const handleBrightness2 = (e) => {
       
            setBrightness2(e.target.value)
            generateBackgroundPalette()
        
        
    }



    /* PRIMARY PALETTE */


    const handlePrimaryHueStart = (e) => {    
            setPrimaryHueStart(e.target.value)
            setPrimaryHueEnd(e.target.value)         
            generatePrimaryPalette()    
    }

    const handlePrimarySaturationStart = (e) => {      
            setPrimarySaturationStart(e.target.value)
            generatePrimaryPalette()
    }

    const handlePrimarySaturationEnd = (e) => {
            setPrimarySaturationEnd(e.target.value)
            generatePrimaryPalette()
    }

    const handleBrightnessStart = (e) => {
            setPrimaryBrightnessStart(e.target.value)
            generatePrimaryPalette()
        
    }

    const handleBrightnessEnd = (e) => {
            setPrimaryBrightnessEnd(e.target.value)
            generatePrimaryPalette()
        
    }

    
    let BackgroundPalette = colorPalette.map((c, i)=> {
        return <Button fullWidth key={i} variant='contained' sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
    })

      let PrimaryPalette = primaryColorPalette.map((c, i)=> {
        return <Button fullWidth key={i} variant='contained' sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
    })  
   
  
    console.log(input)

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
                    <Button variant='contained' color='primary' onClick={generateBackgroundPalette} sx={{m:1}}>ColorBox</Button>
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
                            defaultValue={input}
                            min={200}
                            max={280}
                            step={10}
                            valueLabelDisplay="auto" 
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
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
                                defaultValue={saturation}
                                min={0}
                                max={1} 
                                step={0.01} 
                                valueLabelDisplay="auto" 
                                onChange={handleSaturation}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={saturation2}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleSaturation2}
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
                                defaultValue={brightness}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBrightness}
                                color="primary"
                            />
                            <Slider
                                label="Hi"
                                sx={{width: '200px'}}
                                getAriaLabel={() => 'Temperature range'}
                                defaultValue={brightness2}
                                min={0}
                                max={1}
                                step={0.01}
                                valueLabelDisplay="auto" 
                                onChange={handleBrightness2}
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
                                defaultValue={input}
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
                                defaultValue={saturation}
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
                                defaultValue={saturation2}
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
                                defaultValue={brightness}
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
                                defaultValue={brightness2}
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
                            
                </Drawer>

            
                


                <Grid sx={{display: 'flex', flexDirection: 'row'}}>
                    <Grid sx={{width: '400px'}}>
                        {BackgroundPalette} 
                    </Grid>
                    
                    <Grid sx={{ml:5, width: '400px'}}>
                        {PrimaryPalette}    
                    </Grid>
                </Grid>
           </Grid> 
           
        </>
       
       
    )
    
    
    
    
    

    
}

export default ColorGenerator