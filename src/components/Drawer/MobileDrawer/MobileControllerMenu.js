import ThemeAccordian from "../ThemeAccordian"
import MobileBackground from "./MobileBackgroundController";
import MobilePrimaryController from "./MobilePrimaryController";

import { useState } from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { Grid, Typography, duration } from "@mui/material";

import styled from "@emotion/styled";
import TypographyController from "../Typography/TypographyController";
import PrimaryController from "../PrimaryController";
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



const MobileControllerMenu = ({addToPalette, BackgroundPalette, PrimaryPalette, setMobileOpen, theme, customPalette, setPalette, fonts, setFont={setFont}, palette, setPrimaryJSON, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {

        const StyledButton = styled(Button)({
            '&.MuiButtonBase-root-MuiTab-root,': {
                '&:hover, &.Mui-hovered': {
                    backgroundColor: theme.palette.background.paper,
                },
                '&.Mui-selected': {
                    backgroundColor: theme.palette.background.paper,
                    width: '100%',
                    color: theme.palette.text.primary,
                },
                transition: 'ease-in-out 0.2s',
                width: '100%',
                alignItems: 'start',
                textTransform: 'none',
                color: theme.palette.text.primary,
                fontSize: '20px',
                fontWeight: '400',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '24px',
                paddingRight: '24px',
                borderRadius: '12px',
                
                backgroundColor: theme.palette.background.default,
                '&:hover, &.Mui-hovered': {
                    transition: 'ease-in-out 0.2s',
                    backgroundColor: theme.palette.background.paper,
                    '@media (hover: none)': {
                    backgroundColor: 'transparent'
                    },
                },
            }
        });
    


        const [isVisible, setIsVisible] = useState(true);

        const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
        const [isPrimaryVisible, setIsPrimaryVisible] = useState(false);

        const [renderController, setRenderController] = useState(true);


        
        return (

            <>
     

            
            
            <Grid sx={{width: '100%',  display: 'flex',}} >

            
                <Grid sx={{ position: 'absolute', p:3, width: '100%', }}>


                <AnimatePresence>
                {renderController && (
                        
                    <motion.div
                        key="Codn"
                        /* initial={{ scale: 0.5,  }}
                        animate={{ scale: 1}}
                        exit={{ scale: 0.5 }} */
                        initial={{ x: -50, opacity: 0.3 }}
                        animate={{ x: 0, opacity: 1}}
                        exit={{ x: -50, opacity: 0.3 }}
                        transition={{duration: 1, type: 'spring',  }}
                       
                    >
                        <IconButton
                            disableRipple
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => {
                                setMobileOpen(false)
                            }}
                            
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{mt:3, mb:1}} variant="h4">
                            Controller
                        </Typography>


                        {/* Background */}
                        <StyledButton 
                            sx={{width: '100%'}}
                            onClick={() => {
                                setIsVisible(false)
                                setIsBackgroundVisible(true) 
                                setRenderController(false)
                                
                            }}
                            >
                                Background
                        </StyledButton>


                        {/* Primary */}
                        <StyledButton 
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsVisible(false)
                                setIsPrimaryVisible(true) 
                                setRenderController(false)
                                
                            }}
                            >
                                Primary
                        </StyledButton>

                    </motion.div>
                   )}
                   </AnimatePresence>
                </Grid>
              
                <MobileBackground BackgroundPalette={BackgroundPalette} addToPalette={addToPalette} renderController={renderController} setRenderController={setRenderController} setIsVisible={setIsVisible} isBackgroundVisible={isBackgroundVisible} setIsBackgroundVisible={setIsBackgroundVisible} setBackgroundColorPalette={setBackgroundColorPalette} primaryJSON={primaryJSON} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} customPalette={customPalette} setPalette={setPalette} palette={palette}/>       
                <MobilePrimaryController addToPalette={addToPalette} PrimaryPalette={PrimaryPalette} setRenderController={setRenderController} isPrimaryVisible={isPrimaryVisible} setIsPrimaryVisible={setIsPrimaryVisible} primaryColorPalette={primaryColorPalette} setPrimaryJSON={setPrimaryJSON} primaryJSON={primaryJSON} setPrimaryColorPalette={setPrimaryColorPalette} customPalette={customPalette} setPalette={setPalette} palette={palette}/>

            </Grid>
           
    
            </>
           
        )

}

export default MobileControllerMenu
