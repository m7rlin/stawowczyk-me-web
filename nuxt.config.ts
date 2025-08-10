// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    ssr: true,
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt',
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
});
