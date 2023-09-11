//https://kvyn.medium.com/introducing-the-new-colorbox-e0109c021729


import { generate } from "@k-vyn/coloralgorithm";
import { Button, Grid, Typography, Drawer, Box, Card, AppBar} from "@mui/material";
import { useEffect, useState } from "react";


import UI from "./UI";

import { AnimatePresence, motion } from "framer-motion";


import ControllerMenu from "./ControllerMenu";
import MobileControllerMenu from "./Drawer/MobileDrawer/MobileControllerMenu";

import { alpha } from '@mui/material/styles';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const ColorGenerator = ({ theme, setFont, fonts, palette, setPrimaryJSON, backgroundColorPalette, setPalette, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {
  
   


    
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
                style={{ transition: 'all 0.3s linear'}} 
                key={i} onClick={addToPalette} 
                variant='contained' 
                value={c.hex} 
                sx={{
                    my:1,
                    width: '100%',
                    height: '100px', 
                    borderRadius: '24px', 
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
                style={{ transition: 'all 0.3s linear' }} 
                key={i} onClick={addToPalette} 
                variant='contained' 
                value={c.hex} 
                sx={{
                    my:1,
                    width: '100%',
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
  
    

    
    const [isVisible, setIsVisible] = useState(true);
    const [customizeIsVisible, setCustomizeIsVisible] = useState(true);
    
    const [mobileOpen, setMobileOpen] = useState(false);

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
                <ControllerMenu BackgroundPalette={BackgroundPalette} PrimaryPalette={PrimaryPalette} theme={theme} fonts={fonts} setFont={setFont} primaryJSON={primaryJSON} setPrimaryJSON={setPrimaryJSON }  primaryColorPalette={primaryColorPalette} setPrimaryColorPalette={setPrimaryColorPalette} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} backgroundColorPalette={backgroundColorPalette} setBackgroundColorPalette={setBackgroundColorPalette} palette={palette}  setPalette={setPalette} customPalette={customPalette} />
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
           

                    <Grid container justifyContent="center" column={12} sx={{display: 'flex', flexDirection: 'column', flexGrow: 1,  width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` }}} >
                        
                        <AppBar elevation={0} position="sticky" sx={{backgroundColor: alpha(theme.palette.background.default, 0.4), backdropFilter: "blur(64px)", }}>
                           
                            <Grid sx={{display: 'flex', flexDirection: 'row', flexGrow: '1', width: '100%', justifyContent: 'flex-start'}}>

                                    
                              
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={handleDrawerToggle}
                                        sx={{ display: { sm: 'block', md: 'none' }, justifySelf: 'start', px:5,}}
                                    >
                                        <MenuIcon />
                                    </IconButton>

                                 
                                  {/*   <Button
                                        sx={{borderRadius: '0px'}}
                                     onClick={() => {
                                            setIsVisible(true)
                                            setCustomizeIsVisible(false)
                                        }} 
                                        fullWidth
                                        label="Simulate" value="0" 
                                    >
                                        Simulate
                                    </Button>
                                
                                    <Button
                                        sx={{borderRadius: '0px'}}
                                        onClick={() => {
                                            setIsVisible(false)
                                            setCustomizeIsVisible(true)
                                        }}
                                        fullWidth
                                        label="Customize" value="1">
                                        Customize
                                        </Button>      */}                               
                              
                            
                    
                            </Grid> 

                        </AppBar>
                        
                        <Grid sx={{display: 'grid'}}> 
                            {
                                isVisible && (
                                    <AnimatePresence>
                                        <UI fonts={fonts}  isVisible={isVisible} theme={theme} palette={palette} setPalette={setPalette}/>
                                    </AnimatePresence> 
                                )
                            }
                        </Grid>
{/* 
                        <Grid>
                            {
                                customizeIsVisible && (
                                    <AnimatePresence>
                                        <Customize BackgroundPalette={BackgroundPalette} PrimaryPalette={PrimaryPalette} customizeIsVisible={customizeIsVisible}/>
                                    </AnimatePresence> 
                                )
                            }
                        </Grid> */}
             
            
                
                    
                    </Grid>
                    
            
          </Grid>

        </Grid> 
           
        </>
    )
}

export default ColorGenerator
