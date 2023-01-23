import React from 'react'
import sence from '../images/u1.jpg'
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import {Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Checkbox } from '@mui/material'

function Post({ob}) {
   
  return (
    <>
       <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar src={ob.dp}  aria-label="recipe">
        
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={ob.name}
        subheader={ob.date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={ob.im}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {ob.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
      <Checkbox icon={<BookmarkBorder />}
        checkedIcon={<Bookmark sx={{color:'black'}} />}
      />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
    </Card>

    
    </>
  )
}

export default Post