
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Grid, Card } from "@mui/material";
export default function CheckboxLabels() {
  return (
    <>
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
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid sx={{ display: "flex", mb: 5 }}>
            <Typography variant="h4">Checkbox</Typography>
          </Grid>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />

          <div>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color="secondary" />
            <Checkbox defaultChecked color="success" />
            <Checkbox defaultChecked color="default" />
          </div>
        </div>
      </Card>
    </>
  );
}

