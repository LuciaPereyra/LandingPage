import { Divider, Grid } from '@mui/material'
import Image from 'next/image'
import { BottomNav } from './BottomNav'
import styles from '../Footer/Footer-styles.module.css'
import { Networks } from './Networks'
import { Copyright } from './Copyright'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Grid container justifyContent={'space-between'} alignItems={'center'} spacing={0}>
                <Networks />
                <BottomNav />
                <Copyright />
            </Grid>
        </footer >
    )
}
