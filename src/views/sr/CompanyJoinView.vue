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
      <form action="" v-on:submit.prevent="companyJoin">
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
            <p v-if="isId">✅사용 가능한 아이디입니다.</p>
            <p v-else-if="isId == null">아이디를 입력해주세요.</p>
            <p v-else>❌사용중인 아이디입니다.</p>
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
            <p v-if="isPass">✅비밀번호 일치</p>
            <p v-else-if="isPass == null">비밀번호를 입력해주세요,</p>
            <p v-else>❌비밀번호가 일치하지 않습니다.</p>
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
              <p v-if="isHp">✅인증이 완료되었습니다.</p>
              <p v-else-if="isHp == null">인증번호를 입력해주세요.</p>
              <p v-else>❌인증번호가 일치하지 않습니다.</p>
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
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios from "axios";

export default {
  name: "CompanyJoinView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      isId: null,
      isPass: null,
      isHp: null,
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
        y: "", //위도
        x: "", //경도
      },
    };
  },
  methods: {
    companyJoin() {
      console.log("companyJoin");
      axios({
        method: "post",
        url: `${this.$store.state.apiBaseUrl}/odo/company/join`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        data: this.companyVo,
        responseType: "json",
      })
        .then((response) => {
          console.log(response); //수신데이터
        })
        .catch((error) => {
          console.log(error);
        });
    },
    DaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          //주소 저장
          this.companyVo.zonecode = data.zonecode;
          this.companyVo.roadAddress = data.roadAddress;
          this.companyVo.jibunAddress = data.jibunAddress;
          // //검색된주소 위도, 경도로 저장
          var geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(
            this.companyVo.roadAddress,
            (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                // 주소 검색 결과가 성공일 경우
                this.companyVo.y = result[0].y; // 위도
                this.companyVo.x = result[0].x; // 경도
                console.log(
                  "위도:",
                  this.companyVo.y,
                  "경도:",
                  this.companyVo.x
                );
              } else {
                // 주소 검색 실패
                console.error("주소 검색 실패");
              }
            }
          );
        },
      }).open();
    },
  },
  created() {},
};
</script>

<style></style>
