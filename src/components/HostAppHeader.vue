<template>

    <header>
        <div class="top">
            <div class="inner"></div>
        </div>
        <div class="inner">
            <div class="hostheaderbottom">
                <h1><router-link to="/" class="logo">logo</router-link></h1>
                <ul>
                    <li class="brandLogoBox"><router-link to="#">
                        <img src="../assets/images/hs/rainbow_apple_icon.png" alt="">
                        <p>업체명업체명</p>
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
    },
    created() {
    }
};
</script>