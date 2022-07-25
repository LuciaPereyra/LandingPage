export interface ArticlesDataResponse {
    count?: number;
    next?: string;
    previous?: string;
    articles: ArticleData[]
}

export interface ArticleData {
    _id: string,
    display_date: string,
    headlines: { basic: string },
    promo_items: { basic: { url: string | undefined } },
    subtype: string,
    taxonomy: { tags: [{ slug: string, text: string }] },
    website_url: string
}