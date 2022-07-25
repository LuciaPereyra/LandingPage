import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import apis from '../../api/apis'
import { ArticleData, ArticlesDataResponse } from '../../interfaces/dataArticles'
import { Layout } from '../../src/components/layouts'
import { Grid } from '@mui/material'
import { ArticlesGrid } from '../../src/components/ui/ArticlesGrid'

interface Props {
    articles: ArticleData[]
}

const ArticleByTag: FC<Props> = ({ articles }) => {

    const router = useRouter()
    const { tag } = router.query

    const newArticleFilter = (slug: any) => {
        const listFiltered = articles.filter((article, i) => {
            if (!!article.taxonomy.tags.find((tag) => {
                return tag.slug === slug
            })) {
                return article;
            }
        })
        return listFiltered
    }

    return (
        <Layout title={'Tema'}>
            <Grid container gap={2} padding={'2em'} minHeight={'600px'}>
                {newArticleFilter(tag).map((article, i) => {
                    return <ArticlesGrid key={article._id} article={article} />;
                })}
            </Grid>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await apis.get<ArticlesDataResponse>("/articles");
    const articles: ArticleData[] = data.articles

    return {
        props: {
            articles,

        },
    };
};

export default ArticleByTag