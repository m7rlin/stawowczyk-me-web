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
                format: ['webp'],
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
            title: 'Marcin Stawowczyk - Nuxt Expert located in Innsbruck',
            titleTemplate: '%s - Marcin Stawowczyk',
            htmlAttrs: {
                lang: 'en',
            },
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    public: {
        site: {
            url: 'http://127.0.0.1:3000',
            name: 'Marcin Stawowczyk - Nuxt Expert in Innsbruck',
            description:
                'Full-Stack Software Developer localed in Innsbruck with more then 12 years of experience.',
            indexable: process.env.NODE_ENV === 'production',
        },
        ogimage: {
            title: 'Marcin Stawowczyk - Nuxt Expert in Innsbruck',
            description:
                'Full-Stack Software Developer localed in Innsbruck with more then 12 years of experience.',
            theme: '#9D7DF2',
            colorMode: 'dark',
        },
    },

    fonts: {
        defaults: {
            weights: [500],
            styles: ['normal', 'italic'],
        },
        families: [
            {
                name: 'Poppins',
                weights: ['100 900'],
                // styles: ['normal', 'italic'],
                provider: 'google',
            },
            {
                name: 'Inter',
                weights: ['100 900'],
                // styles: ['normal', 'italic'],
                provider: 'google',
            },
            {
                name: 'JetBrains Mono',
                weights: [300, 400, 600, 700],
                styles: ['normal', 'italic'],
                provider: 'google',
            },
            // {
            //     name: 'Bricolage Grotesque',
            //     weights: [300, 400, 700],
            //     styles: ['normal', 'italic'],
            //     provider: 'google',
            // },
        ],
    },

    content: {
        preview: {
            api: 'https://api.nuxt.studio',
        },
    },

    nitro: {
        prerender: {
            routes: [
                '/_ipx/f_webp/img/sanktjakobvillach5.png',
                '/_ipx/f_webp/img/gachowetz1.png',
                '/_ipx/f_webp/img/magictm1.png',
                '/_ipx/f_webp/img/mebleg1.png',
                '/_ipx/f_webp/img/translatorklotz1.png',
            ],
        },
    },
});
