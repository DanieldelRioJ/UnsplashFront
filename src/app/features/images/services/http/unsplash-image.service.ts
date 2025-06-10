import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    UnsplashImageDetailed,
    UnsplashImageSearchFilter,
    UnsplashImageSearchResult,
} from './unsplash-image.types';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { buildHttpParams } from '@shared/utils/build-http-param.util';

@Injectable({
    providedIn: 'root',
})
export class UnsplashImageService {
    constructor(private readonly _httpClient: HttpClient) {}

    searchImages(
        filter: UnsplashImageSearchFilter,
        page: number = 0,
        size: number = 10
    ): Observable<UnsplashImageSearchResult> {
        // TODO agora http params ten constructor con obxecto de fonte, non sei que limitación ten, dígoo por non usar un método propio
        const params = buildHttpParams({
            ...filter,
            page: page,
            per_page: size,
        });
        return this._httpClient.get<UnsplashImageSearchResult>(
            `${environment.api_url}search/photos`,
            {
                params,
            }
        );
    }

    getImage(id: string): Observable<UnsplashImageDetailed> {
        return this._httpClient.get<UnsplashImageDetailed>(
            `${environment.api_url}photos/${id}`
        );
        // TODO isto aqui sobra agora, non?
        return of<UnsplashImageDetailed>({
            id: 'F45e67MXVj8',
            slug: 'red-and-white-coca-cola-can-close-up-photography-F45e67MXVj8',
            alternative_slugs: {
                en: 'red-and-white-coca-cola-can-close-up-photography-F45e67MXVj8',
                es: 'coca-cola-roja-y-blanca-puede-fotografiar-de-cerca-F45e67MXVj8',
                ja: '赤と白のコカコーラ缶クローズアップ写真-F45e67MXVj8',
                fr: 'rouge-et-blanc-coca-cola-peut-photographie-en-gros-plan-F45e67MXVj8',
                it: 'rosso-e-bianco-coca-cola-puo-fotografia-ravvicinata-F45e67MXVj8',
                ko: '빨간색과-흰색-코카콜라-캔-클로즈업-사진-F45e67MXVj8',
                de: 'rot-weisse-coca-cola-dose-nahaufnahmen-F45e67MXVj8',
                pt: 'vermelho-e-branco-coca-cola-pode-close-up-fotografia-F45e67MXVj8',
            },
            created_at: '2019-07-07T16:57:57Z',
            updated_at: '2025-05-30T09:32:57Z',
            promoted_at: null,
            width: 3935,
            height: 3150,
            color: '#260c0c',
            blur_hash: 'L12FDOso0xNa-WjZEKW=I.R*xa$+',
            description: '#cocacola\n',
            alt_description: 'red and white Coca-cola can close-up photography',
            breadcrumbs: [],
            urls: {
                raw: 'https://images.unsplash.com/photo-1562518548-f7a3369abd22?ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8&ixlib=rb-4.1.0',
                full: 'https://images.unsplash.com/photo-1562518548-f7a3369abd22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8&ixlib=rb-4.1.0&q=85',
                regular:
                    'https://images.unsplash.com/photo-1562518548-f7a3369abd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8&ixlib=rb-4.1.0&q=80&w=1080',
                small: 'https://images.unsplash.com/photo-1562518548-f7a3369abd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8&ixlib=rb-4.1.0&q=80&w=400',
                thumb: 'https://images.unsplash.com/photo-1562518548-f7a3369abd22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8&ixlib=rb-4.1.0&q=80&w=200',
                small_s3:
                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1562518548-f7a3369abd22',
            },
            links: {
                self: 'https://api.unsplash.com/photos/red-and-white-coca-cola-can-close-up-photography-F45e67MXVj8',
                html: 'https://unsplash.com/photos/red-and-white-coca-cola-can-close-up-photography-F45e67MXVj8',
                download:
                    'https://unsplash.com/photos/F45e67MXVj8/download?ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8',
                download_location:
                    'https://api.unsplash.com/photos/F45e67MXVj8/download?ixid=M3w3NTU2MDh8MHwxfGFsbHx8fHx8fHx8fDE3NDg2MTUxNzB8',
            },
            likes: 77,
            liked_by_user: false,
            current_user_collections: [],
            sponsorship: null,
            topic_submissions: {
                'food-drink': {
                    status: 'approved',
                    approved_on: '2020-04-06T14:20:21Z',
                },
            },
            asset_type: 'photo',
            user: {
                id: '_V5uIey0CDE',
                updated_at: '2024-10-10T21:39:02Z',
                username: 'kafgaf',
                name: 'Kimiya Oveisi',
                first_name: 'Kimiya',
                last_name: 'Oveisi',
                twitter_username: null,
                portfolio_url: null,
                bio: 'Photographer | retoucher',
                location: 'iran',
                links: {
                    self: 'https://api.unsplash.com/users/kafgaf',
                    html: 'https://unsplash.com/@kafgaf',
                    photos: 'https://api.unsplash.com/users/kafgaf/photos',
                    likes: 'https://api.unsplash.com/users/kafgaf/likes',
                    portfolio:
                        'https://api.unsplash.com/users/kafgaf/portfolio',
                    following:
                        'https://api.unsplash.com/users/kafgaf/following',
                    followers:
                        'https://api.unsplash.com/users/kafgaf/followers',
                },
                profile_image: {
                    small: 'https://images.unsplash.com/profile-1562518978507-2b637569756b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                    medium: 'https://images.unsplash.com/profile-1562518978507-2b637569756b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                    large: 'https://images.unsplash.com/profile-1562518978507-2b637569756b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                },
                instagram_username: 'Kimiyaoveisi',
                total_collections: 2,
                total_likes: 6,
                total_photos: 31,
                total_promoted_photos: 2,
                total_illustrations: 0,
                total_promoted_illustrations: 0,
                accepted_tos: true,
                for_hire: false,
                social: {
                    instagram_username: 'Kimiyaoveisi',
                    portfolio_url: null,
                    twitter_username: null,
                    paypal_email: null,
                },
            },
            exif: {
                make: 'Canon',
                model: 'Canon EOS 600D',
                name: 'Canon, EOS 600D',
                exposure_time: null,
                aperture: null,
                focal_length: null,
                iso: null,
            },
            location: {
                name: null,
                city: null,
                country: null,
                position: {
                    latitude: null,
                    longitude: null,
                },
            },
            meta: {
                index: true,
            },
            public_domain: false,
            tags: [
                {
                    type: 'search',
                    title: 'food and drink',
                },
                {
                    type: 'search',
                    title: 'cocacola',
                },
                {
                    type: 'search',
                    title: 'black',
                },
                {
                    type: 'search',
                    title: 'drink',
                },
                {
                    type: 'search',
                    title: 'beverage',
                },
                {
                    type: 'search',
                    title: 'soda',
                },
                {
                    type: 'search',
                    title: 'wristwatch',
                },
                {
                    type: 'search',
                    title: 'can',
                },
                {
                    type: 'search',
                    title: 'coke',
                },
                {
                    type: 'search',
                    title: 'tin',
                },
                {
                    type: 'search',
                    title: 'coca',
                },
            ],
            views: 1093155,
            downloads: 5517,
            topics: [
                {
                    id: 'xjPR4hlkBGA',
                    title: 'Food & Drink',
                    slug: 'food-drink',
                    visibility: 'visible',
                },
            ],
            related_collections: {
                total: 3,
                type: 'related',
                results: [
                    {
                        id: '4457948',
                        title: 'coke',
                        description: null,
                        published_at: '2019-03-14T14:02:38Z',
                        last_collected_at: '2025-03-27T19:57:46Z',
                        updated_at: '2025-03-27T19:57:46Z',
                        featured: false,
                        total_photos: 232,
                        private: false,
                        share_key: '11ef6bcfdfdba2ac826374f9586424fc',
                        links: {
                            self: 'https://api.unsplash.com/collections/4457948',
                            html: 'https://unsplash.com/collections/4457948/coke',
                            photos: 'https://api.unsplash.com/collections/4457948/photos',
                            related:
                                'https://api.unsplash.com/collections/4457948/related',
                        },
                        user: {
                            id: 'udt0F6cA2bE',
                            updated_at: '2024-09-29T00:42:37Z',
                            username: 'lireid',
                            name: 'Lisha Reid',
                            first_name: 'Lisha',
                            last_name: 'Reid',
                            twitter_username: null,
                            portfolio_url: null,
                            bio: null,
                            location: 'Atlanta, Ga',
                            links: {
                                self: 'https://api.unsplash.com/users/lireid',
                                html: 'https://unsplash.com/@lireid',
                                photos: 'https://api.unsplash.com/users/lireid/photos',
                                likes: 'https://api.unsplash.com/users/lireid/likes',
                                portfolio:
                                    'https://api.unsplash.com/users/lireid/portfolio',
                                following:
                                    'https://api.unsplash.com/users/lireid/following',
                                followers:
                                    'https://api.unsplash.com/users/lireid/followers',
                            },
                            profile_image: {
                                small: 'https://images.unsplash.com/profile-1487019209897-814bcfdbc974?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                                medium: 'https://images.unsplash.com/profile-1487019209897-814bcfdbc974?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                                large: 'https://images.unsplash.com/profile-1487019209897-814bcfdbc974?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                            },
                            instagram_username: 'queenofthenight20',
                            total_collections: 109,
                            total_likes: 3894,
                            total_photos: 0,
                            total_promoted_photos: 0,
                            total_illustrations: 0,
                            total_promoted_illustrations: 0,
                            accepted_tos: false,
                            for_hire: false,
                            social: {
                                instagram_username: 'queenofthenight20',
                                portfolio_url: null,
                                twitter_username: null,
                                paypal_email: null,
                            },
                        },
                        cover_photo: {
                            id: 'TS_grTJRcwA',
                            slug: 'macbook-air-on-table-near-christmas-tree-TS_grTJRcwA',
                            alternative_slugs: {
                                en: 'macbook-air-on-table-near-christmas-tree-TS_grTJRcwA',
                                es: 'macbook-air-en-la-mesa-cerca-del-arbol-de-navidad-TS_grTJRcwA',
                                ja: 'クリスマスツリーの近くのテーブルの上のmacbook-air-TS_grTJRcwA',
                                fr: 'macbook-air-sur-la-table-pres-du-sapin-de-noel-TS_grTJRcwA',
                                it: 'macbook-air-sul-tavolo-vicino-allalbero-di-natale-TS_grTJRcwA',
                                ko: '크리스마스-트리-근처-테이블에-맥북-공기-TS_grTJRcwA',
                                de: 'macbook-air-auf-dem-tisch-in-der-nahe-des-weihnachtsbaums-TS_grTJRcwA',
                                pt: 'macbook-ar-na-mesa-perto-da-arvore-de-natal-TS_grTJRcwA',
                            },
                            created_at: '2020-12-02T13:19:25Z',
                            updated_at: '2025-05-30T10:03:44Z',
                            promoted_at: null,
                            width: 3799,
                            height: 5698,
                            color: '#260c0c',
                            blur_hash: 'L8Bf31R:0e,-Q-xYEhxaRNM_NykE',
                            description: null,
                            alt_description:
                                'macbook air on table near christmas tree',
                            breadcrumbs: [],
                            urls: {
                                raw: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0',
                                full: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                regular:
                                    'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                small: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                thumb: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                small_s3:
                                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1606914901970-8b9740394111',
                            },
                            links: {
                                self: 'https://api.unsplash.com/photos/macbook-air-on-table-near-christmas-tree-TS_grTJRcwA',
                                html: 'https://unsplash.com/photos/macbook-air-on-table-near-christmas-tree-TS_grTJRcwA',
                                download:
                                    'https://unsplash.com/photos/TS_grTJRcwA/download',
                                download_location:
                                    'https://api.unsplash.com/photos/TS_grTJRcwA/download',
                            },
                            likes: 110,
                            liked_by_user: false,
                            current_user_collections: [],
                            sponsorship: null,
                            topic_submissions: {},
                            asset_type: 'photo',
                            user: {
                                id: 'YoSeY2056lc',
                                updated_at: '2025-04-19T12:07:53Z',
                                username: 'alsyshka',
                                name: 'Alsu Vershinina',
                                first_name: 'Alsu',
                                last_name: 'Vershinina',
                                twitter_username: null,
                                portfolio_url: 'https://instagram.com/alsyvert',
                                bio: null,
                                location: 'Saint-Petersburg',
                                links: {
                                    self: 'https://api.unsplash.com/users/alsyshka',
                                    html: 'https://unsplash.com/@alsyshka',
                                    photos: 'https://api.unsplash.com/users/alsyshka/photos',
                                    likes: 'https://api.unsplash.com/users/alsyshka/likes',
                                    portfolio:
                                        'https://api.unsplash.com/users/alsyshka/portfolio',
                                },
                                profile_image: {
                                    small: 'https://images.unsplash.com/profile-1645096154755-572f2e55e140?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                                    medium: 'https://images.unsplash.com/profile-1645096154755-572f2e55e140?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                                    large: 'https://images.unsplash.com/profile-1645096154755-572f2e55e140?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                                },
                                instagram_username: 'Alsyvert',
                                total_collections: 9,
                                total_likes: 21,
                                total_photos: 223,
                                total_promoted_photos: 47,
                                total_illustrations: 0,
                                total_promoted_illustrations: 0,
                                accepted_tos: true,
                                for_hire: true,
                                social: {
                                    instagram_username: 'Alsyvert',
                                    portfolio_url:
                                        'https://instagram.com/alsyvert',
                                    twitter_username: null,
                                    paypal_email: null,
                                },
                            },
                        },
                        preview_photos: [
                            {
                                id: 'TS_grTJRcwA',
                                slug: 'macbook-air-on-table-near-christmas-tree-TS_grTJRcwA',
                                created_at: '2020-12-02T13:19:25Z',
                                updated_at: '2025-05-30T10:03:44Z',
                                blur_hash: 'L8Bf31R:0e,-Q-xYEhxaRNM_NykE',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1606914901970-8b9740394111?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1606914901970-8b9740394111',
                                },
                            },
                            {
                                id: 'Yi_ntljEuz0',
                                slug: 'red-and-white-coca-cola-vending-machine-Yi_ntljEuz0',
                                created_at: '2020-07-25T00:38:34Z',
                                updated_at: '2025-05-30T12:57:43Z',
                                blur_hash: 'LFCOzi9XEz}aTyR4#:TJELn%xuI:',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1595637455710-2f138dcb01a6?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1595637455710-2f138dcb01a6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1595637455710-2f138dcb01a6?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1595637455710-2f138dcb01a6?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1595637455710-2f138dcb01a6?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1595637455710-2f138dcb01a6',
                                },
                            },
                            {
                                id: 'SyArTS85OKA',
                                slug: 'woman-siting-on-focus-photography-SyArTS85OKA',
                                created_at: '2019-10-13T17:28:13Z',
                                updated_at: '2025-05-30T12:39:38Z',
                                blur_hash: 'LUG9Hf%h-;IU_No#ofV@IURPIUs:',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1570987656466-d3945eb0629b?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1570987656466-d3945eb0629b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1570987656466-d3945eb0629b?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1570987656466-d3945eb0629b?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1570987656466-d3945eb0629b?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1570987656466-d3945eb0629b',
                                },
                            },
                            {
                                id: '0bWUNgYraHA',
                                slug: 'woman-wearing-white-coca-cola-shirt-and-blue-distressed-denim-bottoms-0bWUNgYraHA',
                                created_at: '2018-12-27T16:33:16Z',
                                updated_at: '2025-05-30T12:26:02Z',
                                blur_hash: 'LDKAsA_MMJIA}XWB?aozx]D*#SMy',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1545928365-5da111f1bb2d?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1545928365-5da111f1bb2d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1545928365-5da111f1bb2d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1545928365-5da111f1bb2d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1545928365-5da111f1bb2d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1545928365-5da111f1bb2d',
                                },
                            },
                        ],
                    },
                    {
                        id: '1350440',
                        title: 'Coca-Cola',
                        description: null,
                        published_at: '2017-11-03T00:43:07Z',
                        last_collected_at: '2025-03-27T19:57:54Z',
                        updated_at: '2025-03-27T19:57:54Z',
                        featured: false,
                        total_photos: 37,
                        private: false,
                        share_key: '4ee1ff6c31dc6d9c16276020b520f935',
                        links: {
                            self: 'https://api.unsplash.com/collections/1350440',
                            html: 'https://unsplash.com/collections/1350440/coca-cola',
                            photos: 'https://api.unsplash.com/collections/1350440/photos',
                            related:
                                'https://api.unsplash.com/collections/1350440/related',
                        },
                        user: {
                            id: '01izhd1nFOc',
                            updated_at: '2023-12-04T23:07:19Z',
                            username: 'wecollect',
                            name: 'We Collect',
                            first_name: 'We',
                            last_name: 'Collect',
                            twitter_username: null,
                            portfolio_url: null,
                            bio: null,
                            location: null,
                            links: {
                                self: 'https://api.unsplash.com/users/wecollect',
                                html: 'https://unsplash.com/@wecollect',
                                photos: 'https://api.unsplash.com/users/wecollect/photos',
                                likes: 'https://api.unsplash.com/users/wecollect/likes',
                                portfolio:
                                    'https://api.unsplash.com/users/wecollect/portfolio',
                                following:
                                    'https://api.unsplash.com/users/wecollect/following',
                                followers:
                                    'https://api.unsplash.com/users/wecollect/followers',
                            },
                            profile_image: {
                                small: 'https://images.unsplash.com/profile-1511725585461-5c5ed5a41ec8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                                medium: 'https://images.unsplash.com/profile-1511725585461-5c5ed5a41ec8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                                large: 'https://images.unsplash.com/profile-1511725585461-5c5ed5a41ec8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                            },
                            instagram_username: null,
                            total_collections: 145,
                            total_likes: 924,
                            total_photos: 0,
                            total_promoted_photos: 0,
                            total_illustrations: 0,
                            total_promoted_illustrations: 0,
                            accepted_tos: false,
                            for_hire: false,
                            social: {
                                instagram_username: null,
                                portfolio_url: null,
                                twitter_username: null,
                                paypal_email: null,
                            },
                        },
                        cover_photo: {
                            id: '3YgVsKtu1yo',
                            slug: 'woman-drinking-coca-cola-bottle-3YgVsKtu1yo',
                            alternative_slugs: {
                                en: 'woman-drinking-coca-cola-bottle-3YgVsKtu1yo',
                                es: 'mujer-bebiendo-botella-de-coca-cola-3YgVsKtu1yo',
                                ja: 'コカコーラのボトルを飲む女性-3YgVsKtu1yo',
                                fr: 'femme-buvant-une-bouteille-de-coca-cola-3YgVsKtu1yo',
                                it: 'donna-che-beve-bottiglia-di-coca-cola-3YgVsKtu1yo',
                                ko: '코카콜라-병을-마시는-여자-3YgVsKtu1yo',
                                de: 'frau-trinkt-coca-cola-flasche-3YgVsKtu1yo',
                                pt: 'mulher-que-bebe-garrafa-de-coca-cola-3YgVsKtu1yo',
                            },
                            created_at: '2019-11-03T22:27:40Z',
                            updated_at: '2025-05-30T09:38:40Z',
                            promoted_at: null,
                            width: 6048,
                            height: 4024,
                            color: '#40260c',
                            blur_hash: 'LCE1~c4:Kd#,%~D*D,WB~oIUt6WV',
                            description: null,
                            alt_description: 'woman drinking Coca Cola bottle',
                            breadcrumbs: [],
                            urls: {
                                raw: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0',
                                full: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                regular:
                                    'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                small: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                thumb: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                small_s3:
                                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1572820024576-5a8637229b79',
                            },
                            links: {
                                self: 'https://api.unsplash.com/photos/woman-drinking-coca-cola-bottle-3YgVsKtu1yo',
                                html: 'https://unsplash.com/photos/woman-drinking-coca-cola-bottle-3YgVsKtu1yo',
                                download:
                                    'https://unsplash.com/photos/3YgVsKtu1yo/download',
                                download_location:
                                    'https://api.unsplash.com/photos/3YgVsKtu1yo/download',
                            },
                            likes: 31,
                            liked_by_user: false,
                            current_user_collections: [],
                            sponsorship: null,
                            topic_submissions: {},
                            asset_type: 'photo',
                            user: {
                                id: 'X_Q46R0vWhc',
                                updated_at: '2025-01-11T21:14:21Z',
                                username: 'srosinger3997',
                                name: 'Samantha Gades',
                                first_name: 'Samantha',
                                last_name: 'Gades',
                                twitter_username: null,
                                portfolio_url:
                                    'https://www.gadesphotography.co',
                                bio: '-- MPLS Wedding Photographer --',
                                location: 'Minneapolis, Mn',
                                links: {
                                    self: 'https://api.unsplash.com/users/srosinger3997',
                                    html: 'https://unsplash.com/@srosinger3997',
                                    photos: 'https://api.unsplash.com/users/srosinger3997/photos',
                                    likes: 'https://api.unsplash.com/users/srosinger3997/likes',
                                    portfolio:
                                        'https://api.unsplash.com/users/srosinger3997/portfolio',
                                    following:
                                        'https://api.unsplash.com/users/srosinger3997/following',
                                    followers:
                                        'https://api.unsplash.com/users/srosinger3997/followers',
                                },
                                profile_image: {
                                    small: 'https://images.unsplash.com/profile-1529637327654-f0da5df23812?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
                                    medium: 'https://images.unsplash.com/profile-1529637327654-f0da5df23812?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
                                    large: 'https://images.unsplash.com/profile-1529637327654-f0da5df23812?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
                                },
                                instagram_username: 'samanthagades',
                                total_collections: 0,
                                total_likes: 9,
                                total_photos: 210,
                                total_promoted_photos: 91,
                                total_illustrations: 0,
                                total_promoted_illustrations: 0,
                                accepted_tos: true,
                                for_hire: true,
                                social: {
                                    instagram_username: 'samanthagades',
                                    portfolio_url:
                                        'https://www.gadesphotography.co',
                                    twitter_username: null,
                                    paypal_email: null,
                                },
                            },
                        },
                        preview_photos: [
                            {
                                id: '3YgVsKtu1yo',
                                slug: 'woman-drinking-coca-cola-bottle-3YgVsKtu1yo',
                                created_at: '2019-11-03T22:27:40Z',
                                updated_at: '2025-05-30T09:38:40Z',
                                blur_hash: 'LCE1~c4:Kd#,%~D*D,WB~oIUt6WV',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1572820024576-5a8637229b79?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1572820024576-5a8637229b79',
                                },
                            },
                            {
                                id: 'FyupFY3vYHM',
                                slug: 'woman-holding-donut-FyupFY3vYHM',
                                created_at: '2019-11-03T21:57:49Z',
                                updated_at: '2025-05-30T09:38:40Z',
                                blur_hash: 'LHFOAK9u0yRj?]nND+NH?HIV%1xt',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1572818199659-4411cddb577d?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1572818199659-4411cddb577d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1572818199659-4411cddb577d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1572818199659-4411cddb577d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1572818199659-4411cddb577d?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1572818199659-4411cddb577d',
                                },
                            },
                            {
                                id: 'O0zuP0zAwjs',
                                slug: 'two-coca-cola-cans-O0zuP0zAwjs',
                                created_at: '2019-10-31T14:48:43Z',
                                updated_at: '2025-05-30T09:38:32Z',
                                blur_hash: 'L767D.I:0|-VABs:-BNa5Qxa-VI:',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1572533229722-6e9b05f82527?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1572533229722-6e9b05f82527?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1572533229722-6e9b05f82527?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1572533229722-6e9b05f82527?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1572533229722-6e9b05f82527?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1572533229722-6e9b05f82527',
                                },
                            },
                            {
                                id: '_NoQ5nCIVbg',
                                slug: 'coca-cola-bottle-_NoQ5nCIVbg',
                                created_at: '2019-10-31T15:45:55Z',
                                updated_at: '2025-05-30T09:38:32Z',
                                blur_hash: 'LFAw9u?vS$8^K5t6%gS3DiIUs:x]',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1572536609493-d9ce0102b738?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1572536609493-d9ce0102b738?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1572536609493-d9ce0102b738?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1572536609493-d9ce0102b738?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1572536609493-d9ce0102b738?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1572536609493-d9ce0102b738',
                                },
                            },
                        ],
                    },
                    {
                        id: '10730977',
                        title: 'STUDIO NA CARIOCA',
                        description: null,
                        published_at: '2020-06-15T14:20:58Z',
                        last_collected_at: '2020-06-17T00:51:19Z',
                        updated_at: '2024-08-13T06:39:27Z',
                        featured: false,
                        total_photos: 6,
                        private: false,
                        share_key: 'd294261d246ad2f85b4d2d9a14d43e7f',
                        links: {
                            self: 'https://api.unsplash.com/collections/10730977',
                            html: 'https://unsplash.com/collections/10730977/studio-na-carioca',
                            photos: 'https://api.unsplash.com/collections/10730977/photos',
                            related:
                                'https://api.unsplash.com/collections/10730977/related',
                        },
                        user: {
                            id: '-DPZy6C-N2s',
                            updated_at: '2021-09-24T14:59:36Z',
                            username: 'valeriaguedes',
                            name: 'Kianda Design',
                            first_name: 'Kianda',
                            last_name: 'Design',
                            twitter_username: null,
                            portfolio_url: null,
                            bio: null,
                            location: null,
                            links: {
                                self: 'https://api.unsplash.com/users/valeriaguedes',
                                html: 'https://unsplash.com/@valeriaguedes',
                                photos: 'https://api.unsplash.com/users/valeriaguedes/photos',
                                likes: 'https://api.unsplash.com/users/valeriaguedes/likes',
                                portfolio:
                                    'https://api.unsplash.com/users/valeriaguedes/portfolio',
                            },
                            profile_image: {
                                small: 'https://images.unsplash.com/profile-1590258620439-43d288e9b41eimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
                                medium: 'https://images.unsplash.com/profile-1590258620439-43d288e9b41eimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
                                large: 'https://images.unsplash.com/profile-1590258620439-43d288e9b41eimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
                            },
                            instagram_username: null,
                            total_collections: 17,
                            total_likes: 329,
                            total_photos: 0,
                            total_promoted_photos: 0,
                            total_illustrations: 0,
                            total_promoted_illustrations: 0,
                            accepted_tos: false,
                            for_hire: false,
                            social: {
                                instagram_username: null,
                                portfolio_url: null,
                                twitter_username: null,
                                paypal_email: null,
                            },
                        },
                        cover_photo: {
                            id: 'nWCmjC7dmdo',
                            slug: 'closeup-photo-of-coca-cola-tin-can-nWCmjC7dmdo',
                            alternative_slugs: {
                                en: 'closeup-photo-of-coca-cola-tin-can-nWCmjC7dmdo',
                                es: 'foto-de-primer-plano-de-la-lata-de-coca-cola-nWCmjC7dmdo',
                                ja: 'コカコーラのブリキ缶のクローズアップ写真-nWCmjC7dmdo',
                                fr: 'photo-en-gros-plan-de-la-canette-de-coca-cola-nWCmjC7dmdo',
                                it: 'foto-ravvicinata-della-lattina-di-coca-cola-nWCmjC7dmdo',
                                ko: '코카콜라-깡통의-근접-촬영-사진-nWCmjC7dmdo',
                                de: 'nahaufnahme-der-coca-cola-blechdose-nWCmjC7dmdo',
                                pt: 'foto-em-closeup-da-lata-de-coca-cola-nWCmjC7dmdo',
                            },
                            created_at: '2017-12-25T05:06:21Z',
                            updated_at: '2025-05-30T09:14:28Z',
                            promoted_at: null,
                            width: 2303,
                            height: 2304,
                            color: '#0c260c',
                            blur_hash: 'LRBMf9~C%2NZozkCjFnjIoIoRjaL',
                            description: null,
                            alt_description:
                                'closeup photo of Coca-Cola tin can',
                            breadcrumbs: [],
                            urls: {
                                raw: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0',
                                full: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                regular:
                                    'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                small: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                thumb: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                small_s3:
                                    'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1514178255089-603d3a35b24a',
                            },
                            links: {
                                self: 'https://api.unsplash.com/photos/closeup-photo-of-coca-cola-tin-can-nWCmjC7dmdo',
                                html: 'https://unsplash.com/photos/closeup-photo-of-coca-cola-tin-can-nWCmjC7dmdo',
                                download:
                                    'https://unsplash.com/photos/nWCmjC7dmdo/download',
                                download_location:
                                    'https://api.unsplash.com/photos/nWCmjC7dmdo/download',
                            },
                            likes: 109,
                            liked_by_user: false,
                            current_user_collections: [],
                            sponsorship: null,
                            topic_submissions: {},
                            asset_type: 'photo',
                            user: {
                                id: '98VtHraefS0',
                                updated_at: '2025-05-30T14:10:59Z',
                                username: 'ravinepz',
                                name: 'Ravi Sharma',
                                first_name: 'Ravi',
                                last_name: 'Sharma',
                                twitter_username: null,
                                portfolio_url: null,
                                bio: 'My Instagram @Ravinepz',
                                location: 'New Delhi , India',
                                links: {
                                    self: 'https://api.unsplash.com/users/ravinepz',
                                    html: 'https://unsplash.com/@ravinepz',
                                    photos: 'https://api.unsplash.com/users/ravinepz/photos',
                                    likes: 'https://api.unsplash.com/users/ravinepz/likes',
                                    portfolio:
                                        'https://api.unsplash.com/users/ravinepz/portfolio',
                                },
                                profile_image: {
                                    small: 'https://images.unsplash.com/profile-1649654551838-c633f4af58aaimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=32&h=32',
                                    medium: 'https://images.unsplash.com/profile-1649654551838-c633f4af58aaimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=64&h=64',
                                    large: 'https://images.unsplash.com/profile-1649654551838-c633f4af58aaimage?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128',
                                },
                                instagram_username: 'Ravinepz',
                                total_collections: 13,
                                total_likes: 930,
                                total_photos: 1104,
                                total_promoted_photos: 54,
                                total_illustrations: 0,
                                total_promoted_illustrations: 0,
                                accepted_tos: true,
                                for_hire: false,
                                social: {
                                    instagram_username: 'Ravinepz',
                                    portfolio_url: null,
                                    twitter_username: null,
                                    paypal_email: null,
                                },
                            },
                        },
                        preview_photos: [
                            {
                                id: 'nWCmjC7dmdo',
                                slug: 'closeup-photo-of-coca-cola-tin-can-nWCmjC7dmdo',
                                created_at: '2017-12-25T05:06:21Z',
                                updated_at: '2025-05-30T09:14:28Z',
                                blur_hash: 'LRBMf9~C%2NZozkCjFnjIoIoRjaL',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1514178255089-603d3a35b24a',
                                },
                            },
                            {
                                id: 'xBTnaTgleQE',
                                slug: 'assorted-candies-xBTnaTgleQE',
                                created_at: '2018-01-03T19:35:10Z',
                                updated_at: '2025-05-30T09:14:37Z',
                                blur_hash: 'L?Q9WUL}aLo$X9W;WBe.xbn,RiWB',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1515007917921-cad9bf0e2e87',
                                },
                            },
                            {
                                id: '40iPTrHMNhw',
                                slug: 'time-lapse-photography-of-person-pouring-can-of-coca-cola-in-wine-glass-40iPTrHMNhw',
                                created_at: '2018-08-30T00:29:41Z',
                                updated_at: '2025-05-30T09:19:29Z',
                                blur_hash: 'LTNd2YDO.8o}rXDiD%x]4TVsx]NG',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1535588926957-dc13fb410d88?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535588926957-dc13fb410d88',
                                },
                            },
                            {
                                id: '72Sz8kOwjdM',
                                slug: 'bokeh-photography-of-coca-cola-soda-can-during-daytime-72Sz8kOwjdM',
                                created_at: '2018-03-09T04:29:36Z',
                                updated_at: '2025-05-30T12:18:25Z',
                                blur_hash: 'LQH{1n4T?bx]EfE1xaD%kXkCRPaK',
                                asset_type: 'photo',
                                urls: {
                                    raw: 'https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.1.0',
                                    full: 'https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb',
                                    regular:
                                        'https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
                                    small: 'https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
                                    thumb: 'https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
                                    small_s3:
                                        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1520568444554-4698653b539c',
                                },
                            },
                        ],
                    },
                ],
            },
        } as unknown as UnsplashImageDetailed);
    }
}
