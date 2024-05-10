<template><!--업체 소개페이지-->
    <div class="wrap">

        <AppHeader />
        
        

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
    data() {
        return {
            
        }
    },

    methods: {
        
    },
    created() {

    }
}
</script>

<style></style>