import { useState } from "react";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";

const PlaySound = () => {
  const sound = document.getElementById("audioplay");
  sound.play();
}

const Index = () =>{
  
  const [show,setShow] = useState('block'); 
  const [mainShow,mainSetShow] = useState('none'); 
  const handleShow = () =>{
    setShow("none");
    mainSetShow("block");
  }
  return(
    <>
    <Head>
        <title>Happy New Year from Chandan Raj</title>             
    </Head>
    <Stack sx={{height:"100vh"}} spacing={1} justifyContent='center' alignItems="center">
      <Box sx={{display:show,cursor:'pointer'}} onClick={()=>(handleShow(),PlaySound())}>
        <Image 
            src='/click-here.gif'
            alt='click-here'
            width={300}
            height={300} 
            placeholder="blur"
            blurDataURL="/blur.jpg"                      
        />
      </Box>
      <Box sx={{display:mainShow}} >
        <audio id="audioplay" src="fireworks.mp3" autostart="true" loop></audio>
        <Stack spacing={1} justifyContent='center' alignItems="center">
          <Box sx={{position:'absolute',top:0,left:0}}>
            <Image 
                src='/baloon.gif'
                alt='baloon'
                width={150}
                height={150}           
            />
          </Box>
          <Box sx={{position:'absolute',top:0,right:0}}>
            <Image 
                src='/baloon.gif'
                alt='baloon'
                width={150}
                height={150}           
            />
          </Box>
          <Box sx={{position:'absolute',bottom:0,left:0}}>
            <Image 
                src='/baloon.gif'
                alt='baloon'
                width={80}
                height={80}           
            />
          </Box>
          <Box sx={{position:'absolute',bottom:0,right:0}}>
            <Image 
                src='/baloon.gif'
                alt='baloon'
                width={100}
                height={100}           
            />
          </Box>
          <Image 
              src='/happy-new-year.gif'
              alt='happy-new-year'
              width={300}
              height={300}           
          />
          <Typography variant="h1" color="error" display={{xs:'none',md:'block'}} className='animate__animated animate__bounceInDown'>
              Happy New Year
          </Typography>
          <Typography variant="h5" color="error" className='animate__animated animate__bounceInDown' display={{xs:'block',md:'none'}}>
              Happy New Year
          </Typography>
          <Typography variant="caption" color="secondary" className='animate__animated animate__pulse animate__infinite' >
              Best Wishes from Chandan Raj
          </Typography>
        </Stack>
      </Box>
    </Stack>
    </>
  );
}
export default Index;