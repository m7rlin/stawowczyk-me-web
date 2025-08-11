import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        terms: defineCollection({
            type: 'page',
            source: 'terms/*.md',
        }),
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                date: z.string(),
            }),
        }),
    },
});
