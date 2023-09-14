import ThemeAccordian from "./Drawer/ThemeAccordian"
import Background from "./Drawer/BackgroundController";


import { useState } from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { alpha } from "@mui/material/styles";
import { AppBar, Grid, Typography, Button } from "@mui/material";

import styled from "@emotion/styled";
import TypographyController from "./Drawer/Typography/TypographyController";
import PrimaryController from "./Drawer/PrimaryController";
import Box from "@mui/material/Box";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

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
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                <Grid
                  sx={{
                    minWidth: "225px",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "scroll",
                  }}
                >
                  <AppBar
                    elevation={0}
                    position="sticky"
                    sx={{ backgroundColor: "inherit", minHeight: "auto" }}
                  >
                    <TabList
                      sx={{ mt: 2, position: "sticky" }}
                      TabIndicatorProps={{
                        style: {
                          display: "none",
                          borderRadius: "0px",
                        },
                      }}
                      orientation="vertical"
                      onChange={handleChange}
                    >
                      <TabButton
                        sx={{ ml: 1, mr: 1, mt: 1 }}
                        label="Background"
                        value="1"
                      />

                      <TabButton
                        sx={{ ml: 1, mr: 1, mt: 1 }}
                        label="Primary"
                        value="2"
                      />

                      <TabButton
                        sx={{ textAlign: "left", ml: 1, mr: 1, mt: 1 }}
                        label="Theme"
                        value="3"
                      />

                      <TabButton sx={{ m: 1 }} label="Typography" value="4" />
                    </TabList>

                    {/* Colors Buttons */}
                    <Grid>
                      <Accordion
                        sx={{
                          mt: 2,
                          width: "100%",
                          backgroundColor: "background.default",
                          borderTop: "1px solid",
                          borderBottom: "1px solid",
                          borderColor: "border",
                          "& .MuiAccordion-root, .Mui-expanded": {
                            border: "0px solid",
                            borderColor: "border",
                          },
                        }}
                      >
                        <AccordionSummary
                          sx={{
                            backgroundColor: "",
                            border: "0px solid",
                            borderColor: "border",
                            "& .MuiAccordionSummary-content": {
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "",
                              display: "flex",
                              flexDirection: "column",
                            },
                            "& .MuiAccordionSummary-root, .Mui-expanded": {
                              border: "0px solid",
                              borderColor: "border",
                            },
                          }}
                        >
                          <Typography
                            sx={{ ml: 1 }}
                            variant="h6"
                            fontWeight="400"
                          >
                            Palette
                          </Typography>
                          <Grid
                            sx={{
                              display: "flex",
                              mt: 2,
                              justifyContent: "space-around",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "primary.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                backgroundColor: "secondary.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                backgroundColor: "error.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                backgroundColor: "warning.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                backgroundColor: "info.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                            <Box
                              sx={{
                                backgroundColor: "success.main",
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                              }}
                            ></Box>
                          </Grid>
                        </AccordionSummary>

                        <AccordionDetails>
                          {/*     LIGHT   */}
                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Primary
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "primary.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "primary.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "primary.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>

                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Secondary
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "secondary.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "secondary.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "secondary.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>

                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Error
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "error.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "error.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "error.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>

                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Warning
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "warning.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "warning.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "warning.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>

                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Info
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "info.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "info.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "info.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>

                          <Grid sx={{ mt: 3 }}>
                            <Typography align="center" sx={{ mt: 1, mb: 1 }}>
                              Success
                            </Typography>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                p: { xs: 1, md: 1 },
                              }}
                            >
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "success.light",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "success.main",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                              <Grid
                                sx={{
                                  borderRadius: "8px",
                                  backgroundColor: "success.dark",
                                  width: "32px",
                                  minWidth: "32px",
                                  height: "32px",
                                  p: 1,
                                }}
                              ></Grid>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </AppBar>
                </Grid>

                <Grid
                  sx={{
                    minWidth: "337px",
                    borderLeft: "1px solid",
                    borderColor: "border",
                    height: "100%",
                    position: "sticky",
                  }}
                >
                  <AppBar
                    elevation={0}
                    position="sticky"
                    sx={{
                      backgroundColor: "inherit",
                      position: "sticky",
                    }}
                  >
                    <TabPanel sx={{ p:2 }} value="1">
                      <Background
                        BackgroundPalette={BackgroundPalette}
                        PrimaryPalette={PrimaryPalette}
                        setBackgroundColorPalette={setBackgroundColorPalette}
                        primaryJSON={primaryJSON}
                        backgroundJSON={backgroundJSON}
                        setBackgroundJSON={setBackgroundJSON}
                        customPalette={customPalette}
                        setPalette={setPalette}
                        palette={palette}
                      />
                    </TabPanel>

                    <TabPanel sx={{ p:2 }} value="2">
                      <PrimaryController
                        BackgroundPalette={BackgroundPalette}
                        PrimaryPalette={PrimaryPalette}
                        primaryColorPalette={primaryColorPalette}
                        setPrimaryJSON={setPrimaryJSON}
                        primaryJSON={primaryJSON}
                        setPrimaryColorPalette={setPrimaryColorPalette}
                        customPalette={customPalette}
                        setPalette={setPalette}
                        palette={palette}
                      />
                    </TabPanel>

                    <TabPanel sx={{ p:2 }} value="3">
                      <ThemeAccordian
                        customPalette={customPalette}
                        setPalette={setPalette}
                        palette={palette}
                      />
                    </TabPanel>

                    <TabPanel sx={{ p:2 }} value="4">
                      <TypographyController
                        theme={theme}
                        fonts={fonts}
                        setFont={setFont}
                        customPalette={customPalette}
                        setPalette={setPalette}
                        palette={palette}
                      />
                    </TabPanel>
                  </AppBar>
                </Grid>
              </Grid>
            </TabContext>
          </>
        );

}

export default ControllerMenu
