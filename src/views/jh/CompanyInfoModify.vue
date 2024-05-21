<template>
  <!--업체 소개페이지-->
  <!--헤더-->

  <AppHeader />
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
      <h1>(주)레모나</h1>
      <div class="companyJoinImg">
        <img src="@/assets/images/icon/man_icon.png" alt="" />
        <div>
          <p>업체사진변경</p>
          <input type="file" name="" id="" />
        </div>
      </div>
      <div class="companyJoinInfo">
        <div>
          <!-- <label for="companyNo">사업자번호</label> -->
          <input
            type="text"
            name=""
            id="businesNumber"
            placeholder="사업자번호"
          />
        </div>
        <div>
          <!-- <label for="companyName">업체명</label> -->
          <input type="text" name="" id="companyName" placeholder="업체명" />
        </div>
        <div>
          <!-- <label for="companyName">업체명</label> -->
          <textarea
            type="text"
            id="companyDescription"
            placeholder="업체소개"
          ></textarea>
        </div>
        <div>
          <!-- <label for="companyId">아이디</label> -->
          <input type="text" name="" id="companyId" placeholder="아이디" value="asfd3" disabled/>
        </div>
        <div>
          <!-- <label for="companyPass">비밀번호</label> -->
          <input type="text" name="" id="companyPass" placeholder="비밀번호" />
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
        <button>취소</button>
        <button>수정</button>
      </div>
      <!--
        <div id="map">
        
        </div>
        -->
      <div>
        <h1>Post to Facebook Page</h1>
        <input v-model="message" placeholder="Write your post here" />
        <button @click="test">Post</button>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/jh.css";
import "@/assets/css/Initialization.css";

import axios from "axios";
import Swal from "sweetalert2";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      previewImage: require("@/assets/images/logo.png"),
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
      message: "",
      accessToken:
        "EAAN3krJLRh4BOygZACSanLiJZBMg51rLvXr7z0qYo0vJoUAHh090BzGVB02229haKuaqulu9MiG64ERZCFojgoFJ4OHe5QXOszYXRrqsZB7Al4yY7HKV7An7PC3R3rLjEXb0QQg1CTCXZA5uN9SZAtB3sLBRoTa4VT7pU74KBZBEP4lEkZAMl6hK0IsjYfwKufg7", // 페이지 액세스 토큰
      pageId: "320016071194453", // 페이스북 페이지 ID
    };
  },

  methods: {
    test() {
      Swal.fire({
        title: "sdf",
      });
    },
    postToFacebook() {
      const url = `https://graph.facebook.com/${this.pageId}/feed`;
      const params = {
        message: this.message,
        access_token: this.accessToken,
      };

      axios
        .post(url, null, { params })
        .then((response) => {
          console.log("Post successful:", response.data);
        })
        .catch((error) => {
          console.error("Error posting to Facebook:", error);
        });
    },
    /*
        DaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    //주소 저장
                    this.companyVo.zonecode = data.zonecode;
                    this.companyVo.roadAddress = data.roadAddress;
                    this.companyVo.jibunAddress = data.jibunAddress;
                    // //검색된주소 위도, 경도로 저장
                    var geocoder = new window.kakao.maps.services.Geocoder();
                    geocoder.addressSearch(this.companyVo.roadAddress, (result, status) => {
                        if (status === window.kakao.maps.services.Status.OK) {
                            // 주소 검색 결과가 성공일 경우
                            this.companyVo.y = result[0].y; // 위도
                            this.companyVo.x = result[0].x; // 경도
                            console.log("위도:", this.companyVo.y, "경도:", this.companyVo.x);
                            // 여기서 위도와 경도를 사용하여 원하는 작업을 수행할 수 있습니다.
                        } else {
                            // 주소 검색 실패
                            console.error("주소 검색 실패");
                        }
                    });
                },
            }).open();
        },
        */
    handleImageChange(event) {
      // 선택한 파일
      this.profile = event.target.files[0];

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
  },
  mounted() {
    // 네이버 지도 API 로드
  },

  created() {
    //this.map();
  },
};
</script>

<style></style>
