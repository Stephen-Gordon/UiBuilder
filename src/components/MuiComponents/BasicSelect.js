import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography, Grid } from "@mui/material";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid sx={{ display: "flex", mb: 5 }}>
        <Typography variant="h4">Select</Typography>
      </Grid>
      <Box sx={{ minWidth: 120 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            sx={{
              border: "1px solid",
              borderColor: "border",
              width: 300,
              "& .MuiList-root-MuiMenu-list": {
                display: "grid",
                backgroundColor: "background.default",
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
