import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerMenu from './drawer';
import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

export default function Navbar() {
  const[opens,setopen]=useState(false)
  const [value, setvalue] = useState(0)
    const theme = useTheme();
     const ismatch = useMediaQuery(theme.breakpoints.down('sm')
        )

        const menuBottonHandler = ()=>{
          setopen(true)
        }
        const pages = ["Home","AboutUs","ContactUs","Login"]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar variant='' position="static">
        <Toolbar>
            {ismatch ?<>
            <p>now data</p>
              <DrawerMenu />
        </>:
        <>
        <Tabs value={value} onChange={(e,value)=>{setvalue(value)}} textColor='inherit' indicatorColor='secondary'>
 
          {pages.map((page,index)=>{
           return  <Tab key={index} label={page} />
          })}
        </Tabs>
        <Button sx={{margin:'auto'}} color="inherit">Login</Button>  
        </> }
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
