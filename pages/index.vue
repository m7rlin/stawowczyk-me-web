<!-- pages/index.vue -->
<template>
    <div class="bg-gray-900 text-white min-h-screen font-sans">
        <UContainer>
            <!-- Header/Hero Section -->
            <header class="py-20 text-center">
                <h1 class="text-5xl font-bold">Marcin Stawowczyk</h1>
                <p class="mt-4 text-xl text-gray-400">
                    Full-Stack Software Developer
                </p>
            </header>

            <!-- Projects Section -->
            <main class="py-8">
                <ProjectList />
            </main>

            <!-- Footer -->
            <footer class="text-center py-12 mt-12 border-t border-gray-800">
                <p class="text-sm text-gray-500">
                    &copy; 2025 Marcin Stawowczyk. All rights reserved.
                </p>
            </footer>
        </UContainer>
    </div>
</template>

<style>
/* Using a common font like Inter for a clean look */
body {
    font-family: 'Inter', sans-serif;
}
</style>
