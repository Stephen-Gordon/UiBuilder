import { Select } from "@mui/material"
import { alpha, styled } from '@mui/material/styles';
const CustomSelect = styled(Select)(({ primary }) => ({
    
    backgroundColor: '#f7f7f7',
    color: primary.main,
   
    '& 	. MuiList-root': {
        border: '1px solid',
        borderRadius: '12px',
        backgroundColor: '#f7f7f7',
        width: '300px',
        borderColor: 'border',
    },
    '& 	.MuiMenu-paper': {
        border: '1px solid',
        borderRadius: '12px',
        backgroundColor: '#f7f7f7',  
        width: '300px',
        borderColor: 'border',
    },
  
    '& .MuiMenu-root': {
        width: '300px',  
        '& 	.MuiMenu-list': {
            width: '300px',  
            display: 'flex',
            flexFlow: "row wrap",
            justifyContent: 'center',
            backgroundColor: '#f7f7f7',
        },
        '& 	.MuiMenu-paper': {
            border: '1px solid',
            borderRadius: '12px',
            backgroundColor: '#f7f7f7',
            width: '300px',
            borderColor: 'border',
        },
    }, 
   
  }));



export default CustomSelect

