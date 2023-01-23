import { Fab, Modal, Tooltip,Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import styled from '@emotion/styled'
import p1 from '../images/p1.jpg'
function Add() {
    const StyleModal =styled(Modal)({
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    })
    const UserBox =styled(Box)({
        display:'flex',
        alignItems:'center',
        gap:10,
        marginBottom:20
    })


    const[open,setOpen]=useState(false)
  return (
    <>
     <Tooltip onClick={(e)=>setOpen(true)} title='Add Post' sx={{position:'fixed',bottom:20,left:{xs:'calc(50% - 25px)',md:30}}}>
        <Fab color='primary' aria-label='Add Post'>
            <AddIcon/>
        </Fab>
     </Tooltip>
     <StyleModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor='background.default' color='text.primary' padding={3} borderRadius={5}>
    <Typography variant='h6' textAlign='center' color='gray'>Create Post</Typography>
    <UserBox>
    <Avatar src={p1} aria-label="recipe" sx={{width:30,height:30}}>A</Avatar>
    <Typography variant='span' fontWeight={500}>Mohamed Asir</Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          variant="standard"
          placeholder="What's on your mind"
          sx={{width:'100%'}}
        />
    <Stack direction='row' gap={1} mt={2} mb={3}>
       <EmojiEmotions color='primary'/>
       <Image color='secondary'/>
       <VideoCameraBack color='sucess'/>
       <PersonAdd color='error'/>
    </Stack>
    <ButtonGroup fullWidth variant='contained' aria-label='outline primary button group'>
       <Button>Post</Button>
       <Button sx={{width:'100px'}}>
         <DateRange/>
         </Button>
    </ButtonGroup>
  </Box>
</StyleModal>

    </>
  )
}

export default Add