<!-- components/ProjectList.vue -->
<script setup>
const visibleProjectsCount = ref(4); // Show 4 projects initially

const allProjects = [
    {
        name: 'Doppelmayr Group',
        startDate: '2021',
        endDate: '2022',
        subtitle: 'Ropeway Engineering',
        url: 'https://www.doppelmayr.com/',
        thumbnail: '/img/doppelmayr1.png',
        description: [
            'Corporate website for the global leader in ropeway and cable car technology.',
            'Features complex project showcases and multilingual content.',
            'Built with a focus on performance and corporate identity.',
        ],
    },
    {
        name: 'GSWB',
        startDate: '2021',
        endDate: '2022',
        subtitle: 'Non-Profit Housing',
        url: 'https://www.gswb.at/',
        thumbnail: '/img/gswb1.png',
        description: [
            "Website for Salzburg's largest non-profit housing developer.",
            'Includes a comprehensive property search and tenant portal.',
            'Modern, user-friendly interface for finding housing.',
        ],
    },
    {
        name: 'Suche-Wohnung.at',
        startDate: '2021',
        endDate: '2022',
        subtitle: 'Real Estate Search Engine',
        url: 'https://suche-wohnung.at/',
        thumbnail: '/img/suchewohnung1.png',
        description: [
            'A meta-search engine for rental apartments across Austria.',
            'Aggregates listings from multiple major real estate platforms.',
            'Features advanced filtering and a clean, map-based interface.',
        ],
    },
    {
        name: 'Plasmazentrum',
        startDate: '2021',
        endDate: '2021',
        subtitle: 'Medical & Health',
        url: 'https://www.plasmazentrum.at/',
        thumbnail: '/img/biolife1.png',

        description: [
            'Platform for a leading plasma donation company in Austria.',
            'Provides essential information for donors and highlights the importance of plasma.',
            'Features an appointment booking integration.',
        ],
    },
    {
        name: 'Sankt Jakob Villach',
        startDate: '2024',
        endDate: '2024',
        subtitle: 'PWA & Audio Streaming',
        url: 'https://sanktjakob-villach.at/',
        thumbnail: '/img/sanktjakobvillach5.png',

        description: [
            'Progressive Web App for the main parish church in Villach.',
            'Allows users to listen to sermons and access church news.',
            'Designed for accessibility and offline use.',
        ],
    },
    {
        name: 'Gachowetz Immobilien',
        startDate: '2021',
        endDate: '2021',
        subtitle: 'Real Estate',
        url: 'https://www.gachowetz.com/',
        thumbnail: '/img/gachowetz1.png',
        description: [
            'Website for a Salzburg-based real estate and property development company.',
            'Showcases current and past residential projects.',
            'Elegant design reflecting high-quality architecture.',
        ],
    },
    {
        name: 'MagicTM',
        startDate: '2016',
        endDate: null,
        subtitle: 'E-Learning Platform',
        url: 'https://magictm.com/',
        thumbnail: '/img/magictm1.png',
        description: [
            'Online platform for learning programming and web technologies.',
            'Offers a variety of courses, tutorials, and interactive lessons.',
            'Focuses on a hands-on, project-based learning approach.',
        ],
    },
    {
        name: 'MebleG',
        startDate: '2022',
        endDate: '2022',
        subtitle: 'Custom Furniture',
        url: 'https://mebleg.pl/',
        thumbnail: '/img/mebleg1.png',
        description: [
            'Website for a Polish company specializing in custom-made furniture.',
            'Features a gallery of kitchen, bathroom, and office designs.',
            'Clean and visual-first layout to showcase craftsmanship.',
        ],
    },
    {
        name: 'Translator Klotz',
        startDate: '2019',
        endDate: '2019',
        subtitle: 'Translation Services',
        url: 'https://www.translator-klotz.com/',
        thumbnail: '/img/translatorklotz1.png',
        description: [
            'Professional portfolio for a certified translator.',
            'Provides information on services, languages, and qualifications.',
            'Simple, clear, and professional online presence.',
        ],
    },
];

const visibleProjects = computed(() =>
    allProjects.slice(0, visibleProjectsCount.value)
);
const hasMoreProjects = computed(
    () => visibleProjectsCount.value < allProjects.length
);

const showMoreProjects = () => {
    visibleProjectsCount.value = allProjects.length;
};
</script>

<template>
    <div>
        <!-- 2-column grid for Full HD screens (2xl) and wider -->
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-x-16 gap-y-12">
            <ProjectCard
                v-for="project in visibleProjects"
                :key="project.name"
                :project="project"
            />
        </div>

        <div v-if="hasMoreProjects" class="text-center mt-16">
            <UButton
                @click="showMoreProjects"
                size="lg"
                class="cursor-pointer"
                variant="soft"
                >Show More</UButton
            >
        </div>
    </div>
</template>
