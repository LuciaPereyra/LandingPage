import { Grid, List, ListItem, Container, Typography, Divider } from '@mui/material';
import Link from 'next/link';

export const BottomNav = () => {

    const dataFooter = {
        enlaces: ['Mapa del sitio', 'Ayuda', 'Términos y condiciones', '¿Cómo anunciar?', 'Suscribirse al diario impreso'],
        captcha: ['Condiciones', 'Privacidad']
    }

    return (
        <Container sx={{ padding: '0 0 0 0 !important' }}>
            <Divider />
            <Grid container >
                <Grid item xs={6}>
                    <List sx={{ display: 'flex', flexDirection: 'row' }}>
                        {dataFooter.enlaces.map((item: string) => {
                            return (
                                <ListItem key={item} disableGutters={true} disablePadding={false} style={{ color: 'blue', whiteSpace: 'nowrap', fontSize: 13, padding: '0 10px 0 0', display: 'flex', justifyContent: 'center' }}>
                                    <Link href={''}>
                                        <a>{item}</a>
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                <Grid item xs={6} sx={{ justifyContent: 'space-between' }}>
                    <Grid container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Grid item sx={{ paddingRight: 2 }}><Typography variant={'caption'}>{'Protegido por re CAPTCHA:'}</Typography> </Grid>
                        <Grid item>
                            <List sx={{ display: 'flex', flexDirection: 'row' }}>
                                {dataFooter.captcha.map((item: string) => {
                                    return (
                                        <ListItem key={item} disableGutters={true} disablePadding={false} style={{ color: 'blue', whiteSpace: 'nowrap', fontSize: 13, padding: '0 10px 0 0', display: 'flex', justifyContent: 'center' }}>
                                            <Link href={''}>
                                                <a>{item}</a>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >

        </Container>
    )
}
