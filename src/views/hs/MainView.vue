<template>
		<AppHeader />
        <!-- //header -->
		<div></div>

		<AppFooter />
        <!-- //footer -->
</template>
<script>
import "@/assets/css/hs/main.css"

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

	export default {
		name: "MainView",
		components: {
			AppHeader,
			AppFooter
		},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>