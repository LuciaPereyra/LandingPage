import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export const Networks = () => {
    return (
        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={2.5}><FacebookIcon /></Grid>
                    <Grid item xs={2.5}><TwitterIcon /></Grid>
                    <Grid item xs={2.5}><InstagramIcon /></Grid>
                    <Grid item xs={2.5}><RssFeedIcon /></Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Image
                    src="/assets/logo/Logo_La_Nación.svg"
                    alt="imagen logo La Nación"
                    width={225}
                    height={80}
                />
            </Grid>
            <Grid item xs={2.75}>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                    <Grid item>
                        <Button sx={{ padding: '0' }}>
                            <Image
                                src="/assets/stores/google-play.png"
                                alt="imagen google play store"
                                width={120}
                                height={40}
                            />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button sx={{ padding: '0' }}>
                            <Image
                                src="/assets/stores/app-store.svg"
                                alt="imagen app store"
                                width={120}
                                height={40}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
