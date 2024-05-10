<template><!--업체 소개페이지-->
    <div class="wrap">

        <!--헤더-->

        <AppHeader />

        <div>
            <input type="file" id="upload-image" hidden />
            <label for="upload-image">
                <img src="../../assets/images/회사이미지.png" />
            </label>

        </div>


        <AppFooter />

    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import '@/assets/css/jh/jh.css'



export default {
    components: {
        AppHeader,
        AppFooter
    },
    data: {},

    methods: {

    },
    created() {

    }
};
</script>

<style></style>