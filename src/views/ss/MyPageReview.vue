<template>

<AppHeader/>
<!-- header -->

<div class="wrap">

	<div class="mymy clearfix">

		<MyPageSide/>

	</div>
	<!-- mymy -->
</div>
<!-- wrap -->
<AppFooter/>
<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageSide from '@/components/MyPageSide.vue';

export default {
	name: "MyPageReview",
	components: {
		AppHeader,
		AppFooter,
		MyPageSide
	},
	data() {
		return {};
	},
	methods: {},
	created(){}
};
</script>





<style>
</style>