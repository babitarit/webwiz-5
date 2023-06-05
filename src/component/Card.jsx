import React from 'react'
import './Card.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';





const Card = () => {
    const [myObject, setMyObject] = React.useState({
        name: "Oggy",
        avatar: "https://i.pinimg.com/originals/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.png",
        designation: "CM",
        review:"The thing that I love the most about the cartoon character oggy is that he loves what he does and he is full of optimism The thing that I love the most about the cartoon character oggy is that he loves what he does and he is full of optimism."
       ,
    

    });
   
  const changeObject =() =>{
    setMyObject({...myObject, name: "Shinchan",
    avatar: "https://wallpapercave.com/wp/wp3062317.jpg",
    designation: "President",
    review:
      "The thing that I love the most about the cartoon character Shinchan is that he loves what he does and he is full of optimism The thing that I love the most about the cartoon character Shinchan is that he loves what he does and he is full of optimism."

      ,});
  }
  const Before =()=>{
    console.log({myObject})
  

  }
  const Next =()=>{
    console.log({changeObject})
    
  }
  

  return (
    <div className='big'>
<h1>our revier</h1>
<img  src ={myObject.avatar} height="100px" className='img' />
<h3>{myObject.name}</h3>
<h4>{myObject.designation}</h4>
<p>{myObject.review}</p>

<Button onClick={Before}>
<NavigateBeforeIcon/>
</Button>
<Button onClick={Next}>
<NavigateNextIcon/>
</Button>
<div>
<button className='btn' onClick={changeObject}>submit</button>
</div>


    </div>
  )
}

export default Card