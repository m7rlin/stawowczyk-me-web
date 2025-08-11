/** @type {import('tailwindcss').Config} */
module.exports = {
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    darkMode: 'class',
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        // '--tw-prose-invert-quote-borders':
                        //     theme('colors.primary-400'),
                        // '--tw-prose-quote-borders': theme('colors.primary-200'),

                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                color: 'hsl(var(--primary) / 0.8)',
                            },
                        },
                        blockquote: {
                            quotes: '"\\201E""\\201C""\\2018""\\2019"',
                        },
                        table: {
                            textAlign: 'left',
                        },

                        'h2 a': {
                            color: `${theme('colors.black')} !important`,
                            textDecoration: 'none !important',
                        },
                    },
                },
                invert: {
                    css: {
                        'h2 a': {
                            color: `${theme('colors.white')} !important`,
                            textDecoration: 'none',
                        },
                    },
                },
            }),
        },
    },
};
