import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import o1 from '../images/o1.jpeg'
import o2 from '../images/o2.jpeg'
import o3 from '../images/o3.jpeg'
import o4 from '../images/o4.jpeg'
import o5 from '../images/o5.jpeg'
import o6 from '../images/o6.jpeg'
import u1 from '../images/u1.jpg'
import u2 from '../images/u2.jpg'
import u3 from '../images/u3.jpeg'
import u4 from '../images/u4.jpg'


function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display:{xs:'none',sm:'block'}}}>
       <Box position='fixed' width={300}>
          <Typography variant='h6' fontWeight='200'>Online Friends</Typography>
          <AvatarGroup max={5}>
      <Avatar alt="Remy Sharp" src={o1} />
      <Avatar alt="Travis Howard" src={o2} />
      <Avatar alt="Cindy Baker" src={o3}  />
      <Avatar alt="Agnes Walker" src={o4} />
      <Avatar alt="Trevor Henderson" src={o5}  />
      <Avatar alt="Trevor Henderson" src={o6}  />
    </AvatarGroup>
       <Typography variant='h6' fontWeight='200' mt={2} mb={2}>Latest Photos</Typography>
       <ImageList cols={3} rowHeight={110} gao={5}>
         <ImageListItem>
            <img src={u1} alt=''/>
         </ImageListItem>
         <ImageListItem>
            <img src={o1} alt=''/>
         </ImageListItem>
         <ImageListItem>
            <img src={o4} alt=''/>
         </ImageListItem>
       </ImageList>
       <Typography variant='h6' mt={2} mb={2} fontWeight='200'>Recent Conversation</Typography>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={o1} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={o2} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={o3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

       </Box>
    </Box>
  )
}

export default Rightbar