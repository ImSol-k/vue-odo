<template>
  <div class="companyInfoMenu">
    <h1>{{ companyName }}</h1>

    <ul>
      <li>업체관리</li>
      <li><router-link :to="'/companyinfo/' + companyNo">소개</router-link></li>
      <li><router-link to="/companymodify">정보확인/수정</router-link></li>
      <li><router-link to="/chart">매출통계</router-link></li>
      <li><router-link to="/advertising">페이스북 글올리기</router-link></li>
    </ul>
    <ul>
      <li>클래스관리</li>
      <li><router-link to="/companypage">운영중인 클래스</router-link></li>
      <li><router-link to="/classcalender">클래스 일정</router-link></li>
      <li><router-link to="/classadd/1">클래스 등록</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CompanyMenu",
  components: {},
  data() {
    return {
      companyName: this.$store.state.authCompany.companyName,
      companyNo: this.$store.state.authCompany.companyNo
      
    };
  },
  methods: {
    a(){
      console.log(this.companyNo)
    }
  },
  created() {
  },
};
</script>

<style></style>
