<template>
    <div class="login-container">
        <h1>Login</h1>
        <div class="form-field">
            <label>User name</label>
            <input v-model="name" type="text" />
        </div>
        <div class="form-field">
            <label>Password</label>
            <input v-model="password" type="password" />
        </div>
        <div>
            <button v-on:click="submitForm">click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data: function () {
        return {
            name: '',
            password: '',
        }
    },
    created() {
        console.log(" Does this work? ")
        console.log(this.name)
        console.log(this.$store.state.count)
    },
    methods: {
        submitForm() {
            // this.$store.commit('setUser',{
            //     name: this.name,
            //     password: this.password,
            // })
            this.$store.dispatch('login', {
                name: this.name,
                password: this.password,
            })
            const temp = this.$store.state.auth.user;
            console.log(temp.name)
            this.$router.push("/");
        },
    }
}
</script>