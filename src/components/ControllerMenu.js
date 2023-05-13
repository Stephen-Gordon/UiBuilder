import ThemeAccordian from "./Drawer/ThemeAccordian"
import Background from "./Drawer/BackgroundController";


import { useState } from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { AppBar, Grid } from "@mui/material";

import styled from "@emotion/styled";
import TypographyController from "./Drawer/Typography/TypographyController";
import PrimaryController from "./Drawer/PrimaryController";


const ControllerMenu = ({BackgroundPalette, PrimaryPalette, theme, customPalette, setPalette, fonts, setFont={setFont}, palette, setPrimaryJSON, setBackgroundColorPalette, backgroundJSON, setBackgroundJSON, primaryJSON, primaryColorPalette, setPrimaryColorPalette }) => {

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
    
        const [value, setValue] = useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        return (

            <>
            
        
            
            <TabContext value={value}>

                <Grid sx={{display: 'flex', flexDirection: 'row', height: '100%'}}>
                    

                    <Grid sx={{ minWidth: '225px',  display: 'flex', flexDirection: 'column', }}>
                    <AppBar elevation={0} position="sticky" sx={{ backgroundColor: 'inherit'}}>
                            <TabList
                            sx={{mt:2, }}
                                TabIndicatorProps={{ 
                                    style: {
                                        display: "none",
                                        borderRadius: '0px'
                                    },
                            }}  
                                
                                orientation="vertical" onChange={handleChange}
                            >
                                
                                <TabButton  sx={{ml:1, mr:1, mt:1}} label="Background" value="1" />

                                
                                <TabButton sx={{ml:1, mr:1, mt:1}} label="Primary" value="2" />                          


                                <TabButton sx={{textAlign: 'left', ml:1, mr:1, mt:1}} label="Theme" value="3" />

                            
                                <TabButton sx={{ml:1, mr:1, mt:1}} label="Typography" value="4" />
                                
                            
                            </TabList>
                
                            </AppBar>
                        
                    </Grid>  



                <Grid sx={{ minWidth: '337px', borderLeft: '1px solid', borderColor: 'border', height: '100%',  }}>

                    
                <AppBar elevation={0} position="sticky" sx={{ backgroundColor: 'inherit'}}>
                    <TabPanel value="1">
                        <Background BackgroundPalette={BackgroundPalette} PrimaryPalette={PrimaryPalette}  setBackgroundColorPalette={setBackgroundColorPalette} primaryJSON={primaryJSON} backgroundJSON={backgroundJSON} setBackgroundJSON={setBackgroundJSON} customPalette={customPalette} setPalette={setPalette} palette={palette}/>       
                    </TabPanel>
                
                    <TabPanel value="2">
                        <PrimaryController BackgroundPalette={BackgroundPalette} PrimaryPalette={PrimaryPalette} primaryColorPalette={primaryColorPalette} setPrimaryJSON={setPrimaryJSON} primaryJSON={primaryJSON} setPrimaryColorPalette={setPrimaryColorPalette} customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                    </TabPanel>

                    <TabPanel value="3">
                        <ThemeAccordian customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                    </TabPanel>

                    <TabPanel value="4" >
                        <TypographyController theme={theme} fonts={fonts} setFont={setFont} customPalette={customPalette} setPalette={setPalette} palette={palette}/>
                    </TabPanel>
                </AppBar>
                    
                    
                </Grid>
                </Grid>
                </TabContext>
           
    
            </>
           
        )

}

export default ControllerMenu
