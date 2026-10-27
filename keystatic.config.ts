// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    ui: {
        brand: {
            name: 'MooCMS',
            // logo: 'https://keystatic.io/images/logo.svg',
        },
        navigation: {
            'posts': ['posts'],
            'product': ['product'],
        },
    },
    storage: {
        // kind: 'local', // local | github
        kind: 'github', // local | github
        repo: 'soroylee/test3', // 仓库
    },
    collections: {
        posts: collection({
            label: '文章',
            slugField: 'title',
            path: 'src/contents/posts/*',
            entryLayout: 'content',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: {
                        label: '标题'
                    }
                }),
                publishedDate: fields.date({ label: 'Published date' }),
                cover: fields.image({
                    label: "封面图",
                    directory: "public/images/posts",
                }),
                draft: fields.checkbox({
                    label: 'Draft',
                    description: 'Set this post as draft to prevent it from being published'
                }),
                content: fields.markdoc({ label: '正文' }),
            },
        }),
        product: collection({
            label: '产品',
            slugField: 'title',
            path: 'src/contents/product/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                content: fields.markdoc({ label: 'Content' }),
            },
        }),
    },
});
