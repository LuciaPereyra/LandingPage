import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import React, { FC } from 'react'
import { ArticleData } from '../../../../interfaces/dataArticles';

interface Props {
    articles: ArticleData[]
}


export const SlugArticles: FC<Props> = ({ articles }) => {

    let tagsGroup = [{ slug: '', text: '' }]
    articles.map((article) => {
        article.taxonomy.tags.map((tag) => {
            tagsGroup.push(tag)
        })
    })
    let hash: any = {};
    const noRepeatTags = tagsGroup.filter((o: any) => hash[o.slug] ? false : hash[o.slug] = true);
    // console.log(noRepeatTags)

    let tags = [{ count: 0, slug: '', text: '' }]
    noRepeatTags.map((it) => {
        let count = 0
        tagsGroup.map((itemTag) => {
            if (it.slug === itemTag.slug) {
                count += 1
            }
        })
        tags.push({ count, ...it })
    })
    // console.log(tags)
    const getOrderTags = () => {
        const orderTags = tags.sort((o1, o2) => {
            if (o1.count > o2.count) {
                return -1
            } else if (o1.count < o2.count) {
                return 1
            } else {
                return 0
            }
        }).slice(0, 10)
        return orderTags
    }



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5">
                Acumulado Grilla
            </Typography>
            <Grid container gap={2}>
                {getOrderTags().map((item) => {
                    return (
                        <Grid item key={item.slug}>
                            <Link href={`/tema/${item.slug}`}>
                                <a target={"_blank"}>
                                    {item.text}
                                </a>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    )
}
