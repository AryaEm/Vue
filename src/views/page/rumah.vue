<template>
    <div>
        <navbar></navbar>
        <h1>{{ tulisan }}</h1>
        <input type="text" v-model="tulisan">
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
    name: 'app',
    components: {
        navbar: navbar
    },
    data() {
        return {
            tulisan: 'Ini Halaman Rumah'
        }
    }
}
</script>