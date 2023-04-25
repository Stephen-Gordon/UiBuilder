import ThemeAccordian from "../ThemeAccordian"
import MobileBackground from "./MobileBackgroundController";
import MobilePrimaryController from "./MobilePrimaryController";

import { useState } from "react";



import { AppBar, Grid, Typography } from "@mui/material";

import styled from "@emotion/styled";

import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { alpha } from "@mui/material";
import { useScroll } from "framer-motion"


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
        const [size, setSize] = useState('h4');
        const [title, setTitle] = useState('Controller');
        const [color, setColor] = useState('text.primary');

        const handleText = (size, title, color) => {
            setSize(size)
            setTitle(title)
            setColor(color)
        }

        let marginLeft = 0;
        if(renderController){
            marginLeft = 3
        }
        
        let pointerBool = 'pointer';
        if(renderController){
            pointerBool = 'cursor'
        }
     
       
        return (

            <>

            <AppBar 
                position="sticky" 
                elevation={0}
                sx={{zIndex: '1000', backgroundColor: alpha(theme.palette.background.default, 0), backdropFilter: "blur(64px)", }} >
                <Grid sx={{position: 'absolute', width: '100%'}}>
                
                {
                    isBackgroundVisible && (
                    <motion.div
                    initial={{  x: 900 }}
                    style={{width: '100%', zIndex: '1501', position: ''}}
                    animate={{ x:0}}
                    exit={{ x: 900 }}
                    transition={{duration:0.6}}
                    >
                    <Typography align="center" sx={{zIndex: '1501', mt:3, mb:3, fontWeight: ''}}  color={"text.primary"} variant={"subtitle1"} >
                        {title}
                    </Typography> 
                    </motion.div>
                    )
                    
                }
                {
                    isPrimaryVisible && (
                    <motion.div
                    initial={{  x: 900 }}
                    style={{width: '100%', zIndex: '1501', position: ''}}
                    animate={{ x:0}}
                    exit={{ x: 900 }}
                    transition={{duration:0.6}}
                    >
                    <Typography align="center" sx={{zIndex: '1501', mt:3, mb:3, fontWeight: ''}}  color={"text.primary"} variant={"subtitle1"} >
                        {title}
                    </Typography> 
                    </motion.div>
                    )
                    
                }
                
                </Grid>

                <Grid sx={{backgroundColor: 'inherit', position: 'sticky'}}>

                    <motion.div  transition={{duration:0.6}} layoutId="text" style={{zIndex: '1500'}}>
                    

                        <Grid sx={{display: 'flex', alignItems: 'center'}} >

                            {/* Background */}
                            <Grid sx={{display: 'flex', alignItems: 'center', cursor: pointerBool,}}
                                onClick={() => {
                                    if(isBackgroundVisible){
                                    setRenderController(true) 
                                    setIsBackgroundVisible(false)
                                    setIsPrimaryVisible(false)
                                    handleText('h4', 'Controller', 'text.main')
                                    } 
                                    else if (isPrimaryVisible) {
                                        setRenderController(true) 
                                        setIsBackgroundVisible(false)
                                        setIsPrimaryVisible(false)
                                        handleText('h4', 'Controller', 'text.main')
                                    }
                                }}
                            >
                                { 
                                    isBackgroundVisible && (
                                        <>
                                            <Grid sx={{display: 'flex',  alignItems: 'center'}}>
                                                <ArrowBackIosIcon sx={{mt:3, mb:3, ml: 3}} fontSize="xs" color="primary"/> 
                                            </Grid>
                                        </>
                                    )
                                    
                                }
                                { 
                                    isPrimaryVisible && (
                                        <>
                                            <Grid sx={{display: 'flex',  alignItems: 'center'}}>
                                                <ArrowBackIosIcon sx={{mt:3, mb:3, ml: 3}} fontSize="xs" color="primary"/> 
                                            </Grid>
                                        </>
                                    )
                                    
                                }
                                    
                                <Typography sx={{mt:3, mb:3, ml: marginLeft}} color={color} variant={size}>
                                    Controller
                                </Typography>
                                                            
                            </Grid>

                        </Grid>

                    </motion.div>
                
                </Grid>
            </AppBar>
                   
                    
            
            <Grid sx={{width: '100%',  display: 'flex',}} >
            
            
                <Grid sx={{ position: 'absolute', p:3, width: '100%', }}>

                
                <AnimatePresence>
                {renderController && (
                        
                    <motion.div
                        key="Codn"
                        initial={{ x: -50, opacity: 0.3 }}
                        animate={{ x: 0, opacity: 1}}
                        exit={{ x: -50, opacity: 0.3 }}
                        transition={{duration: 0.6, type: 'spring',  }}
                       
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

                        
                        


                        {/* Background */}
                        <StyledButton 
                            sx={{width: '100%'}}
                            onClick={() => {
                                setIsVisible(false)
                                setIsBackgroundVisible(true) 
                                setRenderController(false)
                                handleText('subtitle1', 'Background', 'primary.main')
                                
                            }}
                            >
                                Background
                        </StyledButton>


                        {/* Primary */}
                        <StyledButton 
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsPrimaryVisible(true) 
                                setRenderController(false)
                                handleText('subtitle1', 'Primary', 'primary.main')
                                
                            }}
                            >
                                Primary
                        </StyledButton>

                    </motion.div>
                   )}
                   </AnimatePresence>
                </Grid>
              
                <MobileBackground handleText={handleText} theme={theme} BackgroundPalette={BackgroundPalette} addToPalette={addToPalette} renderController={renderController} setRenderController={setRenderController} setIsVisible={setIsVisible} isBackgroundVisible={isBackgroundVisible} setIsBackgroundVisible={setIsBackgroundVisible} setBackgroundColorPalette={setBackgroundColorPalette} primaryJSON={primaryJSON} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} customPalette={customPalette} setPalette={setPalette} palette={palette}/>       
                <MobilePrimaryController theme={theme} addToPalette={addToPalette} PrimaryPalette={PrimaryPalette} setRenderController={setRenderController} isPrimaryVisible={isPrimaryVisible} setIsPrimaryVisible={setIsPrimaryVisible} primaryColorPalette={primaryColorPalette} setPrimaryJSON={setPrimaryJSON} primaryJSON={primaryJSON} setPrimaryColorPalette={setPrimaryColorPalette} customPalette={customPalette} setPalette={setPalette} palette={palette}/>

            </Grid>
           
    
            </>
           
        )

}

export default MobileControllerMenu
