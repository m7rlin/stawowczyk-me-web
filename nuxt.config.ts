// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    ssr: true,
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
        [
            '@nuxt/image',
            {
                provider: 'ipx',
                // assets: '/public',
            },
        ],
        '@nuxt/scripts',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt',
        '@nuxtjs/seo',
        '@nuxt/fonts',
    ],

    app: {
        head: {
            title: 'Marcin Stawowczyk - Nuxt Expert',
            htmlAttrs: {
                lang: 'en',
            },
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    // fonts: {
    //     defaults: {
    //         weights: [500],
    //         styles: ['normal', 'italic'],
    //     },
    //     families: [
    //         {
    //             name: 'Inter',
    //             weights: ['100 900'],
    //             // styles: ['normal', 'italic'],
    //             provider: 'google',
    //         },
    //         {
    //             name: 'JetBrains Mono',
    //             weights: [300, 400, 600, 700],
    //             styles: ['normal', 'italic'],
    //             provider: 'google',
    //         },
    //         // {
    //         //     name: 'Bricolage Grotesque',
    //         //     weights: [300, 400, 700],
    //         //     styles: ['normal', 'italic'],
    //         //     provider: 'google',
    //         // },
    //     ],
    // },

    nitro: {
        prerender: {
            routes: [
                '/_ipx/_/img/sanktjakobvillach5.png',
                '/_ipx/_/img/gachowetz1.png',
                '/_ipx/_/img/magictm1.png',
                '/_ipx/_/img/mebleg1.png',
                '/_ipx/_/img/translatorklotz1.png',
            ],
        },
    },
});
