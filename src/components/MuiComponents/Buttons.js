import { Button, Typography, Grid, Stack, ButtonGroup } from "@mui/material";

export default function Buttons() {
    return (
      <div>
        <Grid sx={{ display: "flex", mb: 5 }}>
          <Typography variant="h4">Buttons </Typography>
        </Grid>
        <Grid
          container
          maxWidth="lg"
          column={12}
          justifyContent="center"
          direction="row"
          sx={{ display: "flex" }}
        >
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button variant="text">Text</Button>
          </Grid>
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button variant="outlined">Outlined</Button>
          </Grid>
        </Grid>
        <Grid
          container
          maxWidth="lg"
          column={12}
          justifyContent="center"
          sx={{ display: "flex", mt: 5 }}
        >
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button color="secondary">Secondary</Button>
          </Grid>
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button variant="contained" color="success">
              Success
            </Button>
          </Grid>
          <Grid sx={{ p:3 }} item xs={12} md={4}>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          maxWidth="lg"
          column={12}
          justifyContent="center"
          sx={{ display: "flex", mt: 5 }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
}