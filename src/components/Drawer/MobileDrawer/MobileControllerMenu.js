import ThemeAccordian from "../ThemeAccordian"
import MobileBackground from "./MobileBackgroundController";
import MobilePrimaryController from "./MobilePrimaryController";
import MobileTypographyController from "./MobileTypographyController";
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
        const [isThemeVisible, setIsThemeVisible] = useState(false);
        const [isTypographyVisible, setIsTypographyVisible] = useState(false);
        const [isPageVisible, setPageVisible] = useState(false)

        const [renderController, setRenderController] = useState(true);
        const [size, setSize] = useState(theme.typography.h4.fontSize);
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
     
        console.log(theme.spacing)
        return (

            <>

            <motion.div 
                id="ddddddddddddddd"
                layout
                animate={{
                    transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
                }}
                style={{zIndex: '1500', backgroundColor: alpha(theme.palette.background.default, 0), backdropFilter: "blur(64px)", minHeight: `${theme.typography.h1.fontSize}`, position: 'sticky', }} >
                
                <Grid sx={{position: 'absolute', width: '100%', height: '100%', display: 'flex', alignContent: 'center', alignItems: 'center', }}>
                
                    {
                        isPageVisible && (
                        <motion.div
                        layout
                        style={{width: '100%', zIndex: '-1501', position: '', height: '100%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}
                        initial={{  x: '50%'}}
                        animate={{
                            x:0,
                            transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
                        }}
                        exit={{
                            x: '100%',
                            transition: { duration: 0.2, ease: [0.71, 0.03, 0.56, 0.95] },
                        }}
                        >
                        <Typography align="center" sx={{zIndex: '1501', my:1, fontWeight: ''}}  color={"text.primary"} variant={"subtitle1"} >
                            {title}
                        </Typography> 
                        </motion.div>
                        )
                        
                    }
                
                </Grid>

                <Grid sx={{backgroundColor: 'inherit', position: 'sticky', height: '100%'}}>

                    {/* Controller */}

                    <motion.div
                    layout
                    layoutId="text" 
                    transition={{layout: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9],}}}
                    style={{zIndex: '1500',  height: '100%'}}>
                    
                        <Grid sx={{display: 'flex', alignContent : 'center', alignItems: 'center',  height: '100%'}} >

                            
                            <Grid sx={{display: 'flex', alignContent: 'center', alignItems: 'center', cursor: pointerBool, width: '100%', height: '100%'}}
                                onClick={() => {
                                    if(isPageVisible){
                                    setRenderController(true) 
                                    setIsBackgroundVisible(false)
                                    setIsPrimaryVisible(false)
                                    setPageVisible(false)
                                    setIsThemeVisible(false)
                                    setIsTypographyVisible(false)
                                    handleText(theme.typography.h4.fontSize, 'Controller', theme.palette.text.main)
                                    } 
                                
                                    
                                }}
                            >
                                { 
                                    isPageVisible && (
                                        <>
                                             <>
                                                <motion.div 
                                                initial={{opacity: 0, x: 50}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{ duration: 0.2, ease: [0.8, 0.1, 0.2, 0.9],}}
                                                style={{display: 'flex',  alignItems: 'center'}}>
                                                    <ArrowBackIosIcon sx={{my:1, ml: 3}} fontSize="xs" color="primary"/> 
                                                </motion.div>
                                            </>
                                        </>
                                    )
                                    
                                }
                              
                                <Grid sx={{display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%'}}>
                                    <Typography sx={{my:1, ml: marginLeft, transitionTimingFunction: theme.transitions.easing.easeIn, transition: 'color 0.3s, font-size 0.3s', fontSize: `${size}`, color: `${color}`}}  >
                                        Controller
                                    </Typography>
                                    
                                    {
                                        renderController && (
                                            <IconButton
                                            sx={{mr:3}}
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
                                        )
                                    }
                                </Grid>
                                                            
                            </Grid>

                        </Grid>

                    </motion.div>
                
                </Grid>
            </motion.div>
                   
                    
            
            <Grid sx={{width: '100%',  display: 'flex'}} >
            
            
                <Grid sx={{ position: 'absolute', p:3, width: '100%', backdropFilter: "blur(64px)", mt: theme.typography.h4.fontSize  }}>

                
                <AnimatePresence >
                {renderController && (
                        
                    <motion.div
                        layout
                        key="Codn"
                        initial={{opacity: 0, scale: 0.8, x: -100 }}
                        animate={{
                            x: 0,
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.3, ease: [0.8, 0.1, 0.2, 0.9]},
                          }}
                          exit={{
                            scale: 0.8,
                            x: -50,
                            opacity: 0.3,
                            transition: { duration: 0.2, ease: [0.71, 0.03, 0.56, 0.95], opacity: 0.2  },
                          }}
                        transition={{layout: { duration: 0.3, ease: [0.71, 0.03, 0.56, 0.95],}}}
                    >
                       

                        
                        


                        {/* Background */}
                        <StyledButton 
                            sx={{width: '100%'}}
                            disableRipple
                            onClick={() => {
                                setIsBackgroundVisible(true)  
                                setRenderController(false)
                                handleText(theme.typography.subtitle1.fontSize, 'Background', theme.palette.primary.main)
                                setPageVisible(true)                                
                                
                            }}
                            >
                                Background
                        </StyledButton>


                        {/* Primary */}
                        <StyledButton 
                            disableRipple
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsPrimaryVisible(true) 
                                setRenderController(false)
                                handleText(theme.typography.subtitle1.fontSize, 'Primary', theme.palette.primary.main)
                                setPageVisible(true)                             
                            }}
                            >
                                Primary
                        </StyledButton>

                        {/* Theme Accordian */}
                        <StyledButton 
                            disableRipple
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsThemeVisible(true) 
                                setRenderController(false)
                                handleText(theme.typography.subtitle1.fontSize, 'Theme', theme.palette.primary.main)
                                setPageVisible(true)                           
                            }}
                            >
                                Theme
                        </StyledButton>

                        {/* Typography Accordian */}
                        <StyledButton 
                            disableRipple
                            sx={{width: '100%', mt: 3}}
                            onClick={() => {
                                setIsTypographyVisible(true) 
                                setRenderController(false)
                                handleText(theme.typography.subtitle1.fontSize, 'Typography', theme.palette.primary.main)
                                setPageVisible(true)                           
                            }}
                            >
                                Typography
                        </StyledButton>

                    </motion.div>
                   )}
                   </AnimatePresence>
                </Grid>
              
                <MobileBackground handleText={handleText} theme={theme} BackgroundPalette={BackgroundPalette} addToPalette={addToPalette} renderController={renderController} setRenderController={setRenderController} setIsVisible={setIsVisible} isBackgroundVisible={isBackgroundVisible} setIsBackgroundVisible={setIsBackgroundVisible} setBackgroundColorPalette={setBackgroundColorPalette} primaryJSON={primaryJSON} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} customPalette={customPalette} setPalette={setPalette} palette={palette}/>       
                <MobilePrimaryController theme={theme} addToPalette={addToPalette} PrimaryPalette={PrimaryPalette} setRenderController={setRenderController} isPrimaryVisible={isPrimaryVisible} setIsPrimaryVisible={setIsPrimaryVisible} primaryColorPalette={primaryColorPalette} setPrimaryJSON={setPrimaryJSON} primaryJSON={primaryJSON} setPrimaryColorPalette={setPrimaryColorPalette} customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                
                <AnimatePresence>
                {isThemeVisible && (
               
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
                    <ThemeAccordian customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                    </motion.div>
          
                )}
                </AnimatePresence>
                <MobileTypographyController isTypographyVisible={isTypographyVisible} theme={theme} fonts={fonts} setFont={setFont} customPalette={customPalette} setPalette={setPalette} palette={palette}/>

            </Grid>
           
    
            </>
           
        )

}

export default MobileControllerMenu
