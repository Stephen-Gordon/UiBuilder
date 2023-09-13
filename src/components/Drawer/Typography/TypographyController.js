
import { Button, Grid, Typography, Drawer, Box, InputLabel, MenuItem ,FormControl, Select     } from "@mui/material";
import Accordion from "../../CustomMuiComponents/Accordian";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";

import { alpha, styled } from '@mui/material/styles';

import ColorList from "../../ColorList";


const TypographyController = ({theme, fonts, setFont, customPalette, setPalette, palette}) => {
   
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

    

    return (
      <>
        <Grid
          sx={{
            p: 3,
            backgroundColor: "background.paper",
            border: "1px solid",
            border: "0px solid",
            borderColor: "border",
            borderRadius: "12px",
          }}
        >
          <Grid sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Grid container justifyContent="flex-start">
              <InputLabel sx={{ display: "flex", width: " 100%" }}>
                Primary Color
              </InputLabel>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Select
                value=""
                label=""
                name=""
                sx={{ backgroundColor: primary }}
              >
                <Grid container justifyContent="center">
                  <ColorList
                    customPalette={customPalette}
                    setter={setPrimary}
                  />
                </Grid>
              </Select>
            </Grid>
          </Grid>

          <Grid
            sx={{
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "border",
              mb: 3,
              mt: 3,
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center", mb: 3, mt: 3 }}>
              <Grid container justifyContent="center">
                <InputLabel sx={{ display: "flex", width: " 100%" }}>
                  Secondary Color
                </InputLabel>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Select
                  value=""
                  label=""
                  name=""
                  sx={{ backgroundColor: secondary }}
                >
                  <ColorList
                    customPalette={customPalette}
                    setter={setSecondary}
                  />
                </Select>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Grid container justifyContent="flex-start">
              <InputLabel sx={{ display: "flex", width: " 100%" }}>
                Font
              </InputLabel>
            </Grid>
            <Grid container justifyContent="flex-end">
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "text.primary" }}
                >
                  {theme.typography.fontFamily}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value=""
                  name="select"
                  label="select"
                  MenuProps={{
                    sx: {
                      border: "0px solid #f7f7f7",
                      borderRadius: "12px",
                      width: "100%",
                    },
                    PaperProps: {
                      sx: {
                        width: "250px",
                        border: "1px solid",
                        borderRadius: "12px",
                        borderColor: "border",
                      },
                    },
                  }}
                  sx={{ backgroundColor: secondary }}
                >
                  {FontList}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </>
    );

}

export default TypographyController;