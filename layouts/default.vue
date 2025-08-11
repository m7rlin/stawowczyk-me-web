<template>
    <div>
        <main class="p-4">
            <slot />
        </main>
        <!-- Footer -->
        <footer
            class="text-center py-12 mt-12 border-t dark:border-gray-800 border-gray-200"
        >
            <ul class="flex justify-center space-x-4 text-sm mb-2">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li>
                    <NuxtLink to="/terms/privacy-policy"
                        >Privacy Policy</NuxtLink
                    >
                </li>
            </ul>
            <p class="text-sm text-gray-500">
                &copy; 2025 Marcin Stawowczyk. All rights reserved.
            </p>
        </footer>
    </div>
</template>
