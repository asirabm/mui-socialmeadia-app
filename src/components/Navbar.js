//import styled from '@emotion/styled'
import { Camera, FullscreenExit, Notifications } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Box, Toolbar, Typography,icons, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import profilepic from '../images/p1.jpg'
const StyleToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search=styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius,
    width:'40%'
}))


const Icons=styled(Box)(({theme})=>({
 display:'none',
 alignItems:'center',
 gap:'20px',
 [theme.breakpoints.up("sm")]:{
  display:'flex'
 }
}))

const UserBox=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up("sm")]:{
    display:'none'
   }
 }))



function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
       <StyleToolbar>
        <Typography variant='h5' sx={{ display:{xs:'none',sm:'block'}}}>Asir DEV</Typography>
         <Camera sx={{ display:{xs:'block',sm:'none'}}}></Camera>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
             <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30,height:30}} src={profilepic} onClick={(e)=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
          <Avatar sx={{width:30,height:30}} src={profilepic}/>
          <Typography variant='span'>Mohamed Asir</Typography>
        </UserBox>
       </StyleToolbar>

       <Menu
        onClose={e=>setOpen(false)}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar