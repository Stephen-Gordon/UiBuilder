//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Drawer, Box, Card, AppBar} from "@mui/material";
import { useEffect, useState } from "react";


import UI from "./UI";

import { AnimatePresence, motion } from "framer-motion";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


import ControllerMenu from "./ControllerMenu";
import MobileControllerMenu from "./Drawer/MobileDrawer/MobileControllerMenu";

import { alpha, styled } from '@mui/material/styles';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Customize from "./Customize";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const ColorGenerator = ({ theme, setFont, fonts, palette, setPrimaryJSON, backgroundColorPalette, setPalette, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {
  
    const TabButton = styled(Tab)({
           
        '&.MuiButtonBase-root-MuiTab-root,': {
            '&:hover, &.Mui-hovered': {
                backgroundColor: theme.palette.background.paper,
            },
            '&.Mui-selected': {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            },
            transition: 'ease-in-out 0.2s',
            alignItems: 'start',
            textTransform: 'none',
            color: theme.palette.text.primary,
            fontSize: '20px',
            fontWeight: '400',
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '24px',
            paddingRight: '24px',
            borderRadius: '0px',
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


    
    const [customPalette, setCustomPalette] = useState([]);

    
    let primaryColors;
    let backgroundColors;



    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
        primaryColors = generate(primaryJSON)

        setPrimaryColorPalette(primaryColors[0].colors)
        setBackgroundColorPalette(backgroundColors[0].colors)
        
       

      }, [primaryJSON, primaryColors, backgroundJSON, backgroundColors]);



    const addToPalette = (e) => {
        setCustomPalette(prevState => ([
             ...prevState,
             e.target.value 
        ]));
    }
   

    
    
    let BackgroundPalette = backgroundColorPalette.map((c, i)=> {
        return (
            <Button 
                disableRipple   
                style={{ transition: 'all 0.5s linear'}} 
                key={i} onClick={addToPalette} 
                variant='contained' 
                value={c.hex} 
                sx={{
                    m:1,
                    width: 
                    '100px', 
                    height: '100px', 
                    borderRadius: '16px', 
                    backgroundColor: c.hex,
                    '&:hover, &.Mui-hovered': {
                        backgroundColor: alpha(c.hex, 0.5)
                    },
                }}
            >
                {c.hex}
            </Button>

        )
    })

    let PrimaryPalette = primaryColorPalette.map((c, i)=> {
        return (
            <Button 
                disableRipple   
                style={{ transition: 'all 0.5s linear' }} 
                key={i} onClick={addToPalette} 
                variant='contained' 
                value={c.hex} 
                sx={{
                    m:1,
                    width: {xs: '100%', md: '100px'},
                    height: '100px', 
                    borderRadius: '16px', 
                    backgroundColor: c.hex,
                    '&:hover, &.Mui-hovered': {
                        backgroundColor: alpha(c.hex, 0.9)
                    },
                }}
            >
                {c.hex}
            </Button>
        )
        
    })  
  
    

    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setTimeout(() => {
            setValue(newValue);
        }, "500", newValue)
       
    };
    
    const [isVisible, setIsVisible] = useState(true);
    const [customizeIsVisible, setCustomizeIsVisible] = useState(true);
    
    const [mobileOpen, setMobileOpen] = useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const drawerWidth = '562px'
    
    return (
        
        <>
        
        <Grid
            /* sx={{ 
                background: `linear-gradient( to top, ${alpha(theme.palette.background.default, 0.3)}, ${alpha(theme.palette.background.paper, 0.3)})`,
            }} */
        >
          <Grid
          justifyContent="center"
          /* style={{ minHeight: '100vh', }}  */
          sx={{ 
            backgroundColor: 'rgba(0,0,0,0.1)',
            display: 'flex', 
            opacity: 1,
            backdropFilter: "blur(100px)",  
              
        }}
          >
               
           
          <Grid sx={{ width: {xs: '0%', md: drawerWidth }, flexShrink: {  md:0 } }}>

            {/* Desktop Drawer */}
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: alpha(theme.palette.background.default, 0),
                        borderRight: '1px solid',
                        borderColor: 'border'
                    }
                }}
                sx={{
                    display: { xs: 'none', sm: 'none',  md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                variant="permanent"
                open
                anchor="left"
            >
                <ControllerMenu theme={theme} fonts={fonts} setFont={setFont} primaryJSON={primaryJSON} setPrimaryJSON={setPrimaryJSON }  primaryColorPalette={primaryColorPalette} setPrimaryColorPalette={setPrimaryColorPalette} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} backgroundColorPalette={backgroundColorPalette} setBackgroundColorPalette={setBackgroundColorPalette} palette={palette}  setPalette={setPalette} customPalette={customPalette} />
            </Drawer> 



            {/* Mobile Drawer */}                    
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: alpha(theme.palette.background.default, 0),
                        borderRight: '1px solid',
                        borderColor: 'border',
                        opacity: 1,
                        backdropFilter: "blur(64px)", 
                    }
                }}
                sx={{
                    
                    display: {xs: 'block', md: 'none' },
                    justifyContent: 'center',
                    '& .MuiDrawer-paper': { width: '100%' },
                    }}
                variant="temporary"
                open={mobileOpen}
                disableBackdropTransition
                onClose={handleDrawerToggle}
                anchor="left"
            >

                <MobileControllerMenu BackgroundPalette={BackgroundPalette} addToPalette={addToPalette} PrimaryPalette={PrimaryPalette} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} theme={theme} fonts={fonts} setFont={setFont} primaryJSON={primaryJSON} setPrimaryJSON={setPrimaryJSON }  primaryColorPalette={primaryColorPalette} setPrimaryColorPalette={setPrimaryColorPalette} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} backgroundColorPalette={backgroundColorPalette} setBackgroundColorPalette={setBackgroundColorPalette} palette={palette}  setPalette={setPalette} customPalette={customPalette} />
            
            </Drawer> 


           
            </Grid>  
                {/* Tabs */}
                <TabContext value={value}>
                            

                    <Grid container justifyContent="center" column={12} sx={{display: 'flex', flexDirection: 'column', flexGrow: 1,  width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` }}} >
                        
                        <AppBar elevation={0} position="sticky" sx={{backgroundColor: alpha(theme.palette.background.default, 0.4), backdropFilter: "blur(64px)", }}>
                           
                            <Grid sx={{display: 'flex', flexDirection: 'row', flexGrow: '1', width: '100%', justifyContent: 'center'}}>

                                    
                                <TabList
                                variant="fullWidth"
                                centered
                              
                                    TabIndicatorProps={{ 
                                        style: {
                                            display: "none",
                                        },
                                    }}
                                    onChange={handleChange}
                                  
                                >        
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ display: { sm: 'block', md: 'none' }, justifySelf: 'start', px:5,}}
                                    >
                                        <MenuIcon />
                                    </IconButton>


                                    <TabButton onClick={() => {
                                            setIsVisible(true)
                                            setCustomizeIsVisible(false)
                                        }} 
                                        label="Simulate" value="1" 
                                    /> 
                                
                                    <TabButton
                                        onClick={() => {
                                            setIsVisible(false)
                                            setCustomizeIsVisible(true)
                                        }}
                                        label="Customize" value="2" />                                                  
                                </TabList>
                            
                    
                            </Grid> 

                        </AppBar>
                        
                

                        <TabPanel sx={{p:0, height: 'auto',}} value="1">
                            <AnimatePresence>
                                <UI fonts={fonts}  isVisible={isVisible} theme={theme} palette={palette} setPalette={setPalette}/>
                            </AnimatePresence> 
                        </TabPanel>
                        
                        <TabPanel sx={{p:0}} value="2">
                            <AnimatePresence>
                                <Customize BackgroundPalette={BackgroundPalette} PrimaryPalette={PrimaryPalette} customizeIsVisible={customizeIsVisible}/>
                           </AnimatePresence>
                        </TabPanel>             
                
                    
                    </Grid>
                    
            
                    </TabContext>
          </Grid>

            </Grid> 
           
        </>
    )
}

export default ColorGenerator
