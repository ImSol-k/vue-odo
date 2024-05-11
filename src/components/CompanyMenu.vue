<template>
  <div class="companyInfoMenu">
    <h1>(주)레모나</h1>

    <ul>
      <li>업체관리</li>
      <li><router-link to="/">소개</router-link></li>
    </ul>
    <ul>
      <li>클래스관리</li>
      <li><router-link to="/companypage">운영중인 클래스</router-link></li>
      <li><router-link to="/classcalender">클래스 일정</router-link></li>
      <li><router-link to="/classadd">클래스 등록</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CompanyMenu",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
