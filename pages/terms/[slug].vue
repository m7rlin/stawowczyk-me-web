<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`terms-${slug}`, () => {
    return queryCollection('terms').path(`/terms/${slug}`).first();
});
</script>

<template>
    <div class="mt-4 md:mt-8 xl:mt-16">
        <div class="prose dark:prose-invert mx-auto">
            <ContentRenderer :value="post" />
        </div>
    </div>
</template>
