<template>
    <div>
        <navbar></navbar>
        <h1>Ini Halaman kamar</h1>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default{
    name: 'app',
    components: {
        navbar: navbar
    }
}
</script>