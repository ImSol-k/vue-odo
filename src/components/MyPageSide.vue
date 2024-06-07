<template>
<div class="mymy-side clearfix">
	<ul>
		<li>내 활동</li>
		<li><router-link to="/mypage/pay" class="sideLink" title="결제 내역">결제 내역</router-link></li>
		<li><router-link to="/wishlistclass" class="sideLink" title="위시리스트">위시리스트</router-link></li>
		<li><router-link to="/mypage/coupon" class="sideLink" title="쿠폰">쿠폰</router-link></li>
	</ul>
	<ul>
		<li>고객센터</li>
		<li><router-link to="/mypage/notice" class="sideLink" title="공지사항">공지사항</router-link></li>
		<li><router-link to="/mypage/condition" class="sideLink" title="약관 및 정책">약관 및 정책</router-link></li>
	</ul>

	<div class="cli-image">
		<div class="cli-1">
			<a href="https://open.kakao.com/o/ghymk2vg" target="_blank"><img src="@/assets/images/icon/ss/kakao.png"><br></a>
			<span>ODO 채널</span>
		</div>
		<div class="cli-2 clearfix">
			<a href="https://open.kakao.com/o/go2lp2vg" target="_blank"><img src="@/assets/images/icon/ss/kakao.png"><br></a>
			<span>ODO 호스트</span>
		</div>
		<div class="cli-3">
			<span>운영시간</span><br>
			<span>
				&nbsp;&nbsp;평일 10:00 ~ 17:00<br>
				&nbsp;&nbsp;(점심 12:00 ~ 13:00)
			</span>
		</div>
	</div>
</div>
</template>
<script>
export default {
  name: "MyPageSide",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
