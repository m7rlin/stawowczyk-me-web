<!-- pages/index.vue -->
<template>
    <div class="bg-gray-900 text-white min-h-screen font-sans">
        <UContainer>
            <!-- Header Section -->
            <header class="pt-16 text-center">
                <UserAvatar />

                <!-- New Components Added Here -->
                <div class="mt-12 space-y-8">
                    <CallToAction />
                    <SocialLinks />
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
                    <SectionTitle title="My Projects" class="mb-16" />
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
