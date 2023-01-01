import Head from "next/head";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const ErrorEl =()=>(
    <>
    <Head>
      <title>404  - Happy New Year from Chandan Raj</title>             
    </Head>
    <Stack sx={{height:"100vh"}} spacing={1} justifyContent='center' alignItems="center">
        <Image 
            src='/not-found.gif'
            alt='not-found'
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/blur.jpg"
        />
        <Typography variant="h1" color="error" display={{xs:'none',md:'block'}}>
            Page Not Found | 404
        </Typography>
        <Typography variant="h6" color="error" className='animate__animated animate__pulse animate__infinite' display={{xs:'block',md:'none'}}>
            Page Not Found | 404
        </Typography>
        <Box>
            <Link href="/" passHref>
                <Button
                variant="outlined"
                color="secondary"
                sx={{py: 1, px: 2, bgcolor: 'white'}}
                >
                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <HomeOutlinedIcon />
                    <Typography>
                        Go back to home
                    </Typography>                    
                </Stack>                
                </Button>
            </Link>
        </Box>
    </Stack>
    </>
);
export default ErrorEl;