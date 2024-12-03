<template>
    <div>
        <h1>Dashboard</h1>
        <div>{{ bloomBerg }}</div>
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<script>
/* eslint-disable */
import NavBar from '../shared/components/NavBar.vue';
import router from '../router';

export default {
    name: 'DashboardComponent',
    components: {
        NavBar,
    },
    data() {
        return {
            bloomBerg: 'Initial value',
        };
    },
    beforeRouteEnter(to, from, next) {
        // called before the route that renders this component is confirmed.
        // does NOT have access to `this` component instance,
        // because it has not been created yet when this guard is called!
        const user = localStorage.getItem("user");
        const temp = router;
        console.log({ name: temp.app.$store.state.auth.user.name });
        console.log({
            user
        })
        // this.$store.dispatch('login', {
        //     name: this.name,
        //     password: this.password,
        // })
        next();
    },
    // methods: {
    //     change: function () {
    //         console.log("WTH")
    //     }
    // },
}
</script>