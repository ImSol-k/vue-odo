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
                <div id="write_area">
                    <form method="post" enctype="multipart/form-data"></form>
                    <div id="in_title">
                        <textarea name="title" id="utitle" rows="1" cols="55" placeholder="제목" required></textarea>
                    </div>
                    <div id="wi_line"></div>
                    <div id="in_name">
                        <textarea name="name" id="uname" rows="1" cols="55" placeholder="글쓴이" required></textarea>
                    </div>
                    <div id="in_file">
                        <input type="file" value="1" name="b_file" />
                    </div>
                    <div id="bt_se">
                        <button type="submit">글 작성</button>
                    </div>
                </div>	
            </div>
        </div>
    </div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/mj/write.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

	export default {
		name: "WriteView",
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