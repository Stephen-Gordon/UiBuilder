import { MenuItem } from "@mui/material";
import { alpha } from "@mui/material";
const ColorList = ({setter, customPalette}) => {
        
            
        let colorList =  customPalette.map((color, i) => {
            return (
                <MenuItem
                    onClick={() => {setter(color)}} 
                    key={i} 
                    sx={{
                        m:1, 
                        border: 0, 
                        borderRadius: '12px',
                        backgroundColor: color,
                        width:'50px', height:'50px', 
                        '&:hover, &.Mui-hovered': {
                            backgroundColor: alpha(color, 0.3)
                        },
                    }} 
                value={color}
            >
               
            </MenuItem>
           ) 
           
        })
        return colorList
        
};

export default ColorList
