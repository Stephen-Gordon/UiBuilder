//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';

const ColorGenerator = ({ palette, setPalette }) => {
  
    let colors 
    const [colorPalette, setColorPalette] = useState([])
    const [input, setInput] = useState(220)
    const [input2, setInput2] = useState(Number(input +15))
    
    const [saturation, setSaturation] = useState(0.14)
    const [saturation2, setSaturation2] = useState(saturation)

    const [brightness, setBrightness] = useState(0.85)
    const [brightness2, setBrightness2] = useState(0.08)

    const [JSON, setJSON] = useState('')
   
    const generatePalette = () => {
        
      
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
        setBackgroundColorPalette(colors[0].colors)
        
        let background = colorPalette.length -1
        let paper = colorPalette.length - 4
        let primary = colorPalette.length /2
        setPalette(
            
            {
                "name": "ColorBox",
                "primary": {
                    "main": `${colors[0].colors[primary].hex}`
                },
                "secondary": {
                    "main": `${colors[0].colors[2].hex}`
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
            }
        )   
        console.log(colorPalette)

        
        
    }

    const handleInput = (e) => {
       
        setTimeout(() => {
            setInput(e.target.value)
            setInput2(Number(e.target.value) + 15)
            
            generatePalette()
        }, "1000")
        
    }

    const handleSaturation = (e) => {
       
        setTimeout(() => {
            setSaturation(e.target.value)
            //setSaturation2(Number(e.target.value) + 15)
            
            generatePalette()
        }, "1000")
        
    }
    const handleSaturation2 = (e) => {
       
        setTimeout(() => {
         
            setSaturation2(saturation)
            
            generatePalette()
        }, "1000")
        
    }

    const handleBrightness = (e) => {
       
        setTimeout(() => {
            setBrightness(e.target.value)
            //setBrightness2(Number(e.target.value) + 15)
            
            generatePalette()
        }, "1000")
        
    }
    const handleBrightness2 = (e) => {
       
        setTimeout(() => {
         
            setBrightness2(e.target.value)
            
            generatePalette()
        }, "1000")
        
    }
   

    
    let HTML = colorPalette.map((c, i)=> {
        return <Button fullWidth variant='contained' sx={{backgroundColor: c.hex}}>{c.hex}</Button>
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
            
                <Button variant='contained' onClick={generatePalette}>ColorBox</Button>
               {/*  <TextField onChange={handleInput} target="_blank" sx={{mb:5}} variant="outlined" /> */}
                
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
                        step={1}
                        valueLabelDisplay="auto" 
                        onChange={handleInput}
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
                    />
                </Grid>


                <Grid sx={{width: '30%'}}>
                    {HTML} 
                </Grid>
                

           </Grid> 
           
        </>
       
       
    )
    
    
    
    
    

    
}

export default ColorGenerator