<template>
  <!--업체 소개페이지-->
  <!--헤더-->

  <HostHeader />
  <div class="wrap">
    <!-- <div>
            <div class="clearfix cover20">
                <div class="preview-image">
                    <img class="img20" :src="previewImage">
                </div>

                <div>
                    <p class="p20">업체명</p>
                </div>

                <div class="input">
                    <input type="file" id="profile" name="profile" class="file-input" style="font-size: 20px;"
                        @change="handleImageChange">
                </div>
            </div>
        </div> -->
    <!--소개글-->
    <div class="companyJoinTitle">
      <h1>{{this.companyVo.companyName}}</h1>
      <div class="companyJoinImg">
        <div class="preview-image">
          <img v-bind:src="previewImage" style="width: 180px; height: 180px; border-radius: 10px;">
        </div>

        <div class="input">
          <input type="file" id="profile" name="profile" class="file-input" style="width: auto;"
            @change="handleImageChange">
        </div>
      </div>
      <div class="companyJoinInfo">
        <div>
          <!-- <label for="companyNo">사업자번호</label> -->
          <input type="text" name="" id="businesNumber" v-model="companyVo.companyBn" placeholder="사업자번호" />
          <input type="button" value="사업자 인증" v-on:click="businessNumber" />
          <p v-if="isBn">✅인증되었습니다</p>
          <p v-else-if="isBn == null">사업자번호를 입력해주세요.</p>
          <p v-else>❌다시 인증해주세요</p>
        </div>
        <div>
          <!-- <label for="companyName">업체명</label> -->
          <input type="text" name="" id="companyName" v-model="companyVo.companyName" placeholder="업체명" />
        </div>
        <div>
          <!-- <label for="companyName">업체명</label> -->
          <textarea type="text" id="companyDescription" v-model="companyVo.companyIntro" placeholder="업체소개">
            </textarea>
        </div>
        <div>
          <!-- <label for="companyId">아이디</label> -->
          <input type="text" name="" id="companyId" v-model="companyVo.companyId" placeholder="아이디" />
        </div>
        <div>
          <!-- <label for="companyPass">비밀번호</label> -->
          <input type="password" name="" id="companyPass" placeholder="비밀번호" v-model="companyPassChack" minlength="8"
            maxlength="16" />
          <p>비밀번호를 입력해주세요.(8~16글자)</p>
        </div>
        <div>
          <!-- <label for="companyPassChack">비밀번호확인</label> -->
          <input type="password" name="" id="companyPassChack" placeholder="비밀번호확인" v-model="companyVo.companyPass" />
          <p v-if="companyPassChack != '' &&
            companyPassChack == companyVo.companyPass
            ">
            ✅비밀번호 일치
          </p>
          <p v-else>❌비밀번호가 일치하지 않습니다.</p>
        </div>
        <div class="companyAddress">
          <input type="text" id="companyZipCode" placeholder="우편번호" v-model="companyVo.companyZipCode" readonly />
          <input type="button" v-on:click.prevent="DaumPostcode()" value="우편번호 찾기" /><br />
          <input type="text" id="companyNameAddress" placeholder="도로명주소" v-model="companyVo.companyNameAddress"
            readonly />
          <input type="text" id="companyNumAddress" placeholder="지번주소" v-model="companyVo.companyNumAddress" readonly />
          <span id="guide" style="color: #999; display: none"></span>
          <input type="text" id="companyDetailAddress" placeholder="상세주소" v-model="companyVo.companyDetailAddress" />
        </div>
        <div>
          <!-- <label for="companyPassChack">비밀번호확인</label> -->
          <input type="text" name="" id="companyPassChack" placeholder="대표 핸드폰번호" v-model="companyVo.companyHp" />
        </div>
      </div>
      <div class="companyJoinButton">
        <button><router-link to="/companypage">취소</router-link></button>
        <button v-on:click="modify">수정</button>
      </div>
      <!--
        <div id="map">
        
        </div>
        -->

    </div>
  </div>
  <AppFooter />
</template>
<script>
import HostHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/jh.css";
import "@/assets/css/Initialization.css";

import axios from "axios";

export default {
  components: {
    HostHeader,
    AppFooter,
  },
  data() {
    return {
      previewImage: "",
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
      file2: '',
      message: "",
      accessToken:
        "EAAN3krJLRh4BOygZACSanLiJZBMg51rLvXr7z0qYo0vJoUAHh090BzGVB02229haKuaqulu9MiG64ERZCFojgoFJ4OHe5QXOszYXRrqsZB7Al4yY7HKV7An7PC3R3rLjEXb0QQg1CTCXZA5uN9SZAtB3sLBRoTa4VT7pU74KBZBEP4lEkZAMl6hK0IsjYfwKufg7", // 페이지 액세스 토큰
      pageId: "320016071194453", // 페이스북 페이지 ID
    };
  },

  methods: {
    modify() {
      const formData = new FormData();

      if(this.file2 == ''){
				// console.log('파일 없음');
			} else {
				formData.append('companyFile', this.file2);
			}

      formData.append("companyBn", this.companyVo.companyBn);
      formData.append("companyName", this.companyVo.companyName);
      formData.append("companyIntro", this.companyVo.companyIntro);
      formData.append("companyId", this.companyVo.companyId);
      formData.append("companyPass", this.companyVo.companyPass);
      formData.append("companyHp", this.companyVo.companyHp);
      //formData.append("companyFile", this.companyVo.companyImage); //파일
      formData.append("companyImage", this.companyVo.companyImage);
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
      } else if(this.companyPassChack == "") {
        alert("비밀번호를 입력해 주세요");
      }else if (this.companyVo.companyPass == null) {
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
        } else {
          // console.log(this.companyVo);
          axios({
            method: "put",
            url: `${this.$store.state.apiBaseUrl}/odo/companymodify`,
            headers: { "Content-Type": "multipart/form-data", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
            data: formData,
            responseType: "json",
          })
          /* eslint-disable */
            .then((response) => {
              // console.log(response); //수신데이터


              //this.$router.push('/comapnypage');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
    businessNumber() {
      //console.log("businessNumber");
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
          //console.log("Response:", response.data);

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

    handleImageChange(event) {
      // 선택한 파일
      this.profile = event.target.files[0];
      this.file2 = event.target.files[0];
      //console.log(this.companyVo.companyImage)
      // FileReader 객체를 사용하여 이미지를 읽음
      const reader = new FileReader();

      // 읽기가 완료된 후 실행되는 콜백 함수
      reader.onload = (e) => {
        // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
        this.previewImage = e.target.result;
        
      };

      // 파일을 읽음
      if (this.profile) {
        reader.readAsDataURL(this.profile);
      }
    },

    map() {
      const script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=z8bkhu391h";

      script.async = true;

      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        // 네이버 지도 생성
        new window.naver.maps.Map("map", {
          center: new window.naver.maps.LatLng(37.5112, 127.0981),
          zoom: 13,
          mapTypeControl: true,
        });
        new window.naver.maps.Marker({
          // 생성될 마커의 위치
          position: new window.naver.maps.LatLng(37.5112, 127.0981),
          map: new window.naver.maps.Map("map", {
            center: new window.naver.maps.LatLng(37.5112, 127.0981),
            zoom: 13,
            mapTypeControl: true,
          }),
        });
      };
    },
    list() {
      axios({
        method: 'get', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/companymodify`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.cToken }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: this.$store.state.authUser.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        //console.log(response); //수신데이타
        this.companyVo = response.data.apiData;
        // console.log(this.companyVo);
        this.previewImage = `${this.$store.state.apiBaseUrl}/upload/${this.companyVo.companyImage}`;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    // 네이버 지도 API 로드
  },

  created() {
    //this.map();
    this.list();
  },
};
</script>

<style></style>
