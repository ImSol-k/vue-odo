<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
		</div>
    </div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

	export default {
		name: "ModifyView",
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