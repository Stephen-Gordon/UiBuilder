import {  Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";

import Accordion from "../../CustomMuiComponents/Accordian";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SecondaryColor = ({ColorList, setSecondary, secondary}) => {


    console.log(secondary)

  

    const handleSecondaryLightColor = (e) => {
        setSecondary(prevState => ({
            ...prevState,
            light: e.target.value,
        }));
    }

    const handleSecondaryMainColor = (e) => {
        setSecondary(prevState => ({
            ...prevState,
            main: e.target.value,
        }));
    }

    const handleSecondaryDarkColor = (e) => {
        setSecondary(prevState => ({
            ...prevState,
            dark: e.target.value,
        }));
    }


    return (
        <Grid sx={{mb:2,}}>
            <Accordion sx={{  
                backgroundColor: 'background.default', 
                border: '1px solid', borderColor: 'border', borderRadius: '12px' ,  
                '& .MuiAccordion-root, .Mui-expanded': { 
                    border: '0px solid', 
                    borderColor: 'border', 
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px'
                    }, }}>
                    <AccordionSummary
                        sx={{
                        backgroundColor: 'background.paper', border: '0px solid', 
                        borderColor: 'border', borderRadius: '12px',  
                        '& .MuiAccordionSummary-content': {
                            display: 'flex', flexDirection: 'row', alignItems: 'center',
                        },
                        '& .MuiAccordionSummary-root, .Mui-expanded': { 
                            border: '0px solid', 
                            borderColor: 'border', 
                            borderRadius: '100px',
                        }}}  
                        >
                        <Typography sx={{ flexGrow: 1}}>Secondary</Typography>
                        <Box sx={{ mr:1, backgroundColor: 'secondary.light', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
                        <Box sx={{ mr:1, backgroundColor: 'secondary.main', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
                        <Box sx={{ backgroundColor: 'secondary.dark', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
                    </AccordionSummary>



                    <AccordionDetails>


                        {/*     LIGHT   */}

                        <Grid sx={{display: 'flex' , alignItems: 'center', mb:3, mt:3 }}>
                            
                            <Grid container justifyContent="flex-start">
                                <InputLabel sx={{display: 'flex'}}>Light</InputLabel>
                            </Grid>

                            <Grid container justifyContent="flex-end">

                                <Select
                                    value=''
                                    name=''
                                    onChange={handleSecondaryLightColor}
                                    sx={{backgroundColor: 'secondary.light'}}
                                >
                                    {ColorList}
                                </Select>

                            </Grid>

                        </Grid>


                        
                        {/*     MAIN     */}

                
                        <Grid sx={{borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'border', mb:3, mt:3 }}>

                            <Grid sx={{display: 'flex' , alignItems: 'center', mb:3, mt:3 }}>

                                <Grid container justifyContent="flex-start">
                                    <InputLabel sx={{display: 'flex'}}>Main</InputLabel>
                                </Grid>

                                <Grid container justifyContent="flex-end">
                                    <Select
                                        value=''
                                        name=''
                                        onChange={handleSecondaryMainColor}
                                        sx={{ backgroundColor: 'secondary.main' }}
                                    >              
                                        {ColorList}
                                    </Select>
                                </Grid>

                            </Grid>

                        </Grid>



                        {/*     DARK     */}


                        <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                            <Grid container justifyContent="flex-start">
                                <InputLabel sx={{display: 'flex'}}>Dark</InputLabel>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                            
                                <Select
                                    value=''
                                    name=''
                                    onChange={handleSecondaryDarkColor}
                                    sx={{backgroundColor: 'secondary.dark'}}
                                >   
                                    {ColorList}     
                                </Select>
                            
                            </Grid>
                        </Grid>
                
                    </AccordionDetails>
            </Accordion>    
        </Grid>
    )

}

export default SecondaryColor