<template>
    <div class="nav-links">
        <div><router-link to="/foo">Go to foo</router-link></div>
        <div><router-link to="/bar">Go to Bar</router-link></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>
<style>
.nav-links {
    display: flex;
}
</style>