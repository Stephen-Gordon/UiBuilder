
import { generate } from "@k-vyn/coloralgorithm";
import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from '@mui/material/Slider';




const BackgroundController = ({BackgroundPalette, backgroundJSON, setBackgroundJSON, setBackgroundColorPalette}) => {


    
   
    let backgroundColors;

    


    useEffect(() => {
        
        backgroundColors = generate(backgroundJSON)
  
        setBackgroundColorPalette(backgroundColors[0].colors)       

      }, [ backgroundJSON, backgroundColors]);





    const handleBackgroundHueStart = (e) => {    
     
        setBackgroundJSON(prevState => (
        {   ...prevState,
            hue: {
                start: e.target.value,
                end: e.target.value,
                rotation: "cw",
                curve: "easeInQuad", 
                direction: "easeOut"
            }
        }
        ));
    }

    const handleBackgroundSaturationStart = (e) => {      
        
        setBackgroundJSON(prevState => (
        {   ...prevState,
            saturation: {
                start: e.target.value, 
                end: prevState.saturation.end, 
                curve: "easeOutQuad",
                rate: 1, 
                direction: "easeOut"
            }, 
        }
        ));
    }

    const handleBackgroundSaturationEnd = (e) => {
          
        setBackgroundJSON(prevState => (
            {   ...prevState,
                saturation: {
                    start: prevState.saturation.start,
                    end: e.target.value, 
                    curve: "easeOutQuad",
                    rate: 1, 
                    direction: "easeOut"
                }, 
            }
        ));
    
    }

    const handleBackGroundBrightnessStart = (e) => {
           
        setBackgroundJSON(prevState => (
            {   
                ...prevState,
                brightness: {
                    start: e.target.value, 
                    end: prevState.brightness.end,
                    curve: "linear",
                    direction: "linear"
                }, 
            }
        ));
    }

    const handleBackGroundBrightnessEnd = (e) => {
         
        setBackgroundJSON(prevState => (
            {   
                ...prevState,
                brightness: {
                    start: prevState.brightness.start,
                    end: e.target.value, 
                    curve: "linear",
                    direction: "linear"
                }, 
            }
        ));
    }

    let bgPal;



    return (
      <>
        <Grid
          sx={{
            border: "1px solid",
            border: "0px solid",
            borderColor: "border",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{ ml: 2, mt: { xs: 3 , md: 0} }}
            variant={"subtitle1"}
            color="text.secondary"
          >
            Hue
          </Typography>

          <Grid
            sx={{
              p: 3,
              backgroundColor: "background.paper",
              border: "1px solid",
              border: "0px solid",
              borderColor: "border",
              borderRadius: "12px",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid sx={{ width: "100%" }}>
              <Grid sx={{ mb: 1 }}>
                <Grid sx={{ mb: 1 }}>
                  <Typography variant={"body2"} color="text.secondary">
                    Start
                  </Typography>
                </Grid>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                    variant="body1"
                  >
                    0
                  </Typography>
                  <Slider
                    fullWidth
                    defaultValue={backgroundJSON.hue.start}
                    min={200}
                    max={280}
                    step={10}
                    onChange={handleBackgroundHueStart}
                    color="primary"
                  />

                  <Typography color="text.secondary" variant="body1">
                    1
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* SAT */}
          <Grid>
            <Typography
              sx={{ ml: 2, mt: 3 }}
              variant={"subtitle1"}
              color="text.secondary"
            >
              Saturation
            </Typography>

            <Grid
              sx={{
                p: 3,
                backgroundColor: "background.paper",
                border: "1px solid",
                border: "0px solid",
                borderColor: "border",
                borderRadius: "12px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid sx={{ width: "100%" }}>
                <Grid sx={{ mb: 1 }}>
                  <Grid sx={{ mb: 1 }}>
                    <Typography variant={"body2"} color="text.secondary">
                      Start
                    </Typography>
                  </Grid>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Typography
                      textAlign="center"
                      color="text.secondary"
                      variant="body1"
                    >
                      0
                    </Typography>
                    <Slider
                      fullWidth
                      defaultValue={backgroundJSON.saturation.start}
                      min={0}
                      max={1}
                      step={0.01}
                      onChange={handleBackgroundSaturationStart}
                      color="primary"
                    />

                    <Typography color="text.secondary" variant="body1">
                      1
                    </Typography>
                  </Stack>
                </Grid>

                <Grid
                  sx={{
                    mb: 1,
                    mt: 2,
                    borderTop: "1px solid",
                    borderColor: "border",
                  }}
                ></Grid>

                <Grid sx={{ mb: 1, mt: 2 }}>
                  <Typography variant={"body2"} color="text.secondary">
                    End
                  </Typography>
                </Grid>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                    variant="body1"
                  >
                    0
                  </Typography>
                  <Slider
                    fullWidth
                    defaultValue={backgroundJSON.saturation.end}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={handleBackgroundSaturationEnd}
                    color="primary"
                  />
                  <Typography color="text.secondary" variant="body1">
                    1
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Brightness */}

          <Grid>
            <Typography
              sx={{ ml: 2, mt: 3 }}
              variant={"subtitle1"}
              color="text.secondary"
            >
              Brightness
            </Typography>

            <Grid
              sx={{
                p: 3,
                backgroundColor: "background.paper",
                border: "1px solid",
                border: "0px solid",
                borderColor: "border",
                borderRadius: "12px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid sx={{ width: "100%" }}>
                <Grid sx={{ mb: 1 }}>
                  <Grid sx={{ mb: 1 }}>
                    <Typography variant={"body2"} color="text.secondary">
                      Start
                    </Typography>
                  </Grid>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Typography
                      textAlign="center"
                      color="text.secondary"
                      variant="body1"
                    >
                      0
                    </Typography>
                    <Slider
                      fullWidth
                      defaultValue={backgroundJSON.brightness.start}
                      min={0}
                      max={1}
                      step={0.01}
                      onChange={handleBackGroundBrightnessStart}
                      color="primary"
                    />

                    <Typography color="text.secondary" variant="body1">
                      1
                    </Typography>
                  </Stack>
                </Grid>

                <Grid
                  sx={{
                    mb: 1,
                    mt: 2,
                    borderTop: "1px solid",
                    borderColor: "border",
                  }}
                ></Grid>

                <Grid sx={{ mb: 1, mt: 2 }}>
                  <Typography variant={"body2"} color="text.secondary">
                    End
                  </Typography>
                </Grid>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography
                    textAlign="center"
                    color="text.secondary"
                    variant="body1"
                  >
                    0
                  </Typography>
                  <Slider
                    sx={{ mt: 3 }}
                    fullWidth
                    defaultValue={backgroundJSON.brightness.end}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={handleBackGroundBrightnessEnd}
                    color="primary"
                  />
                  <Typography color="text.secondary" variant="body1">
                    1
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <Typography
              sx={{ ml: 2, mt: 3 }}
              variant={"subtitle1"}
              color="text.secondary"
            >
              Palette
            </Typography>

            <Grid
              sx={{
                p: 3,
                backgroundColor: "background.paper",
                borderRadius: "12px",
                width: "100%",
              }}
            >
              {BackgroundPalette}
            </Grid>
          </Grid>
        </Grid>
      </>
    );

}

export default BackgroundController