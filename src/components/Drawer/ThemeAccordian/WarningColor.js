import {  Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";

import Accordion from "../../CustomMuiComponents/Accordian";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const WarningColor = ({ColorList, setWarning, warning}) => {


    const handleWarningLightColor = (e) => {
        setWarning(prevState => ({
            ...prevState,
            light: e.target.value,
        }));
    }

    const handleWarningMainColor = (e) => {
        setWarning(prevState => ({
            ...prevState,
            main: e.target.value,
        }));
    }

    const handleWarningDarkColor = (e) => {
        setWarning(prevState => ({
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
                        <Typography sx={{ flexGrow: 1}}>Warning</Typography>
                        <Box sx={{ mr:1, backgroundColor: 'warning.light', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
                        <Box sx={{ mr:1, backgroundColor: 'warning.main', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
                        <Box sx={{ backgroundColor: 'warning.dark', width: '16px', height: '16px', borderRadius: '24px'}}></Box>
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
                                    onChange={handleWarningLightColor}
                                    sx={{backgroundColor: 'warning.light'}}
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
                                        onChange={handleWarningMainColor}
                                        sx={{ backgroundColor: 'warning.main' }}
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
                                    onChange={handleWarningDarkColor}
                                    sx={{backgroundColor: 'warning.dark'}}
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

export default WarningColor