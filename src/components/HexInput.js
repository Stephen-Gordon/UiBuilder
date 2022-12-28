

import '../App.css';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

import {  useState } from 'react';
import {TextField, Grid, Button, Typography, Box, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import CasinoIcon from '@mui/icons-material/Casino';
import Paper from '@mui/material/Paper';

//motion
import { motion } from "framer-motion";
import theme from 'prism-react-renderer/themes/dracula';
import { BorderColor } from '@mui/icons-material';



const HexInput = () => {

    const [input, setInput] = useState('')
    
    

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (

        
        <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="sm"
                       >
                  <TextField 
                    style={{color: 'f7f7f7'}}
                  sx={{mb:5, color: 'f7f7f7'}} variant="outlined" />
        </Grid>
          
        </>
       
      )

};

export default HexInput;