<!-- components/SocialLinks.vue -->
<script setup lang="ts">
const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/m7rlin',
        icon: 'i-simple-icons-github',
    },
    {
        name: 'X (Twitter)',
        url: 'https://twitter.com/m7rlin',
        icon: 'i-simple-icons-x',
    },

    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marcin-stawowczyk-9ab159163/',
        icon: 'i-simple-icons-linkedin',
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@m7rlin',
        icon: 'i-simple-icons-youtube',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/m7rlin',
        icon: 'i-simple-icons-instagram',
    },
];
</script>

<template>
    <div class="flex items-center justify-center space-x-6">
        <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            :aria-label="`Link to my ${link.name} profile`"
        >
            <UIcon
                :name="link.icon"
                class="text-2xl text-gray-500 transition-colors duration-300 hover:text-white"
            />
        </a>
    </div>
</template>
