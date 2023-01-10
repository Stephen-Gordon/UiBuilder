
import { Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";


const FontAccordian = ({customPalette, setPalette, palette}) => {
   
    let [primary, setPrimary] = useState(palette.text.primary)

    let [secondary, setSecondary] = useState(palette.text.secondary)

    useEffect(() => {
     setPalette(prevState => ({
        ...prevState,
        text: {
            primary: primary,
            secondary: secondary
        }
        
    }));

    }, [primary, secondary]);

    const handlePrimaryColor = (e) => {
        setPrimary(e.target.value)
    }

    const handleSecondaryColor = (e) => {
        setSecondary(e.target.value)
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
                <Typography>Text</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <InputLabel id="demo-simple-select-label">Primary Text Color</InputLabel>
                <FormControl fullWidth>
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
                    <InputLabel id="demo-simple-select-label">Secondary Text Color</InputLabel>
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

            </AccordionDetails>
        </Accordion>
        </>
    )

}

export default FontAccordian;