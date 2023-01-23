import React, { useState } from 'react'
import {Box, Button, createMuiTheme} from '@mui/material'
import { createTheme, Stack, ThemeProvider } from '@mui/system'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import Add from './components/Add'

function App(){
    const [mode ,setMode]=useState('light')
    const darkTheam=createMuiTheme({
        palette:{
            mode:mode
        }
    })
    return(
        <ThemeProvider theme={darkTheam}>
            <Box bgcolor='background.default' color='text.primary'>
        <Navbar/>
         <Stack direction={'row'} spacing={2}>
         <Sidebar setMode={setMode} mode={mode}/>
         <Feed/>
        <Rightbar/>
    </Stack>
    <Add/>
     </Box>

        </ThemeProvider>
     
    )
}
export default App