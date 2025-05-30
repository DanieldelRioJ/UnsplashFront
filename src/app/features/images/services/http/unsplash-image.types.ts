/* FILTERS */
export interface UnsplashImageSearchFilter {
    query?: string;
    order_by?: UnsplashImageSearchOrderBy | null;
    content_filter?: UnsplashImageSearchContentFilter | null;
    color?: UnsplashImageSearchColor | null;
    orientation?: UnsplashImageSearchOrientation | null;
}

export type UnsplashImageSearchOrderBy = 'relevant' | 'latest';
export type UnsplashImageSearchContentFilter = 'low' | 'high';
export type UnsplashImageSearchColor =
    | 'black_and_white'
    | 'black'
    | 'white'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'purple'
    | 'magenta'
    | 'green'
    | 'teal'
    | 'blue';
export type UnsplashImageSearchOrientation =
    | 'landscape'
    | 'portrait'
    | 'squarish';

/* RESPONSES */
export interface UnsplashImageSearchResult {
    total: number;
    total_pages: number;
    results: UnsplashImage[];
}

export interface UnsplashImage {
    id: string;
    created_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string | null;
    slug: string;
    user: UnsplashUser;
    current_user_collections: unknown[];
    urls: UnsplashImageUrls;
    links: UnsplashImageLinks;
}

export interface UnsplashUser {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    profile_image: UnsplashUserProfileImage;
    links: UnsplashUserLinks;
}

export interface UnsplashUserProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface UnsplashUserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
}

export interface UnsplashImageUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

export interface UnsplashImageLinks {
    self: string;
    html: string;
    download: string;
}
