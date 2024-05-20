<template>
    <AppHeader/>
	<div class="wrap">
        <div class="companySelectBox">

            <p>환영합니다</p>
            <ul>
                <li><router-link to="/login/company">로그인</router-link></li>
                <li><router-link to="/companyjoin">회원가입</router-link></li>
            </ul>
        </div>
        
    </div>
    <AppFooter/>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

	export default {
		name: "CompanySelectView",
		components: { AppHeader,AppFooter },
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>