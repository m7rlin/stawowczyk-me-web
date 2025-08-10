<!-- components/UserAvatar.vue -->
<template>
    <div class="flex flex-col items-center space-y-4">
        <!-- 
        The container for the avatar. 
        'group' enables child elements to be styled based on this element's hover state.
        'relative' is needed to position the images inside it.
        -->
        <div
            class="group relative w-24 h-24 rounded-full border-2 border-gray-700 bg-gray-800 p-1"
        >
            <!-- The container for the images, ensuring they are clipped to the circle shape -->
            <div class="relative h-full w-full overflow-hidden rounded-full">
                <!-- Image #1: The image that shows on hover (e.g., your photo) -->
                <!-- It starts invisible and scaled down, then fades in and scales up on hover. -->
                <NuxtImg
                    src="/me.jpg"
                    alt="A photo of Marcin Stawowczyk"
                    class="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                />

                <!-- Image #2: The default image (your logo) -->
                <!-- It starts visible, then fades out and rotates slightly on hover. -->
                <NuxtImg
                    src="/logo.svg"
                    alt="Logo"
                    class="absolute inset-0 h-full w-full object-contain p-3 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-[-15deg] group-hover:scale-75"
                />
            </div>
        </div>

        <h1 class="text-5xl font-bold">Marcin Stawowczyk</h1>
        <p class="text-xl text-gray-400">
            Full-Stack Software Developer specialized in Nuxt
        </p>
    </div>
</template>
