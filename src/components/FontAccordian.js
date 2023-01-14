
import { Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from '../components/CustomMuiComponents/Accordian';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";


const FontAccordian = ({fonts, setFont, customPalette, setPalette, palette}) => {
   
    let [primary, setPrimary] = useState(palette.text.primary)

    let [secondary, setSecondary] = useState(palette.text.secondary)

    useEffect(() => {
         console.log(fonts)
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
            <Button key={i} sx={{m:1, width:'50px', height:'50px', backgroundColor: color, border: 0, borderRadius: '24px'}} value={color}></Button>
        ) 
        
    })

    let FontList =  fonts.map((font, i) => {
         return (
            <MenuItem onClick={() => {setFont(font)}} key={i} sx={{m:1, border: 0, borderRadius: '24px'}} value={font}>{font}</MenuItem>
        ) 
        
    })

    

    return (
        <>
            <Grid sx={{m:2}}>
            <Accordion sx={{ m:2, backgroundColor: 'background.default', border: '1px solid', borderColor: 'background.paper', borderRadius: '12px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Text</Typography>
            </AccordionSummary>

            <AccordionDetails>

            <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    
                    
                    
                </Grid>

                <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex', width:' 100%'}}>Secondary Color</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            label="Age"
                            name=''
                            onChange={handleSecondaryColor}
                            sx={{backgroundColor: secondary, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'}}
                        >
                            {ColorList}
                        </Select>
                    </Grid>
                </Grid>

                <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex', width:' 100%'}}>Fonts</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            name=''
                            onChange={handleSecondaryColor}
                            MenuProps={{ 
                                PaperProps: {
                                    sx: {
                                        border: '0px solid',
                                        borderRadius: '12px',
                                    }
                                },
                                sx: {
                                 //   width: '400px'
                                }
                            }}
                            sx={{backgroundColor: secondary, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'}}
                        >
                           
                                {FontList}
                            
                        </Select>
                    </Grid>
                </Grid>
                
         

            </AccordionDetails>
        </Accordion>
            </Grid>
        </>
    )

}

export default FontAccordian;