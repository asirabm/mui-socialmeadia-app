import { AccountBox, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Sidebar({setMode,mode}) {
  return (
    <Box flex={1} p={2} sx={{ display:{xs:'none',sm:'block'},marginRight:10}}>

       <Box position='fixed'>
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode==='light'?'dark':'light')}/>
            </ListItemButton>
          </ListItem>
  </List>

       </Box>
    </Box>
  )
}

export default Sidebar