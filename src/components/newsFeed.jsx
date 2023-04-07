import { Box,List, Button, ListItem, ListItemButton, ListItemText, Modal, Stack, Typography, Collapse, ListItemIcon, createTheme, styled } from '@mui/material'
import React, { useState } from 'react'
const ListDataArray = ['honey','haider',"ali","hashim"]
const ListDataArray2 = ['honey','haider',"ali","hashim"]
const NewsFeed = () => {
    const [showModal,setShowModal]=useState(false)
    
    const [showModals,setShowModals]=useState(false)

    const StyledText = styled(Typography)({
        color:'rebeccapurple',
        backgroundColor:'white',
        fontFamily:'fantasy'
    })
    
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
       <Box sx={{display:{sm:'block',xs:'none'}}} flex={1} bgcolor={'rebeccapurple'} >
         {ListDataArray.map((item)=>{
       return(
       
       <ListItem>{item}</ListItem>
            
        )})}
        </Box>
      
       <Box flex={4} bgcolor={'green'}>
        <Typography  component={'h5'}>News Feed</Typography>
        <StyledText>Now this is styled component</StyledText>
        <Box>
            <Button color='secondary' variant='contained' onClick={()=>{setShowModal(true)}}>Modal Button</Button>
            <Modal open={showModal} onClose={()=>{setShowModal(false)}}>
                <Box sx={{position:'absolute',top:'50%',left:'50%'}}>
                <Typography>modal inner Text</Typography>
                
                <Button variant='contained' onClick={()=>{
                    setShowModal(false)
                }}>Modal Close inner button</Button>

                </Box>
            </Modal>
            
        </Box>
       </Box>
       <Box flex={1} bgcolor='skyblue'>
        <List>
            <ListItemButton  onClick={()=>{setShowModals(true)}}>
                <ListItemIcon>
                    {">"}
                
                <ListItemText>
                    Click to Collaps
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        <Collapse in={showModals}>
        <List>
            {ListDataArray2.map((item)=>{
                return(
                    <ListItem>
                <ListItemButton divider onClick={()=>{setShowModals(false)}}>
                    <ListItemText >{item}</ListItemText>
                </ListItemButton>
            </ListItem>
                )
            })}
            
        </List>
        </Collapse>
        </List>
       </Box>
    </Stack>
  )
}

export  const theme = createTheme({palette:{
   secondary:{main:'#F93910'}

}}) 

export default NewsFeed