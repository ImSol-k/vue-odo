<template>
  <AppHeader />
  <div class="wrap">
    <div class="companyJoinTitle">
      <h1>사업자 가입</h1>
      <div class="companyJoinImg">
        <img src="@/assets/images/icon/man_icon.png" alt="" />
        <div>
          <p>프로필사진</p>
          <input type="file" name="" id="" />
        </div>
      </div>
      <!--companyJoinImg-->
      <form action="">
        <div class="companyJoinInfo">
          <div>
            <!-- <label for="companyNo">사업자번호</label> -->
            <input
              type="text"
              name=""
              id="businesNumber"
              v-model="companyVo.businesNumber"
              placeholder="사업자번호"
            />
            <input type="button" value="사업자 인증" />
          </div>
          <div>
            <!-- <label for="companyName">업체명</label> -->
            <input
              type="text"
              name=""
              id="companyName"
              v-model="companyVo.companyName"
              placeholder="업체명"
            />
          </div>
          <div>
            <!-- <label for="companyName">업체명</label> -->
            <textarea
              type="text"
              id="companyDescription"
              v-model="companyVo.companyDescription"
              placeholder="업체소개"
            >
            </textarea>
          </div>
          <div>
            <!-- <label for="companyId">아이디</label> -->
            <input
              type="text"
              name=""
              id="companyId"
              v-model="companyVo.companyId"
              placeholder="아이디"
            />
            <input type="button" value="중복확인" />
            <p>✅사용 가능한 아이디입니다.</p>
            <p>❌사용중인 아이디입니다.</p>
          </div>
          <div>
            <!-- <label for="companyPass">비밀번호</label> -->
            <input
              type="text"
              name=""
              id="companyPass"
              placeholder="비밀번호"
            />
          </div>
          <div>
            <!-- <label for="companyPassChack">비밀번호확인</label> -->
            <input
              type="text"
              name=""
              id="companyPassChack"
              placeholder="비밀번호확인"
              v-model="companyVo.companyPass"
            />
            <p>✅비밀번호 일치</p>
            <p>❌비밀번호가 일치하지 않습니다.</p>
          </div>
          <div class="companyAddress">
            <input
              type="text"
              id="postcode"
              placeholder="우편번호"
              v-model="companyVo.zonecode"
              readonly
            />
            <input
              type="button"
              v-on:click.prevent="DaumPostcode()"
              value="우편번호 찾기"
            /><br />
            <input
              type="text"
              id="roadAddress"
              placeholder="도로명주소"
              v-model="companyVo.roadAddress"
              readonly
            />
            <input
              type="text"
              id="jibunAddress"
              placeholder="지번주소"
              v-model="companyVo.jibunAddress"
              readonly
            />
            <span id="guide" style="color: #999; display: none"></span>
            <input
              type="text"
              id="sample4_detailAddress"
              placeholder="상세주소"
              v-model="companyVo.detailAddress"
            />
          </div>
          <div>
            <!-- <label for="companyPassChack">비밀번호확인</label> -->
            <input
              type="text"
              name=""
              id="companyPassChack"
              placeholder="대표 핸드폰번호"
              v-model="companyVo.companyHp"
            />
            <input type="button" value="번호인증" />
            <div class="companyHpChack">
              <input
                type="text"
                name=""
                id="companyPassChack"
                placeholder="인증번호"
              />
              <input type="button" value="확인" />
              <p>✅인증이 완료되었습니다.</p>
              <p>❌인증번호가 일치하지 않습니다.</p>
            </div>
          </div>
        </div>
        <div class="companyJoinButton">
          <button><router-link to="/">취소</router-link></button>
          <button type="submit">가입</button>
        </div>
      </form>
    </div>
    <!--companyJoinTitle-->
    <!-- <AppFooter/> -->
  </div>
  <AppFooter />
</template>

<script>
import "@/assets/css/Initialization.css";
import "@/assets/css/sr/company.css";
import "@/assets/css/hs/main.css";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "CompanyJoinView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      //업체정보
      companyVo: {
        businesNumber: "",
        companyName: "",
        companyDescription: "",
        companyId: "",
        companyPass: "",
        companyAddress: "",
        companyHp: "",
        //주소
        zonecode: "",
        roadAddress: "",
        jibunAddress: "",
        detailAddress: "",
      },
    };
  },
  methods: {
    DaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.companyVo.zonecode = data.zonecode;
          this.companyVo.roadAddress = data.roadAddress;
          this.companyVo.jibunAddress = data.jibunAddress;
        },
      }).open();
    },
  },
  created() {},
};
</script>

<style></style>
