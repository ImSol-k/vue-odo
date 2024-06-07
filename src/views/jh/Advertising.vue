<template>
    <AppHeader />
    <div class="wrap">
        <div class="clearfix">
            <AppMenu />
            <div class="companyInfoClassList">

                <p>페이스북 광고 올리기</p>
            </div>
            <input v-model="message" placeholder="Write your post here" />
            <button @click="postToFacebook">Post</button>
        </div>

    </div>
    <!--wrap-->
    <AppFooter />
</template>
<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import axios from "axios";

export default {
    name: "CompanyPageView",
    components: { AppHeader, AppFooter, AppMenu },
    data() {
        return {

        };
    },
    methods: {
        postToFacebook() {
            const url = `https://graph.facebook.com/${this.pageId}/feed`;
            const params = {
                message: this.message,
                access_token: this.accessToken,
            };

            axios
                .post(url, null, { params })
                .then((response) => {
                    console.log("Post successful:", response.data);
                })
                .catch((error) => {
                    console.error("Error posting to Facebook:", error);
                });
        },

    },
    created() {

    },
};
</script>

<style>
.classChack {
    border-bottom: 2px solid #8521ff;
}
</style>