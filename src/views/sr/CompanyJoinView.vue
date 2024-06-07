<template>
  <AppHeader />
  <div class="wrap">
    <div class="companyJoinTitle">
      <h1>사업자 가입</h1>
      <div class="companyJoinImg">
        <img :src="img" alt="" />
        <div>
          <p>프로필사진</p>
          <input type="file" name="" id="" v-on:change="imgFile" />
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
              v-model="companyVo.companyBn"
              placeholder="사업자번호"
            />
            <input
              type="button"
              value="사업자 인증"
              v-on:click="businessNumber"
            />
            <p v-if="isBn">✅인증되었습니다</p>
            <p v-else-if="isBn == null">사업자번호를 입력해주세요.</p>
            <p v-else>❌다시 인증해주세요</p>
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
              v-model="companyVo.companyIntro"
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
            <input type="button" value="중복확인" @click="companyIdChack" />
            <p v-if="isId">✅사용 가능한 아이디입니다.</p>
            <p v-else-if="isId == null">아이디를 입력해주세요.(5~12글자)</p>
            <p v-else>❌사용중인 아이디입니다.</p>
          </div>
          <div>
            <!-- <label for="companyPass">비밀번호</label> -->
            <input
              type="password"
              name=""
              id="companyPass"
              placeholder="비밀번호"
              v-model="companyPassChack"
              minlength="8"
              maxlength="16"
            />
            <p>비밀번호를 입력해주세요.(8~16글자)</p>
          </div>
          <div>
            <!-- <label for="companyPassChack">비밀번호확인</label> -->
            <input
              type="password"
              name=""
              id="companyPassChack"
              placeholder="비밀번호확인"
              v-model="companyVo.companyPass"
            />
            <p
              v-if="
                companyPassChack != '' &&
                companyPassChack == companyVo.companyPass
              "
            >
              ✅비밀번호 일치
            </p>
            <p v-else>❌비밀번호가 일치하지 않습니다.</p>
          </div>
          <div class="companyAddress">
            <input
              type="text"
              id="companyZipCode"
              placeholder="우편번호"
              v-model="companyVo.companyZipCode"
              readonly
            />
            <input
              type="button"
              v-on:click.prevent="DaumPostcode()"
              value="우편번호 찾기"
            /><br />
            <input
              type="text"
              id="companyNameAddress"
              placeholder="도로명주소"
              v-model="companyVo.companyNameAddress"
              readonly
            />
            <input
              type="text"
              id="companyNumAddress"
              placeholder="지번주소"
              v-model="companyVo.companyNumAddress"
              readonly
            />
            <span id="guide" style="color: #999; display: none"></span>
            <input
              type="text"
              id="companyDetailAddress"
              placeholder="상세주소"
              v-model="companyVo.companyDetailAddress"
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
      img: "",
      isBn: null,
      isId: null,
      isHp: null,
      //업체정보
      companyPassChack: "",
      companyVo: {
        companyBn: "",
        companyName: "",
        companyIntro: "",
        companyId: "",
        companyPass: "",
        companyHp: "",
        companyImage: "",
        //주소
        companyZipCode: "",
        companyNameAddress: "",
        companyNumAddress: "",
        companyDetailAddress: "",
        companyLatitude: "", //위도
        companyLongitude: "", //경도
      },
    };
  },
  methods: {
    /********************************************************************
     * 사업자 회원가입
     */
    companyJoin() {
      // console.log("companyJoin");

      // console.log(typeof(this.companyVo.companyLatitude) );
      const formData = new FormData();
      formData.append("companyBn", this.companyVo.companyBn);
      formData.append("companyName", this.companyVo.companyName);
      formData.append("companyIntro", this.companyVo.companyIntro);
      formData.append("companyId", this.companyVo.companyId);
      formData.append("companyPass", this.companyVo.companyPass);
      formData.append("companyHp", this.companyVo.companyHp);
      formData.append("companyFile", this.companyVo.companyImage); //파일
      formData.append("companyZipCode", this.companyVo.companyZipCode);
      formData.append("companyNameAddress", this.companyVo.companyNameAddress);
      formData.append("companyNumAddress", this.companyVo.companyNumAddress);
      formData.append(
        "companyDetailAddress",
        this.companyVo.companyDetailAddress
      );
      formData.append("companyLatitude", this.companyVo.companyLatitude);
      formData.append("companyLongitude", this.companyVo.companyLongitude);

      if (this.companyVo.companyBn == "") {
        alert("사업자번호를 입력해 주세요");
      } else if (this.companyVo.companyName == "") {
        alert("업체명을 입력해 주세요");
      } else if (this.companyVo.companyIntro == "") {
        alert("업체소개를 입력해 주세요");
      } else if (this.companyVo.companyId == "") {
        alert("아이디를 입력해 주세요");
      } else if (this.companyVo.companyPass == "") {
        alert("비밀번호를 입력해 주세요");
      } else if (this.companyVo.zonecode == "") {
        alert("주소를 입력해 주세요");
      } else if (this.companyVo.detailAddress == "") {
        alert("상세주소를 입력해 주세요");
      } else if (this.companyVo.companyHp == "") {
        alert("핸드폰번호를 입력해 주세요");
      } else {
        if (!this.isBn) {
          alert("사업자번호인증 해주세요.");
        } else if (!this.isId) {
          alert("아이디 중복확인을 해주세요");
        } else {
          axios({
            method: "post",
            url: `${this.$store.state.apiBaseUrl}/odo/company/join`, //SpringBoot주소
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
            responseType: "json",
          })
            .then((response) => {
              // console.log(response); //수신데이터
              if (response.data.result == "success") {
                alert("회원가입에 성공했습니다.");
                this.$router.push("/login/company");
              } else {
                alert("회원가입에 실패했습니다.\n정보를 다시 입력해주세요.");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },

    /********************************************************************
     * 사업자번호 인증API
     */
    businessNumber() {
      // console.log("businessNumber");
      const data = { b_no: [this.companyVo.companyBn] };
      axios
        .post(
          "https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=kLwu8It5iiIWVEWui%2FFpNx7qI2XcPU6H6lfgnHJ1RGVI0nNAR9yfRk7eWA8m9ncjMV%2FSeJ2g36xCarutBsixGw%3D%3D",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer GBoS9ElaWUq6vtcfzi1g5xvqS0tBleTdBxI7d6Sal2YAjx+TVLTIID3c+ul1j0bzkUn/AqoXjbXoKI0YZbe7wg==",
            },
          }
        )
        .then((response) => {
          // console.log("Response:", response.data);
          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            const valid = response.data.data[0].b_stt_cd;
            if (valid === "01") {
              this.isBn = true;
            } else {
              this.isBn = false;
            }
          } else {
            this.isBn = false;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.isBn = false;
        });
    },

    /********************************************************************
     * 사업자가입시 아이디 중복체크
     */
    companyIdChack() {
      if (
        this.companyVo.companyId.length >= 5 &&
        this.companyVo.companyId.length <= 12
      ) {
        axios({
          method: "get",
          url: `${this.$store.state.apiBaseUrl}/odo/company/id`, //SpringBoot주소
          headers: { "Content-Type": "application/json; charset=utf-8" },
          params: {
            companyId: this.companyVo.companyId,
          },
          responseType: "json",
        })
          .then((response) => {
            // console.log(response); //수신데이터
            if (response.data.result == "success") {
              this.isId = true;
            } else {
              this.isId = false;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("길이가 너무 길거나 짧습니다.");
      }
    },

    /********************************************************************
     * 회사 이미지 업로드
     */
    imgFile(event) {
      this.companyVo.companyImage = event.target.files[0];

      // console.log(this.companyVo.companyImage);

      const reader = new FileReader();
      reader.onload = (e) => {
        this.img = e.target.result;
      };

      if (this.companyVo.companyImage) {
        reader.readAsDataURL(this.companyVo.companyImage);
      }
    },

    /********************************************************************
     * 주소API
     */
    DaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          //주소 저장
          this.companyVo.companyZipCode = data.zonecode;
          this.companyVo.companyNameAddress = data.roadAddress;
          this.companyVo.companyNumAddress = data.jibunAddress;
          // //검색된주소 위도, 경도로 저장
          var geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(
            this.companyVo.companyNameAddress,
            (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                // 주소 검색 결과가 성공일 경우
                this.companyVo.companyLatitude = result[0].y; // 위도
                this.companyVo.companyLongitude = result[0].x; // 경도
                // console.log(
                //   "위도:",
                //   this.companyVo.companyLatitude,
                //   "경도:",
                //   this.companyVo.companyLongitude
                // );
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
