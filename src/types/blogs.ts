export interface IBlog {
    id: number;
    slug: string;
    title: string;
    blog_description: string;
    createdAt: string,
    updatedAt: string,
    image_path: string;
    status: number;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    author: string;
}

export interface IBlogResponse {
    data: IBlog[],
    current_page: number;
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    next_page_url: string | null,
    path: string,
    per_page: string,
    prev_page_url: string | null,
    to: 4,
    total: 4
}
