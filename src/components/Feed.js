import { Box} from '@mui/material'
import React from 'react'
import Post from './Post'
import Profilepic from '../images/p1.jpg'
import u1 from '../images/u1.jpg'
import u3 from '../images/u3.jpeg'
import u2 from '../images/u2.jpg'
import u4 from '../images/u4.jpg'
import u5 from '../images/u5.jpg'

function Feed() {
   const obj1={
    name:'Mohamed Asir',
    dp:Profilepic,
    im:u1,
    caption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
    date:'September 14, 2022' 
  }
  const obj2={
    name:'Mohamed Asir',
    dp:Profilepic,
    im:u2,
    caption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
    date:'September 14, 2022' 
  }
  const obj3={
    name:'Mohamed Asir',
    dp:Profilepic,
    im:u3,
    caption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
    date:'September 14, 2022' 
  }
  const obj4={
    name:'Mohamed Asir',
    dp:Profilepic,
    im:u4,
    caption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
    date:'September 14, 2022' 
  }
  const obj5={
    name:'Mohamed Asir',
    dp:Profilepic,
    im:u5,
    caption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.',
    date:'September 14, 2022' 
  }


  return (
    <Box flex={4} p={2}>
    <Post ob={obj1}/>
    <Post ob={obj2}/>
    <Post ob={obj3}/>
    <Post ob={obj4}/>
    <Post ob={obj5}/>
    </Box>
  )
}

export default Feed