import {  Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from '../CustomMuiComponents/Accordian';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SecondaryColor = ({ColorList, primary, handlePrimaryColor, secondary}) => {





    return (
        <Grid sx={{m:2}}>
                <Accordion sx={{ m:2, backgroundColor: 'background.default', border: '1px solid', borderColor: 'background.paper', borderRadius: '12px' ,  '& .MuiAccordion-root, .Mui-expanded': { border: '0px solid', borderColor: 'background.paper', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', }, }}>
                    <AccordionSummary
                        sx={{backgroundColor: 'background.paper', border: '0px solid', borderColor: 'background.paper', borderRadius: '12px',  '& .MuiAccordionSummary-root, .Mui-expanded': { border: '0px solid', borderColor: 'background.paper', borderRadius: '100px',},  }} 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>Secondary Color</Typography>
                    </AccordionSummary>


                    <AccordionDetails>
                        <Grid sx={{display: 'flex' , alignItems: 'center', mb:3, mt:3 }}>
                            <Grid container justifyContent="flex-start">
                                <InputLabel sx={{display: 'flex'}}>Light</InputLabel>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Select
                                    value=''
                                    name=''
                                    //onChange={handlePrimaryColor}
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

                
                    <Grid sx={{borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'background.paper', mb:3, mt:3 }}>
                    <Grid sx={{display: 'flex' , alignItems: 'center', mb:1.5, mt:1.5 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex'}}>Main</InputLabel>
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
                    </Grid>

                    <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                    <Grid container justifyContent="flex-start">
                        <InputLabel sx={{display: 'flex'}}>Dark</InputLabel>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Select
                            value=''
                            name=''
                            //onChange={handleSecondaryColor}
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
                
                        </AccordionDetails>
                        <AccordionSummary
                            sx={{backgroundColor: 'background.paper',  borderBottomLeftRadius: '12px', border: '0px solid', borderColor: 'background.paper', borderBottomRightRadius: '12px'}}
                              
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                       
                    </AccordionSummary>
                </Accordion>    
                </Grid>
    )

}

export default SecondaryColor