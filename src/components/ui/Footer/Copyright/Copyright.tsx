import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
export const Copyright = () => {
    return (
        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item xs={6}>
                <Typography variant={'caption'}>
                    Copyright 2019 SA LA NACION | Todos los derechos reservados
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Grid container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Grid item xs={2}>
                        <Image
                            src="/assets/captcha/gda-footerlogo.png"
                            alt="imagen gda logo"
                            width={60}
                            height={30}
                        />

                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant={'caption'}>
                            Miembro de GDA. Grupo de Diarios América
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'flex-end' }}>
                        <Image
                            src="/assets/captcha/datafiscal.jpg"
                            alt="imagen qr afip formulario 960"
                            width={50}
                            height={60}
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
