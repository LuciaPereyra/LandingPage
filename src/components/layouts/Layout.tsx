import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui/Navbar'
import { Footer } from '../ui/Footer/Footer';
import { Divider, Container } from '@mui/material';

interface Props {
    children: JSX.Element | JSX.Element[]
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <Container maxWidth={'lg'} sx={{ padding: '0 0 0 0 !important' }}>
            <Navbar />
            <Divider />
            <Head>
                <title>{title || 'Acumulado'}</title>
                <meta name="author" content="Generated by create next app" />
                <meta name="description" content={`La-Nación-${title}`} />
                <meta name="keywords" content="LaNacion, Noticias, Diario, Argentina" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>{children}</div>
            <Footer />
        </Container>
    )
}
