import { Box, Grid, Container, Fab } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next'
import apis from '../api/apis'
import { ArticleData, ArticlesDataResponse } from '../interfaces/dataArticles';
import { ButtonPrimary } from '../src/components/commons/ButtonPrimary';

import { Layout } from '../src/components/layouts'
import { ArticlesGrid } from '../src/components/ui/ArticlesGrid';
import { SlugArticles } from '../src/components/ui/SlugArticles';

interface Props {
  articles: ArticleData[];
}

const Home: NextPage<Props> = ({ articles }) => {
  const articlesFilteredSubtype7 = articles.filter((article => article.subtype === "7"));
  return (
    <Layout title='Acumulado'>
      <Container sx={{ padding: '0 0 0 0', marginTop: '2em', backgroundColor: 'lightgray' }} maxWidth={'lg'}>
        <Box sx={{ width: '100%', height: '20vh', backgroundColor: 'lightblue' }}></Box>
      </Container>
      <Container sx={{ padding: '2em' }} maxWidth={'lg'}>
        <Grid sx={{ alignItems: 'center' }} item>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item sm={9}>
              <Grid container>
                <Grid item sm={12} sx={{ paddingBottom: '1em' }}>
                  <SlugArticles articles={articles} />
                </Grid>
                <Grid item sm={12}>
                  <Grid container gap={1}>
                    {articlesFilteredSubtype7.map((article, i) => {
                      return <ArticlesGrid key={article._id} article={article} />;
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3}>
              <Box sx={{ width: '100%', height: '100%', backgroundColor: 'lightblue' }} />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonPrimary variant='outlined'>
              Más notas de acumulado grilla
            </ButtonPrimary>
          </Box>
        </Grid>
      </Container>
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


export default Home