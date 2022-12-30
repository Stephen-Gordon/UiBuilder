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



const ColorGenerator = ({ palette, setPrimaryJSON, backgroundColorPalette, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, setPalette, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {
  
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
        
        setBackgroundJSON(
            {
                steps: 20,
                hue: {
                  start: input,
                  end: input2,
                  rotation: "cw",
                  curve: "easeInQuad", 
                  direction: "easeOut"
                },
                 saturation: {
                    start: saturation, 
                    end: saturation2, 
                    curve: "easeOutQuad",
                    rate: 1, 
                    direction: "easeOut"
                  }, 
                 brightness: {
                    start: brightness, 
                    end: brightness2, 
                    curve: "linear",
                    direction: "linear"
                  }, 
            }
        )
      
        colors = generate(backgroundJSON);
        
        setBackgroundColorPalette(colors[0].colors)
         
        background = backgroundColorPalette.length -1
        paper = backgroundColorPalette.length - 4
        primary = backgroundColorPalette.length /2


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
        console.log(palette)
    }

    const generatePrimaryPalette = () => {

        setPrimaryJSON(
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
            
        ,  console.log("Primary Palette",primaryJSON.hue)) 
       

        
       
     
         primaryColors = generate(primaryJSON);

        console.log(primaryColors[0].color)  

        

        
 
        setPrimaryColorPalette(primaryColors[0].colors)
        background = primaryColorPalette.length - 1;
        paper = primaryColorPalette.length - 4;  
        
    }

    useEffect(() => {

        primaryColors = generate(primaryJSON)

        console.log(primaryColors)  
        
        setPalette(prevState => ({
        
            
            "name": prevState.name,
            "primary": {
                "main": primaryColors[0].colors[12].hex
            },
            "secondary": {
                "main": primaryColors[0].colors[2].hex
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
            
            
        }), console.log("palette set" ,palette));
        setPrimaryColorPalette(primaryColors[0].colors)

      }, [primaryHueStart, primaryJSON, primaryColors ]);

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
       setPrimaryJSON(prevState => (
        {
            steps: 20,
            hue: {
              start: e.target.value,
              end: e.target.value,
              rotation: "cw",
              curve: "easeInQuad", 
              direction: "easeOut"
            },
             saturation: {
                start: prevState.saturation.start,
                end: prevState.saturation.end,
                curve: "easeOutQuad",
                rate: 1, 
                direction: "easeOut"
              }, 
             brightness: {
                start: prevState.brightness.start,
                end:   prevState.brightness.end,
                curve: "linear",
                direction: "linear"
              }, 
        }
        ))
    
        paper = primaryColorPalette.length - 4;
        
       
        background = primaryColorPalette.length - 1;
        paper = primaryColorPalette.length - 4;
        
        let primary =  primaryColorPalette.length /2;
        
        
        setPalette(prevState => ({
        
            
            "name": prevState.name,
            "primary": {
                "main": `${primaryColorPalette[primary].hex}`
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
            
            
        }), console.log("palette set" ,palette));
        
    
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


    


    
    let BackgroundPalette = backgroundColorPalette.map((c, i)=> {
        return <Button fullWidth key={i} variant='contained' sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
    })

    let PrimaryPalette = primaryColorPalette.map((c, i)=> {
        return <Button fullWidth key={i} variant='contained' sx={{ borderRadius: '0px', backgroundColor: c.hex}}>{c.hex}</Button>
    })  
   
  
    

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
                                onChange={(e) => {
                                    handlePrimaryHueStart(e)
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