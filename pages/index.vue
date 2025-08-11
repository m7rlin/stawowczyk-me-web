<script setup lang="ts"></script>

<!-- pages/index.vue -->
<template>
    <div class="dark:bg-gray-900 bg-white text-white min-h-screen font-sans">
        <UContainer>
            <!-- Header Section -->
            <header class="pt-16 text-center">
                <div
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 700, ease: 'easeOut' },
                    }"
                >
                    <UserAvatar />

                    <!-- New Components Added Here -->
                    <div class="mt-12 space-y-8">
                        <CallToAction />
                        <SocialLinks />
                    </div>
                </div>
            </header>
        </UContainer>

        <section class="mt-16">
            <TechStackCarousel />
        </section>

        <UContainer class="mt-8">
            <!-- Main Content -->
            <main>
                <!-- Projects Section -->
                <section>
                    <div
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :enter="{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 700,
                                delay: 300,
                                ease: 'easeOut',
                            },
                        }"
                    >
                        <SectionTitle title="My Projects" class="mb-16" />
                    </div>
                    <ProjectList />
                </section>
            </main>
        </UContainer>
    </div>
</template>

<style>
/* Using a common font like Inter for a clean look */
body {
    font-family: 'Inter', sans-serif;
}
</style>
