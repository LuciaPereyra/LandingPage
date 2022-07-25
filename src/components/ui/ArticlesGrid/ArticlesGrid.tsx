import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { ArticleData } from '../../../../interfaces/dataArticles'

interface Props {
    article: ArticleData,

}

export const ArticlesGrid: FC<Props> = ({ article }) => {
    const mostrarFecha = (fecha: string) => {
        const meses: any = {
            1: "Enero",
            2: "Febrero",
            3: "Marzo",
            4: "Abril",
            5: "Mayo",
            6: "Junio",
            7: "Julio",
            8: "Agosto",
            9: "Septiembre",
            10: "Octubre",
            11: "Noviembre",
            12: "Diciembre"
        };
        const fechaCortada = fecha.slice(0, 10);
        const dia = Number(fechaCortada.slice(8, 10));
        const mes = Number(fechaCortada.slice(5, 7));
        const anio = fechaCortada.slice(0, 4)
        return `${dia} de ${meses[mes]} de ${anio}`
    }
    return (
        <Grid item xs={9} sm={5.5} md={3.5} xl={3.75}>
            <Card sx={{ height: '300px' }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={article.promo_items?.basic?.url}
                    alt=" card with image and description of the article"
                />
                <CardContent sx={{ padding: "0px 0px", justifyContent: 'space-between' }}>
                    <Typography
                        sx={{ margin: "5px 0px" }}
                        variant="h6"
                        component="div"
                    >
                        {article.headlines.basic}
                    </Typography>
                    <Typography
                        sx={{ margin: "5px 0px" }}
                        variant="caption"
                        component="div"
                    >
                        {mostrarFecha(article.display_date)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
