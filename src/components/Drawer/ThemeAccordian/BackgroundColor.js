import {  Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";

import Accordion from "../../CustomMuiComponents/Accordian";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from "@mui/material";



const BackgroundColor = ({ColorList, handleBackgroundColor, handlePaperColor, background, paper}) => {





    return (
        <Grid sx={{mb:2,}}>
            <Accordion sx={{ backgroundColor: 'background.default', border: '1px solid', borderColor: 'border', borderRadius: '12px' ,  '& .MuiAccordion-root, .Mui-expanded': { border: '0px solid', borderColor: 'border', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', }, }}>
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
                        <Typography sx={{ flexGrow: 1}}>Background</Typography>
                        <Box sx={{ mr:1, backgroundColor: 'background.paper', width: '16px', height: '16px', borderRadius: '16px', border: '1px solid', borderColor: 'border'}}></Box>
                        <Box sx={{ mr:1, backgroundColor: 'background.default', width: '16px', height: '16px', borderRadius: '16px'}}></Box>
                        
                    </AccordionSummary>



                    <AccordionDetails>
                        <Grid sx={{display: 'flex' , alignItems: 'center', mb:3, mt:3 }}>
                            <Grid container justifyContent="flex-start">
                                <InputLabel sx={{display: 'flex'}}>Background</InputLabel>
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
                                                borderRadius: '12px',
                                            }
                                        },
                                        sx: {
                                            width: '400px'
                                        }
                                    }}
                                    sx={{backgroundColor: background, width:'50px', height:'50px', border:'0px solid', borderRadius: '12px'
                                    
                                }}
                                >
                                
                                        {ColorList}
                                
                                </Select>
                            </Grid>
                        </Grid>

                
                    <Grid sx={{borderTop: '1px solid', borderColor: 'border', mb:3, mt:3 }}>

                    <Grid sx={{display: 'flex' , alignItems: 'center', mb:3, mt:3 }}>
                            <Grid container justifyContent="flex-start">
                                <InputLabel sx={{display: 'flex'}}>Paper</InputLabel>
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
                                            borderRadius: '12px',
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
                    </Grid>

                
                        </AccordionDetails>
                        
                    
                </Accordion>    
            </Grid>
    )

}

export default BackgroundColor