<template>
    <div>
        <div class="navbar">
            <router-link to="/rumah" class="list-navbar">RUMAH </router-link>
            <router-link to="/kamar" class="list-navbar">KAMAR </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.navbar {
    /* border: 1px solid black; */
    padding: 20px;
    padding-bottom:25px;
    display: flex;
    justify-content: flex-end;
}

.list-navbar {
    margin: 15px;
}
</style>