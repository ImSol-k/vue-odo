<template>
    <AppHeader />
	<!-- //header -->

	<div></div>

    <AppFooter />
	<!-- //footer -->
</template>
<script>
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

	export default {
		name: "ClassDetailPageView",
		components: {
            AppHeader,
            AppFooter,
        },
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>
