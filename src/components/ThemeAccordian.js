
import { Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";


const ThemeAccordian = ({customPalette, setPalette, palette}) => {
   
    let [primary, setPrimary] = useState(palette.primary.main)

    let [secondary, setSecondary] = useState(palette.secondary.main)

    let [background, setBackground] = useState(palette.background.default)

    let [paper, setPaper] = useState(palette.background.paper)

    

    useEffect(() => {
        console.log("colorpal", customPalette)
     setPalette(prevState => ({
        ...prevState,
        "primary": {
            "main": primary
        },
        "secondary": {
            "main": secondary
        },
        "background": {
            "default": background,
            "paper": paper
        },
        
    }));

    console.log(primary, background)

    }, [primary, secondary, background, paper]);

    const handlePrimaryColor = (e) => {
        setPrimary(e.target.value)
    }

    const handleSecondaryColor = (e) => {
        setSecondary(e.target.value)
    }

    const handleBackgroundColor = (e) => {
        setBackground(e.target.value)
    }

    const handlePaperColor = (e) => {
        setPaper(e.target.value)
    }

    

    let ColorList =  customPalette.map((color, i) => {
         return (
            <MenuItem key={i} sx={{backgroundColor: color}} value={color}>{color}</MenuItem>
        ) 
        
    })

    

    return (
        <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Theme</Typography>
            </AccordionSummary>

            <AccordionDetails>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Primary Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=''
                        label="Age"
                        name=''
                        onChange={handlePrimaryColor}
                        sx={{backgroundColor: primary, mb:3}}
                    >
                    {ColorList}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Secondary Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=''
                        label="Age"
                        name=''
                        onChange={handleSecondaryColor}
                        sx={{backgroundColor: secondary, mb:3}}
                    >
                    {ColorList}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Background Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=''
                        label="Age"
                        name=''
                        onChange={handleBackgroundColor}
                        sx={{backgroundColor: background, mb:3}}
                    >
                    {ColorList}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Paper Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=''
                        label="Age"
                        name=''
                        onChange={handlePaperColor}
                        sx={{backgroundColor: paper, mb:3}}
                    >
                    {ColorList}
                    </Select>
                </FormControl>

            </AccordionDetails>
        </Accordion>
        </>
    )

}

export default ThemeAccordian;