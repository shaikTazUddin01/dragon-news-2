import React from 'react';
import HeaderImg from "@/assets/dragon.png"
import { Box, Container, Typography } from '@mui/material';

import Image from 'next/image';

const Header = () => {
    return (
        <Box>
            <Container>
                <Box className="text-center py-5">
                    <Image src={HeaderImg} alt='logo' height={500} width={500} className='mx-auto' />
                    <Typography>
                        Journalism Without Fear Or Favourf
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;