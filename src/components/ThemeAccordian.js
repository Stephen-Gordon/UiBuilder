
import {  Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from '../components/CustomMuiComponents/Accordian';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StyledMenu from '../components/CustomMuiComponents/StyledMenu'

import { useEffect, useState } from "react";


const ThemeAccordian = ({customPalette, setPalette, palette}) => {
   
    let [primary, setPrimary] = useState(palette.primary.main)

    let [secondary, setSecondary] = useState(palette.secondary.main)

    let [background, setBackground] = useState(palette.background.default)

    let [paper, setPaper] = useState(palette.background.paper)

    

    useEffect(() => {
   
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
        
        console.log(e.target.value)
        //console.log(e.target)
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
            <Button key={i} sx={{m:1, width:'50px', height:'50px', backgroundColor: color, border: 0, borderRadius: '24px'}} value={color}></Button>
        ) 
        
    })


    return (
        <>
        <Accordion sx={{ m:2, backgroundColor: 'background.default', border: '1px solid', borderColor: 'background.paper', borderRadius: '12px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Theme</Typography>
            </AccordionSummary>

            <AccordionDetails>
                
            <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex'}}>Primary Color</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            name=''
                            onChange={handlePrimaryColor}
                            MenuProps={{ 
                                PaperProps: {
                                    sx: {
                                        border: '0px solid',
                                        borderRadius: '12px',
                                    }
                                },
                                sx: {
                                    width: '400px'
                                }
                            }}
                            sx={{backgroundColor: primary, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'}}
                        >
                           
                                {ColorList}
                          
                        </Select>
                    </Grid>
                </Grid>


                <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex'}}>Secondary Color</InputLabel>
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
                                        borderRadius: '24px',
                                    }
                                },
                                sx: {
                                    width: '400px'
                                }
                            }}
                            sx={{backgroundColor: secondary, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'}}
                        >
                         
                                {ColorList}
                       
                        </Select>
                    </Grid>
                </Grid>


                <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex', width:' 100%'}}>Background Color</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            name=''
                            onChange={handleBackgroundColor}
                            MenuProps={{ 
                                PaperProps: {
                                    sx: {
                                        border: '0px solid',
                                        borderRadius: '24px',
                                    }
                                },
                                sx: {
                                    width: '400px'
                                }
                            }}
                            sx={{backgroundColor: background, width:'50px', height:'50px', border:'1px solid', borderColor: 'background.paper', borderRadius: '12px'}}
                        >
                           
                                {ColorList}
                          
                        </Select>
                    </Grid>
                </Grid>


                <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex', width:' 100%'}}>Paper Color</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            name=''
                            onChange={handlePaperColor}
                            MenuProps={{ 
                                PaperProps: {
                                    sx: {
                                        border: '0px solid',
                                        borderRadius: '24px',
                                    }
                                },
                                sx: {
                                    width: '400px'
                                }
                            }}
                            sx={{backgroundColor: paper, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'}}
                        >
                           
                                {ColorList}
                            
                        </Select>
                    </Grid>
                </Grid>

            </AccordionDetails>
        </Accordion>
        </>
    )

}

export default ThemeAccordian;