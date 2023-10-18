import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MediaControlCard from "./MediaControlCard";
import Grid from "@mui/material/Grid";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "24px",
        p: 2,
        mb: 5,
        border: "1px solid",
        borderColor: "border",
        backgroundColor: "background.default",
      }}
    >
      <Grid sx={{ display: "flex", mb: 5 }}>
        <Typography variant="h4">Cards </Typography>
      </Grid>
       
      <Grid
        container
        maxWidth="lg"
        column={12}
        justifyContent="center"
        direction="row"
        sx={{ display: "flex" }}
      >
        <Grid item xs={12} md={6}>
          <Card item sx={{ width: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <MediaControlCard />
        </Grid>
      </Grid>
    </Card>
  );
}
