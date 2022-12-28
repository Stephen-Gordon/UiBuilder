import { useEffect } from "react";
import axios from 'axios'
import * as cheerio from 'cheerio';
import {TextField, Grid, Button, Typography, Box, CssBaseline } from '@mui/material';

import { useState } from "react";



const Scraper = ({setPalette}) => {

    

    const [input, setInput] = useState(Math.floor(Math.random()*16777215).toString(16))

   /*  useEffect(() => {
        axios.get(`https://mycolor.space/?hex=%23${input}&sub=1`)
        .then(response => {
             
            const html = response.data
            const $ = cheerio.load(html)
            const palette = []
         

            $('.name', html).each(function () { //<-- cannot be a function expression
                const hex = $(this).val() 
                console.log(hex)
                  palette.push({
                    hex
                   
                })  
            })  

            formatPalette(palette)
            console.log(palette[0].hex)

        }).catch(err => console.log("error name: ",err))
    }, []) */
    

    const newPalette = () => {
        console.log(input)
        axios.get(`https://mycolor.space/?hex=%23${input}&sub=1`)
        .then(response => {
             
            const html = response.data
            const $ = cheerio.load(html)
            const palette = []
         

            $('.name', html).each(function () { //<-- cannot be a function expression
                const hex = $(this).val() 
                //console.log(hex)
                  palette.push({
                    hex
                   
                })  
            })  

            formatPalette(palette)
            console.log(palette[0].hex)

        }).catch(err => console.log("error name: ",err))
    }
    
   
    const formatPalette = (palette) => {
        
         setPalette(
            {
                "name": "Generater",
                "primary": {
                    "main": `${palette[2].hex}`
                },
                "secondary": {
                    "main": `${palette[3].hex}`
                },
                "background": {
                    "default": `${palette[0].hex}`,
                    "paper": `${palette[1].hex}`
                },
                "text": {
                    "primary": "#eee",
                    "secondary": "#ccc",
                    "disabled": ""
                }
            }
        ) 
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const handleRandom = () => {
        setInput(Math.floor(Math.random()*16777215).toString(16))
        console.log(input)
        newPalette()
    }
    

    return (

        
        <>
            <TextField onChange={handleInput} target="_blank" sx={{mb:5}} variant="outlined" />
            <Button onClick={newPalette} variant='contained'/>
            <Button onClick={handleRandom} variant='contained'/>
            
        </>
       
      )



}

export default Scraper;