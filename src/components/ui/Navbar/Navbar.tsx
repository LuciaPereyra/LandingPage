import { Box, Grid } from '@mui/material'
import { ButtonPrimary } from '../../commons/ButtonPrimary'
import Image from 'next/image';
import { SearchAppBar } from './SearchAppBar/SearchAppBar';
import { MenuAppBar } from './MenuAppBar';
import { useState } from 'react';
import { ButtonsNav } from './ButtonsNav/ButtonsNav';


export const Navbar = () => {
    const [search, setSearch] = useState(false);

    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'} spacing={0}>
            <Grid item sx={{ display: 'flex', padding: '0 2em 0 0' }} xs={3} >
                <MenuAppBar />
                <SearchAppBar setSearch={setSearch} />
            </Grid>
            {!search &&
                <Grid item xs={3}>
                    <Image
                        src="/assets/logo/Logo_La_Nación.svg"
                        alt="imagen logo La Nación"
                        width={325}
                        height={80}
                    />
                </Grid>
            }
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }} xs={3}>
                <ButtonsNav />
            </Grid>
        </Grid>
    )
}
