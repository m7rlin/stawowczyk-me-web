<!-- components/ProjectList.vue -->
<script setup>
const visibleProjectsCount = ref(4); // Show 4 projects initially

const allProjects = [
    {
        name: 'Doppelmayr Group',
        startDate: '2021',
        endDate: null,
        subtitle: 'Ropeway Engineering',
        url: 'https://www.doppelmayr.com/',
        description: [
            'Corporate website for the global leader in ropeway and cable car technology.',
            'Features complex project showcases and multilingual content.',
            'Built with a focus on performance and corporate identity.',
        ],
    },
    {
        name: 'GSWB',
        startDate: '2020',
        endDate: '2022',
        subtitle: 'Non-Profit Housing',
        url: 'https://www.gswb.at/',
        description: [
            "Website for Salzburg's largest non-profit housing developer.",
            'Includes a comprehensive property search and tenant portal.',
            'Modern, user-friendly interface for finding housing.',
        ],
    },
    {
        name: 'Suche-Wohnung.at',
        startDate: '2022',
        endDate: null,
        subtitle: 'Real Estate Search Engine',
        url: 'https://suche-wohnung.at/',
        description: [
            'A meta-search engine for rental apartments across Austria.',
            'Aggregates listings from multiple major real estate platforms.',
            'Features advanced filtering and a clean, map-based interface.',
        ],
    },
    {
        name: 'Plasmazentrum',
        startDate: '2021',
        endDate: '2023',
        subtitle: 'Medical & Health',
        url: 'https://www.plasmazentrum.at/',
        description: [
            'Platform for a leading plasma donation company in Austria.',
            'Provides essential information for donors and highlights the importance of plasma.',
            'Features an appointment booking integration.',
        ],
    },
    {
        name: 'Sankt Jakob Villach',
        startDate: '2023',
        endDate: null,
        subtitle: 'PWA & Audio Streaming',
        url: 'https://sanktjakob-villach.at/',
        description: [
            'Progressive Web App for the main parish church in Villach.',
            'Allows users to listen to sermons and access church news.',
            'Designed for accessibility and offline use.',
        ],
    },
    {
        name: 'Gachowetz Immobilien',
        startDate: '2022',
        endDate: '2023',
        subtitle: 'Real Estate',
        url: 'https://www.gachowetz.com/',
        description: [
            'Website for a Salzburg-based real estate and property development company.',
            'Showcases current and past residential projects.',
            'Elegant design reflecting high-quality architecture.',
        ],
    },
    {
        name: 'MagicTM',
        startDate: '2020',
        endDate: null,
        subtitle: 'E-Learning Platform',
        url: 'https://magictm.com/',
        description: [
            'Online platform for learning programming and web technologies.',
            'Offers a variety of courses, tutorials, and interactive lessons.',
            'Focuses on a hands-on, project-based learning approach.',
        ],
    },
    {
        name: 'MebleG',
        startDate: '2019',
        endDate: '2021',
        subtitle: 'Custom Furniture',
        url: 'https://mebleg.pl/',
        description: [
            'Website for a Polish company specializing in custom-made furniture.',
            'Features a gallery of kitchen, bathroom, and office designs.',
            'Clean and visual-first layout to showcase craftsmanship.',
        ],
    },
    {
        name: 'Translator Klotz',
        startDate: '2022',
        endDate: '2022',
        subtitle: 'Translation Services',
        url: 'https://www.translator-klotz.com/',
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
            <UButton @click="showMoreProjects" size="lg" variant="soft"
                >Show More</UButton
            >
        </div>
    </div>
</template>
