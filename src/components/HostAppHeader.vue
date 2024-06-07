<template>

    <header>
        <div class="top">
            <div class="inner">
                <button class="companyLogout" v-if="this.$store.state.cToken != ''" v-on:click="logout">로그아웃</button>
            </div>
        </div>
        <div class="inner">
            <div class="hostheaderbottom">
                <h1><router-link to="/" class="logo">logo</router-link></h1>
                <ul>
                    <li class="brandLogoBox" v-if="this.$store.state.cToken != ''"><router-link to="/companypage">
                        <img :src="`${this.$store.state.apiBaseUrl}/upload/${this.$store.state.authCompany.companyImage}`" alt="">
                        <p>{{ this.$store.state.authCompany.companyName }}</p>
                    </router-link></li>
                </ul>
            </div>
        </div>
    </header>

</template>

<script>

export default {
    name: "HostAppHeader",
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
        logout() {
            this.$store.commit('setAuthCompany', '');
            this.$store.commit('setCToken', '');
            this.$router.push('/');
        },
    },
    created() {
    }
};
</script>