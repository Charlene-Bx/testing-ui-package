<template>
    <nav className="socialMedia">
        <ul className="socialMedia__list">
            <li className="socialMedia__item">
                <img src="../../assets/github.svg" alt="Github logo" className="socialMedia__github" />
                <p>GitHub</p>
            </li>
            <li className="socialMedia__item">
                <p>{{ copyright }}</p>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import './Link.scss'

const props = defineProps({
    copyright: { type: String }
})
</script>