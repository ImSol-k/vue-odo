<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					
					<!-- nav -->
					<MyPageSide/>

				</div>
				<!-- 오른쪽내용영역 -->	
                <div>
                    
                </div>
		    </div>
	    </div>
    </div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'

import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

	export default {
		name: "ModifyView",
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

<style></style>