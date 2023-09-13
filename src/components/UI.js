import "../App.css";

import { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  List,
} from "@mui/material";

import { alpha } from "@mui/material";
import { AnimatePresence, motion, useInView } from "framer-motion";
import MaterialUiLogo from "../assets/MaterialUiLogo.png";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import FormatSizeOutlinedIcon from "@mui/icons-material/FormatSizeOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import TextFormatOutlinedIcon from "@mui/icons-material/TextFormatOutlined";


import CodeBlocks from "./CodeBlock";

const UI = ({ theme, palette, font }) => {
  

  const copyToClipboard = (e) => {
    console.log(e.target.value);
    navigator.clipboard.writeText(e.target.value);
  };

  console.log(theme.typography.h3.fontSize);

  let options = {
    firstColor: theme.palette.primary.main,
    secondColor: theme.palette.secondary.main,
    direction: "bottom",
    variant: "h3",
  };

  let tabList = [
    {
      id: 1,
      bgcolor: alpha(theme.palette.background.paper, 1),
      icon: (
        <PaletteOutlinedIcon
          sx={{ fontSize: `${theme.typography.h2.fontSize}`, color: "inherit" }}
        />
      ),
      text: "Design your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.",
    },
    {
      id: 2,
      bgcolor: alpha(theme.palette.background.paper, 0.5),
      icon: (
        <PanoramaOutlinedIcon
          sx={{ fontSize: `${theme.typography.h2.fontSize}`, color: "inherit" }}
        />
      ),
      text: "Simulate your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.",
    },
    {
      id: 3,
      bgcolor: alpha(theme.palette.background.paper, 0.2),
      icon: (
        <BrushOutlinedIcon
          sx={{ fontSize: `${theme.typography.h2.fontSize}`, color: "inherit" }}
        />
      ),
      text: "Create your website with professional tools. We want to help you design faster and better. Bit by bit. Day by day.",
    },
  ];

  let [activeTab, setActiveTab] = useState(tabList[0]);

  return (
    <>
      {/*   <Grid sx={{
                width: {xs: '100%'  md: `calc(100% - 562px)`},
                height: '100%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                overflowX: 'hidden',
               
              
               
              
                
                  
            }}>
                <Grid
                    sx={{
                        width: '100%',
                        height: '100vh',
                        backdropFilter: 'blur(6.5rem)',
                        borderRadius: '100px',
                        backgroundColor: 'inherit',
                        opacity: 0.1,
                        backgroundSize: "100%",
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}, transparent 60%)`,
                    }}
                >

                </Grid>

            </Grid> */}

      <Grid
        container
        maxWidth="md"
        column={12}
        justifySelf="center"
        sx={{
          alignContent: { xs: "start", md: "center" },
          p: { xs: "40px", md: "0px" },
        }}
        style={{
          minHeight: "100vh",

          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h3" color="text.secondary">
            UI Designer
          </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          lg={8}
          sx={{ display: "flex", justifyContent: "center", mt: 5 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              p: 2,
              backgroundImage: `linear-gradient( to top, ${alpha(
                theme.palette.primary.main,
                1
              )}, ${alpha(theme.palette.secondary.main, 1)})`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Design, Customize and Simulate your User Interface in minutes
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h5" color="text.secondary" textAlign="center">
            Create a Material UI Theme in Minutes
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "center", mt: 5 }}
        >
          <Button
            sx={{
              maxWidth: "300px",
              width: "100%",
              background: "primary.main",
            }}
            variant="contained"
            size="medium"
          >
            Get Started
          </Button>
        </Grid>
      </Grid>

      {/* Design */}

      <Grid
        container
        column={12}
        maxWidth="lg"
        justifySelf="center"
        sx={{ display: "flex" }}
        style={{
          minHeight: "100vh",
          alignContent: "center",
          justifyContent: "center",
          mb: 20,
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              width: "100%",
              height: { xs: "50vh", md: "514px" },
              mx: 2,
              my: 0,
              borderRadius: "24px",
              p: { xs: 2, lg: 5 },
            }}
          ></Card>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            lg={12}
            sx={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              mt: { xs: 3, md: 0 },
              p: 2,
            }}
          >
            <Grid>
              <Typography variant="h3" options={options}>
                Design
              </Typography>
            </Grid>

            <Typography
              sx={{ mt: { xs: 3, md: 5 } }}
              variant="h5"
              color="text.secondary"
            >
              Design your website with professional tools. We want to help you
              design faster and better. Bit by bit. Day by day.
            </Typography>

            <Grid
              item
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
            >
              <Button
                sx={{ background: "background.paper" }}
                variant="outlined"
                size="medium"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Customize  */}
      <Grid
        container
        column={12}
        maxWidth="lg"
        justifySelf="center"
        sx={{ display: "flex", mb: 10 }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: { xs: "50vh", md: "auto" },
            m: { xs: 2, lg: 0 },
          }}
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ backgroundColor: activeTab.bgcolor }}
            style={{
              width: "100%",

              mx: 2,
              my: 0,
              borderRadius: "24px",
              p: { xs: 2, lg: 5 },
            }}
          ></motion.div>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "space-around",
          }}
        >
          {tabList.map((tab) => {
            return (
              <Grid
                onClick={() => {
                  console.log(tab.id);
                  setActiveTab(tab);
                }}
              >
                <Grid item sx={{ display: "flex" }}>
                  <Grid
                    item
                    xs={2}
                    lg={2}
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                      mt: { xs: 3, md: 5 },
                      p: 2,
                    }}
                  >
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid sx={{ position: "relative" }}>
                        {activeTab.id === tab.id && (
                          <motion.div
                            layoutId="blue"
                            animate={{
                              backgroundColor:
                                activeTab.id === tab.id ? "inherit" : "inherit",
                            }}
                            transition={{ duration: 0.7, type: "spring" }}
                            style={{
                              mixBlendMode: "difference",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              my: { xs: 3, md: 5 },
                              width: "40px",
                              height: "50px",
                              border: "2px solid",
                              borderColor: theme.palette.primary.main,
                              borderRadius: "12px",
                            }}
                          ></motion.div>
                        )}
                      </Grid>

                      <Grid
                        sx={{
                          position: "absolute",
                          display: "grid",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      >
                        {activeTab.id === tab.id && (
                          <motion.div
                            transition={{ duration: 0.3 }}
                            layoutId="pill"
                            style={{
                              mixBlendMode: "difference",
                              backgroundColor:
                                activeTab.id === tab.id
                                  ? theme.palette.primary.main
                                  : theme.palette.text.secondary,
                              width: "20px",
                              height: "20px",
                              borderRadius: "6px",
                            }}
                          ></motion.div>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={10}
                    lg={10}
                    sx={{
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "space-around",
                      mt: { xs: 3, md: 5 },
                      p: 2,
                    }}
                  >
                    <motion.div
                      transition={{ duration: 0.7, type: "spring" }}
                      animate={{
                        fontSize: theme.typography.h5.fontSize,
                        color:
                          activeTab.id === tab.id
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                      }}
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      {tab.icon}
                    </motion.div>

                    <motion.p
                      transition={{ duration: 0.7, type: "spring" }}
                      animate={{
                        fontSize: theme.typography.h5.fontSize,
                        color:
                          activeTab.id === tab.id
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                      }}
                      sx={{ mb: { xs: 3, md: 5 } }}
                    >
                      {tab.text}
                    </motion.p>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* Cards */}
      <Grid
        container
        column={12}
        maxWidth="xl"
        justifySelf="center"
        sx={{ display: "flex" }}
        style={{
          minHeight: "100vh",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              minHeight: { xs: "50vh", md: "384px" },
              mx: 2,
              mb: 5,
              borderRadius: "24px",
              p: { xs: 2, lg: 5 },
              border: "1px solid ",
              borderColor: "background.paper",
              ":hover": { borderColor: "border" },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "flex-start",
                position: "absolute",
                inset: " -50% 0 0 50%;",
                width: "100%",
                height: "100%",

                overflow: "hidden",
              }}
            >
              <Grid
                sx={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "200px",
                  background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}, transparent 60%)`,
                  /* background: `linear-gradient( to top, ${alpha(theme.palette.primary.main, 1)}, ${alpha(theme.palette.secondary.main, 1)})`, */
                }}
              ></Grid>
            </Grid>
            <Grid
              sx={{
                display: "grid",
                alignContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 5, fontWeight: "600" }}
                component="div"
              >
                Create
              </Typography>

              <Grid>
                <Typography sx={{ mb: 2 }} variant="h6">
                  Whereas disregard and contempt for human rights have resulted
                </Typography>

                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              minHeight: { xs: "50vh", md: "384px" },
              mx: 2,
              mb: 5,
              borderRadius: "24px",
              p: { xs: 2, lg: 5 },
              border: "1px solid ",
              borderColor: "background.paper",
              ":hover": { borderColor: "border" },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "flex-start",
                position: "absolute",
                inset: " -50% 0 0 50%;",
                width: "100%",
                height: "100%",

                overflow: "hidden",
              }}
            >
              <Grid
                sx={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "200px",
                  background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}, transparent 60%)`,
                  /* background: `linear-gradient( to top, ${alpha(theme.palette.primary.main, 1)}, ${alpha(theme.palette.secondary.main, 1)})`, */
                }}
              ></Grid>
            </Grid>
            <Grid
              sx={{
                display: "grid",
                alignContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 5, fontWeight: "600" }}
                component="div"
              >
                Develop
              </Typography>

              <Grid>
                <Typography sx={{ mb: 2 }} variant="h6">
                  Simulate your website with professional tools. We want to help
                  you design faster and better
                </Typography>

                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          xl={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              m: 2,
              width: "100%",
              borderRadius: "24px",
              p: 1,
              border: "1px solid",
              borderColor: "border",
              backgroundColor: "background.default",
            }}
          >
            <a href="#">
              <CardContent>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    Ubuntu
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    <TextFormatOutlinedIcon
                      sx={{ fontSize: `${theme.typography.h4.fontSize}` }}
                    />
                  </Typography>
                </Grid>

                <Typography sx={{ mb: 2 }} color="text.secondary" variant="h6">
                  Whereas disregard and contempt for human rights have resulted
                </Typography>

                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    fontWeight: "400",
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardContent>
            </a>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          xl={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              m: 2,
              width: "100%",
              borderRadius: "24px",
              p: 1,
              border: "1px solid",
              borderColor: "border",
              backgroundColor: "background.default",
            }}
          >
            <a href="#">
              <CardContent>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    Arial
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    <FormatSizeOutlinedIcon
                      sx={{ fontSize: `${theme.typography.h4.fontSize}` }}
                    />
                  </Typography>
                </Grid>

                <Typography sx={{ mb: 2 }} color="text.secondary" variant="h6">
                  Whereas disregard and contempt for human rights have resulted
                </Typography>

                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    fontWeight: "400",
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardContent>
            </a>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          xl={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              m: 2,
              width: "100%",
              borderRadius: "24px",
              p: 1,
              border: "1px solid",
              borderColor: "border",
              backgroundColor: "background.default",
            }}
          >
            <a href="#">
              <CardContent>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    Roboto
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    <TextFieldsOutlinedIcon
                      sx={{ fontSize: `${theme.typography.h4.fontSize}` }}
                    />
                  </Typography>
                </Grid>
                <Typography sx={{ mb: 2 }} color="text.secondary" variant="h6">
                  Whereas disregard and contempt for human rights have resulted
                </Typography>
                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    fontWeight: "400",
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardContent>
            </a>
          </Card>
        </Grid>
      </Grid>

      {/* Cards */}

      <Grid
        maxWidth="lg"
        justifySelf="center"
        container
        column={12}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          pt: { xs: "130px", lg: 0 },
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              minWidth: "0px",
              m: 2,
              maxWidth: "514px",
              borderRadius: "24px",
              backgroundColor: "background.default",
              p: { xs: 2, lg: 5 },
              border: "1px solid",
              borderColor: "border",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ mb: 5 }} component="div">
                Roboto
              </Typography>

              <Typography sx={{ mb: 5 }} color="text.secondary" variant="body1">
                Whereas disregard and contempt for human rights have resulted
              </Typography>

              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ background: "background.paper", mt: { xs: 3, md: 0 } }}
                color="secondary"
                variant="contained"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            elevation={0}
            sx={{
              minWidth: "0px",
              m: 2,
              maxWidth: "514px",
              borderRadius: "24px",
              backgroundColor: "background.default",
              p: { xs: 2, lg: 5 },
              border: "1px solid",
              borderColor: "border",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ mb: 5 }} component="div">
                Roboto
              </Typography>

              <Typography sx={{ mb: 5 }} color="text.secondary" variant="body1">
                Whereas disregard and contempt for human rights have resulted
              </Typography>

              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ background: "background.paper", mt: { xs: 3, md: 0 } }}
                color="primary"
                variant="contained"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* Paper cards */}

      <Grid
        container
        column={12}
        sx={{ display: "flex" }}
        style={{
          minHeight: "100vh",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Primary
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "primary.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "primary.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "primary.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Secondary
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "secondary.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "secondary.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "secondary.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Error
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "error.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "error.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "error.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Warning
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "warning.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "warning.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "warning.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Info
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "info.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "info.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "info.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={6}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <Typography align="center" sx={{ mt: 1, mb: 1 }}>
            Success
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "success.light",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "success.main",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                m: 1,
                backgroundColor: "success.dark",
                maxWidth: "100px",
                maxHeight: "100px",
                minHeight: "40px",
              }}
            ></Button>
          </Grid>
        </Grid>
      </Grid>

      {/* CodeBlock */}

      <Grid
        container
        column={12}
        maxWidth="xl"
        justifySelf="center"
        sx={{ display: "flex" }}
        style={{
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          {/* Material UI Info Card */}

          <Card
            elevation={0}
            sx={{
              width: "100%",
              p: 1,
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "border",
              backgroundColor: "background.default",
            }}
          >
            <CardContent>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" sx={{ mb: 5 }} component="div">
                  Material Ui
                </Typography>
                <Typography variant="h4" sx={{ mb: 5 }} component="div">
                  <CardMedia
                    component="img"
                    height="40px"
                    width="40px"
                    image={MaterialUiLogo}
                  />
                </Typography>
              </Grid>

              <Typography sx={{ mb: 2 }} color="text.secondary" variant="h6">
                MUI offers a comprehensive suite of free UI tools to help you
                ship new features faster. Start with Material UI, our
                fully-loaded component library, or bring your own design system
                to our production-ready components.
              </Typography>

              <a href="https://mui.com/" target="_blank">
                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    fontWeight: "400",
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Documentation
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          {/* How to use Card */}
          <Card
            elevation={0}
            sx={{
              width: "100%",
              height: { xs: "auto", md: "100%" },
              p: 1,
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "border",
              backgroundColor: "background.default",
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                display: "grid",
                alignContent: "space-between",
              }}
            >
              <Grid>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" sx={{ mb: 5 }} component="div">
                    Add theme to your Project
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ mb: 5 }}
                    component="div"
                  ></Typography>
                </Grid>
                <List
                  sx={{
                    maxWidth: "100%",
                    listStyleType: "disc",
                    pl: 2,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  <ListItem
                    sx={{
                      display: "list-item",
                      color: "text.secondary",
                      width: "100%",
                      fontSize: theme.typography.h6.fontSize,
                    }}
                  >
                    Create Theme file in your project
                  </ListItem>

                  <ListItem
                    sx={{
                      display: "list-item",
                      color: "text.secondary",
                      width: "100%",
                      fontSize: theme.typography.h6.fontSize,
                    }}
                  >
                    Copy theme into the newly created Theme file
                  </ListItem>
                </List>
              </Grid>

              <a href="https://mui.com/" target="_blank">
                <Button
                  disableRipple
                  textAlign="left"
                  sx={{
                    fontWeight: "400",
                    textAlign: "left",
                    background: "background.paper",
                    p: 0,
                    ":hover": { backgroundColor: "inherit" },
                  }}
                  variant="text"
                  color="primary"
                >
                  Watch a Video
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        column={12}
        maxWidth="xl"
        justifySelf="center"
        sx={{ display: "flex" }}
        style={{
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ p: { xs: 1, md: 5 } }}
        >
          <CodeBlocks theme={theme} palette={palette} font={font} />
        </Grid>
      </Grid>
    </>
  );
};

export default UI;
