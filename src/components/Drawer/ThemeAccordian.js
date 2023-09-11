
import {  MenuItem, Grid  } from "@mui/material";

import '../../App.css';

import { useEffect, useState } from "react";
import PrimaryColor from "./ThemeAccordian/PrimaryColor";
import SecondaryColor from "./ThemeAccordian/SecondaryColor";
import ErrorColor from "./ThemeAccordian/ErrorColor";
import WarningColor from "./ThemeAccordian/WarningColor";
import InfoColor from "./ThemeAccordian/InfoColor";
import SuccessColor from "./ThemeAccordian/SuccessColor";

import BackgroundColor from "./ThemeAccordian/BackgroundColor";
import { alpha } from "@mui/material";


const ThemeAccordian = ({customPalette, setPalette, palette}) => {
   
    let [primary, setPrimary] = useState({
        light: palette.primary.light,
        main: palette.primary.main,
        dark: palette.primary.dark
    })

    let [secondary, setSecondary] = useState({
        light: palette.secondary.light,
        main: palette.secondary.main,
        dark: palette.secondary.dark
    })

    let [error, setError] = useState({
        light: palette.error.light,
        main: palette.error.main,
        dark: palette.error.dark
    })

    let [warning, setWarning] = useState({
        light: palette.warning.light,
        main: palette.warning.main,
        dark: palette.warning.dark
    })

    let [info, setInfo] = useState({
        light: palette.info.light,
        main: palette.info.main,
        dark: palette.info.dark
    })

    let [success, setSuccess] = useState({
        light: palette.success.light,
        main: palette.success.main,
        dark: palette.success.dark
    })

    let [background, setBackground] = useState(palette.background.default)

    let [paper, setPaper] = useState(palette.background.paper)


    useEffect(() => {
   
     setPalette(prevState => ({
        ...prevState,
        "primary": {
            "main": primary.main,
            "light": primary.light,
            "dark": primary.dark
        },
        "secondary": {
            "main": secondary.main,
            "light": secondary.light,
            "dark": secondary.dark
        },
        "error": {
            "main": error.main,
            "light": error.light,
            "dark": error.dark
        },
        "warning": {
            "main": warning.main,
            "light": warning.light,
            "dark": warning.dark
        },
        "info": {
            "main": info.main,
            "light": info.light,
            "dark": info.dark
        },
        "success": {
            "main": success.main,
            "light": success.light,
            "dark": success.dark
        },
        "background": {
            "default": background,
            "paper": paper
        },
        
    }));


    }, [primary, secondary, background, paper, error, info, success, warning]);

    
    
    

    const handleBackgroundColor = (e) => {
        setBackground(e.target.value)
    }

    const handlePaperColor = (e) => {
        setPaper(e.target.value)
    }

    

    let ColorList =  customPalette.map((color, i) => {
         return (
            
            <MenuItem 
                key={i} 
                sx={{
                    m:1, 
                    border: 0, 
                    borderRadius: '12px',
                    backgroundColor: color,
                    width:'50px', height:'50px', 
                    '&:hover, &.Mui-hovered': {
                        backgroundColor: alpha(color, 0.3)
                    },
                }} 
                value={color}
            
            ></MenuItem>
        ) 
    })


    return (
        <>
           <Grid sx={{   width: '100%', position: 'relative', backdropFilter: {xs: 'blur(100px)"'} }}>
            <PrimaryColor customPalette={customPalette} ColorList={ColorList} primary={primary} setPrimary={setPrimary} />
            <SecondaryColor ColorList={ColorList} setSecondary={setSecondary} secondary={secondary}/>
            <ErrorColor ColorList={ColorList} setError={setError} error={error}/>
            <WarningColor ColorList={ColorList} setWarning={setWarning} warning={warning}/>
            <InfoColor ColorList={ColorList} setInfo={setInfo} info={info}/>
            <SuccessColor ColorList={ColorList} setSuccess={setSuccess} success={success}/>

            <BackgroundColor ColorList={ColorList} background={background} handlePaperColor={handlePaperColor} handleBackgroundColor={handleBackgroundColor} paper={paper}/>
           </Grid>
        </>
    )

}

export default ThemeAccordian;