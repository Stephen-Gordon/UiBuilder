import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

import { Button, Grid, Typography } from "@mui/material";

import { AnimatePresence, motion } from "framer-motion";


const Customize = ({BackgroundPalette, PrimaryPalette, customizeIsVisible}) => {


 

    return (
        <>
         <AnimatePresence>
                                
            {customizeIsVisible && (
                <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0}}
                transition={{ type: 'spring',  }}
                >    
            

                    

                    {/* BackgroundPalette */}
                    <Grid style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center'}} >
                        <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
                            <Grid container xl={6} lg={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center' , height: 'fit-content'}}>
                                <Grid sx={{ width: '100%', maxWidth: '400px',  my:3, p:1, border: '1px solid', borderColor: 'border', borderRadius: '24px', backgroundColor: 'background.default', cursor: '-moz-grab', cursor: 'grab'}}>

                                    <DragIndicatorIcon sx={{ml:1, display: 'flex', flexDirection: 'row'}} />

                                    <Grid container justifyContent="space-around ">
                                        {BackgroundPalette} 
                                    </Grid>

                                </Grid>

                            </Grid>

                            {/* PrimaryPalette */}
                            <Grid container xl={6} lg={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
                                
                                <Grid sx={{ width: '100%', maxWidth: '400px', my:3, p:1, border: '1px solid', borderColor: 'border', borderRadius: '24px', backgroundColor: 'background.default', cursor: '-moz-grab', cursor: 'grab'}}>

                                    <DragIndicatorIcon sx={{ml:1, display: 'flex', flexDirection: 'row'}} />

                                    <Grid container justifyContent="space-around ">
                                        {PrimaryPalette} 
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                            
                    <Grid
                        style={{ minHeight: '100vh'}} 
                        container
                        column={12} 
                        justifyContent={"center"}
                        spacing={0}
                        sx={{ display: 'flex', justifyContent: 'center', sm: {p:1, }, md: {p:5}, borderRadius: '24px', backgroundColor: 'background.default', border: '1px solid', borderColor: 'border', }}>
                            
                            <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Primary</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                    <Button  variant='contained' sx={{m:1, backgroundColor:'primary.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                    <Button  variant='contained' sx={{m:1, backgroundColor:'primary.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                    <Button  variant='contained' sx={{m:1, backgroundColor:'primary.dark', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>
                            <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Secondary</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'secondary.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>

                            <Grid  item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Error</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'error.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'error.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'error.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>

                            <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Warning</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'warning.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>

                            <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Info</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'info.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'info.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'info.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>
                  
                            <Grid item xl={6} lg={6} md={12} sm={6} xs={12} sx={{p: {xs: 1, md:5} }} >
                                <Typography  align='center' sx={{mt:1, mb:1}}>Info</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'success.light', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'success.main', maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                <Button  variant='contained'  sx={{m:1, backgroundColor:'success.dark',  maxWidth: '100px', maxHeight: '100px', minHeight: '40px' }}></Button>
                                </Grid>
                            </Grid>
                       

                        </Grid>
                      
                    </motion.div>
                )}
                            
            </AnimatePresence>
        </>

    )

}
export default Customize