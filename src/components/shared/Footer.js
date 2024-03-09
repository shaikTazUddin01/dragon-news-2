import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { IconButton, Stack } from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {
            route: 'Home',
            pathname: '/'
        },
        {
            route: 'Pages',
            pathname: '/pages'
        },
        {
            route: 'Category',
            pathname: '/category'
        },
        {
            route: 'News',
            pathname: '/news'
        },
        {
            route: 'About',
            pathname: '/about'
        },
        {
            route: 'Contact',
            pathname: '/contact'
        }
    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container className='text-center'>
                <Box
                    sx={{
                        "& svg": {
                            color: "white",
                            // borderRadius:"100%"
                        }
                    }}
                 
                 >
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                        {navItems.map((item) => (
                           <Link key={item} href={item?.pathname} >
                               <Button className='text-white '>{item?.route}</Button>
                           </Link>
                        ))}
                    </Box>
<Box>
    <Typography className='text-white'>
       All CopyRight React By @2024 shaik taz uddin
    </Typography>
</Box>
            </Container>
        </Box>
    );
};

export default Footer;