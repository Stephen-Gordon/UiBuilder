
import {  Grid, InputLabel, MenuItem , Select, Typography, FormControl , NativeSelect    } from "@mui/material";
import { useEffect, useState } from "react";

import { alpha, styled } from '@mui/material/styles';

import ColorList from "../../ColorList";
import { AnimatePresence, motion } from "framer-motion";


const MobileTypographyController = ({isTypographyVisible, theme, fonts, setFont, customPalette, setPalette, palette}) => {
   
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


   

    let FontList =  fonts.map((font, i) => {
         return (
            <MenuItem
                onClick={() => {setFont(font)}} 
                key={i} 
                sx={{m:1, border: 0, borderRadius: '24px', width: '100%',
                '&:hover, &.Mui-hovered': {
                    backgroundColor: alpha(theme.palette.background.default, 0.3)
                },
                }} 
                value={font}
            >
                {font}
            </MenuItem>
        ) 
        
    })

        console.log(theme)

    return (
        <>
          <AnimatePresence>
            {isTypographyVisible && (
                    
            <motion.div 
                sx={{width: '100%'}}
                style={{width: '100%'}}
                initial={{ x: "100%" ,  scale: 0.8}}
                animate={{
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
                }}
                exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0.2, ease: [0.1, 0.8, 0.9, 0.2], opacity: 0.2 },
                }}
            >
                
            <Grid sx={{p:3, width: '100%', position: 'relative',  backdropFilter: "blur(100px)", }} >




                <Typography sx={{ml:2, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                    Text Color
                </Typography>

                <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px'}}>
            
                    <Grid sx={{display: 'flex' , alignItems: 'center', mb:3 }}>
                        <Grid container justifyContent="flex-start">
                            <InputLabel sx={{display: 'flex', width:' 100%'}}>Primary Color</InputLabel>
                        </Grid>

                        <Grid container justifyContent="flex-end">
                            <Select
                                value=''
                                label=""
                                name=''
                                sx={{backgroundColor: primary}}
                            >
                                <Grid container justifyContent='center'>
                                    <ColorList customPalette={customPalette} setter={setPrimary}/>
                                </Grid>
                            
                            </Select>
                        </Grid>
                    </Grid>

                    <Grid sx={{borderTop: '1px solid', borderColor: 'border',  mt:3 }}>
                        <Grid sx={{display: 'flex' , alignItems: 'center', mt:3 }}>
                            <Grid container justifyContent="center">
                                <InputLabel sx={{display: 'flex', width:' 100%'}}>Secondary Color</InputLabel>
                            </Grid>

                            <Grid container justifyContent="flex-end">
                                <Select
                                    value=''
                                    label=""
                                    name=''
                                    sx={{backgroundColor: secondary}}
                                >
                                        <ColorList customPalette={customPalette} setter={setSecondary} />
                                </Select>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>

                <Typography sx={{ml:2, mt:3, mb:0.5}}  variant={"subtitle1"}  color="text.secondary">
                    Font
                </Typography>

                <Grid sx={{ p:3, backgroundColor: 'background.paper', border: '1px solid', border: '0px solid', borderColor: 'border', borderRadius: '12px'}}>

                    <Grid sx={{display: 'flex' , alignItems: 'center', }}>
                        <Grid container justifyContent="flex-start">
                            <InputLabel sx={{display: 'flex', width:' 100%', color: 'text.primary'}}>Font Family</InputLabel>
                        </Grid>
                        
                        <Grid container justifyContent="flex-end">
                        <FormControl fullWidth  size="small">
                        <InputLabel 
                        sx={{width: 'auto', }}
                            disableAnimation={true}
                            color="text"
                            shrink={false}
                        >
                            {theme.typography.fontFamily}
                        </InputLabel>
                            <Select
                                value=''
                                name=''
                                label={theme.typography.fontFamily}
                                style={{width: 'auto'}}
                                MenuProps={{ 
                                    sx: {
                                        border: '0px solid #f7f7f7',
                                        borderRadius: '12px',
                                        width: 'auto'
                                    },
                                    PaperProps: {
                                        sx: {
                                            width: 'auto',
                                            border: '1px solid',
                                            borderRadius: '12px',
                                            borderColor: 'border'
                                        }
                                    },
                                    
                                }}
                                sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: 'auto',
                                backgroundColor: 'inherit',
                                border: '1px solid',
                                borderRadius: '12px',
                                borderColor: 'border'}}
                            >
                            
                                    {FontList}
                                
                            </Select>
                        </FormControl>
                      
                        </Grid>
                        
                        
                    </Grid>
                    
            

            
                    </Grid>











            </Grid>
           
         
        </motion.div>

        )}</AnimatePresence>
        </>
    )

}

export default MobileTypographyController;