import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { List ,ListItemButton,ListItemText } from '@mui/material';
const DrawerMenu = ({opens,close}) => {
  const [open,setopen] = useState(false)
  

  const pages = ["Home","AboutUs","ContactUs","Login"]
  return (
    <>
    <Drawer onClose={()=>{setopen(false)}} open={open}>
    <List>
        {pages.map((page,index)=>{
         
         return (<ListItemButton key={index}>
           <ListItemText>
             {page}
           </ListItemText>
         </ListItemButton>)
       
        })}
        </List>
        
    </Drawer>
    
    <Button sx={{marginLeft:'auto'}} variant='contained' onClick={()=>{setopen(!open)}}> Close Drawer</Button>
    </>
  )
}

export default DrawerMenu