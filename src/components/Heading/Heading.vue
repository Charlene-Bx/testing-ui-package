<template>
    <component :is="type" :class="['heading', `heading--${style}`]">
        <span>{{ line1 }}</span>
        <span>{{ line2 }}</span>
    </component>
</template>
<script setup>
import './Heading.scss'

const props = defineProps({
    line1: { type: String },
    line2: { type: String },
    type: { type: String, validator: (type) => ['h1', 'h2', 'h3', 'h4'].includes(type) },
    style: { type: String, validator: (style) => ['heading-1', 'heading-2', 'heading-3', 'heading-4'].includes(style) }
})
</script>