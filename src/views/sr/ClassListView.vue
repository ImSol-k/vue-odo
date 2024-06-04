<template>
  <AppHeader @update="headerKeyword" />
  <div class="wrap">
    <div class="findClassBox">
      <div>
        <p v-if="isFind == 1">"{{ keyword }}"검색결과</p>
        <p v-else>주변클래스</p>
        <button v-on:click="MapOnOff">
          <span v-if="!isMap">지도로보기</span>
          <span v-else>리스트로보기</span>
        </button>
        <div class="classTypeSelect">
          <select name="" id="" v-model="type" @change="classType">
            <option :value="4" selected>전체클래스</option>
            <option :value="1">원데이</option>
            <option :value="2">정규</option>
            <option :value="3">상시</option>
          </select>
        </div>
      </div>

      <!-- 리스트로보기 -->
      <div class="findClassListBox clearfix" v-if="!isMap">
        <div v-if="classList.length > 0">
          <div class="classListOne" v-for="(c, i) in classList" :key="i">
            <router-link
              :to="`/classdetailpage/${c.classNo}`"
              class="listRouterLink"
            >
              <div class="classListBox">
                <img
                  :src="`${this.$store.state.apiBaseUrl}/upload/${c.classImage}`"
                  alt=""
                />
                <img
                  src="../../assets/images/icon/header_icons/active_like.png"
                  v-if="c.wish > 0"
                />
                <img
                  src="../../assets/images/icon/header_icons/like.png"
                  v-else
                />
              </div>
              <p class="sollocation">{{ c.classNameAddress }}</p>
              <p class="classListTitle">{{ c.className }}</p>
              <div class="listRreviewBox">
                <span class="liststarPoint">★</span>
                <span>{{ c.review }}</span>
                <span class="classListPrice">{{ c.classPrice }}원</span>
              </div>
            </router-link>
          </div>
        </div>
        <div v-else>
          <p>"{{ keyword }}"에 대한 결과가 없습니다.</p>
          <p>다시 검색해주세요</p>
        </div>
      </div>

      <!-- 지도로 보기 -->
      <div class="findClassListBox clearfix" v-else>
        <div class="findMapBox">
          <div v-if="classList.length > 0">
            <div class="classMapListOne" v-for="(c, i) in classList" :key="i">
              <router-link
                :to="`/classdetailpage/${c.classNo}`"
                class="listRouterLinkMap"
              >
                <div class="classListBox">
                  <img
                    :src="`${this.$store.state.apiBaseUrl}/upload/${c.classImage}`"
                    alt=""
                  />
                  <img
                    src="../../assets/images/icon/header_icons/active_like.png"
                    v-if="c.wish > 0"
                  />
                  <img
                    src="../../assets/images/icon/header_icons/like.png"
                    v-else
                  />
                </div>
                <div class="MapListTite">
                  <p>{{ c.className }}</p>
                  <div class="listRreviewBox">
                    <span class="liststarPoint">★</span>
                    <span>{{ c.review }}</span>
                  </div>
                  <p>{{ c.classNameAddress }}</p>
                  <p>{{ c.classIntro }}</p>
                </div>
              </router-link>
            </div>
          </div>
          <div v-else>
            <p>{{ keyword }}에 대한 결과가 없습니다.</p>
            <p></p>
          </div>
        </div>
        <Observer @show="paging"></Observer>
        <div class="classMap">
          <!-- <p>강남/ㅓ초</p> -->
          <!-- 지도 -->
          <div id="listMap" style="width: 485px; height: 900px"></div>
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
</template>
<script setup>
import Observer from "@/components/ObserverView.vue";
</script>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/sr/classList.css";
import axios from "axios";

export default {
  name: "ClassListView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      //1이면 키워드검색, 2면 주소검색
      isFind: this.$route.params.no,
      isMap: true,//지도로보기/리스트로보기
      type: 4,  //기본타입 전체불러오기
      keyword: "",
      classList: [],
      page: 0,  //페이징용

      // 카카오맵
      positions: [],
    };
  },
  mounted() {},
  methods: {
    whisPlus() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/wish`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + this.$store.state.token,
        },
        responseType: "json",
      })
        .then((response) => {
          if (response.data.result === "success") {
            console.log();
          } else {
            alert("통신오류");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    paging() {
      this.page++;
      this.classType();
    },
    headerKeyword(keyword) {
      console.log("키워드로 검색");
      console.log(keyword);
      this.classList = [];
      this.keyword = keyword;
      this.isFind = 1;
      this.classType();
    },
    classType() {
      if (this.keyword != '') {
        
        console.log("키워드: " + this.keyword);
        axios({
          method: "get",
          url: `${this.$store.state.apiBaseUrl}/odo/company/classlist`, //SpringBoot주소
          headers: { "Content-Type": "application/json; charset=utf-8" },
          params: {
            userNo: this.$store.state.authUser.userNo,
            isFind: this.isFind,
            keyword: this.keyword,
            classType: this.type,
            page: this.page,
          },
          responseType: "json",
        })
          .then((response) => {
            console.log(response.data.apiData);
            if (
              response.data.result == "success" &&
              response.data.apiData != null
            ) {
              this.classList.push(...response.data.apiData);
              /*
              console.log("==================================");
              console.log(response.data.apiData);
              console.log(this.positions);
              console.log("==================================");
              */
              this.classList.forEach((list) => {
                let temp = list.classNameAddress.split(" ");
                list.classNameAddress = temp[0];
                if (list.classNameAddress.length == 2) {
                  list.classNameAddress += "/" + temp[1];
                }
                if (list.classIntro.length >= 20) {
                  list.classIntro = list.classIntro.substr(0, 20) + "...";
                }
                if (!this.isMap && list.className.length > 12) {
                  list.className = list.className.substr(0, 12) + "..";
                }
  
                //포지션 추가
                this.positions.push({
                  title: list.className,
                  lating: new kakao.maps.LatLng(
                    list.classLatitude,
                    list.classLongitutde
                  ),
                });
                // console.log(list.className);
              });
  
              // //마커 이미지 주소
              // var imageSrc =
              //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
              // // 마커 이미지의 이미지 크기 입니다
              // var imageSize = new kakao.maps.Size(24, 35);
              // // 마커 이미지를 생성합니다
              // // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            } else {
              alert("검색정보 없음");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    //지도
    MapOnOff() {
      this.isMap = !this.isMap;

      //리스트->지도 변환시 맵 새로그려주기
      if (this.isMap) {
        this.$nextTick(() => {
          this.initMap();
        });
      }
    },
    initMap() {
      //현재위치 얻어오기
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // console.log("현재위치");
            // var latitude = 37.5151081873838;
            // var longitude = 127.107222748544;
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            this.displayMap(latitude, longitude);
          },
          (error) => {
            console.error("Error occurred. Error code: " + error.code);
            // 기본 위치로 강남
            this.displayMap(37.498287, 127.027064);
          }
        );
      } else {
        // Geolocation을 지원하지 않으면 기본 위치 강남
        this.displayMap(37.498287, 127.027064);
      }
    },
    displayMap(latitude, longitude) {
      // console.log("displayMap")
      var mapContainer = document.getElementById("listMap"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      // console.log("map: " + mapContainer);
      //지도생성
      var map = new kakao.maps.Map(mapContainer, mapOption);
      //객체생성
      var geocoder = new kakao.maps.services.Geocoder();
      var coord = new kakao.maps.LatLng(latitude, longitude);

      console.log("isFind: "+this.isFind);
      if (this.isFind == "2") {
        var callback = function (result, status) {
          console.log(status); // 상태를 확인하는 로그
          if (status === kakao.maps.services.Status.OK) {
            if (result.length > 0) {
              var pos = result[0].road_address
                ? result[0].road_address.address_name
                : result[0].address.address_name;
              pos = pos.replace(/-|1|2|3|4|5|6|7|8|9|0/g, "");
              pos = pos.split(" ");
              this.keyword = pos[1];
              console.log("Road Address: " + this.keyword);
              // this.classType();
            } else {
              console.error("Geocoding result is empty");
            }
          } else {
            console.error("Geocoding failed with status: " + status);
          }
        }.bind(this);
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
      }

      //핑찍기
      this.positions = [
        {
          title: "현재위치",
          latlng: new kakao.maps.LatLng(latitude, longitude),
        },
      ];

      this.positions.forEach(function (pos) {
        var marker = new kakao.maps.Marker({
          position: pos.latlng,
        });

        marker.setMap(map);
      });
      // console.log("==================================");
      // console.log(this.positions);
      // console.log("==================================");
      
    },
    // callback(result, status) {
    //   //상태체크
    //   console.log(status);
    //   if (status === kakao.maps.services.Status.OK) {
    //     if (result.length > 0) {
    //       var pos = result[0].road_address
    //         ? result[0].road_address.address_name
    //         : result[0].address.address_name;
    //       pos = pos.replace(/-|1|2|3|4|5|6|7|8|9|0/g, "");
    //       pos = pos.split(" ");
    //       this.keyword = pos[1];
    //       console.log("Road Address: " + this.keyword);
    //     } else {
    //       console.error("Geocoding result is empty");
    //     }
    //   } else {
    //     console.error("Geocoding failed with status: " + status);
    //   } //
    // },
  },
  created() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");

      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b356b366e6bedbfd5618c9752b2dd60e";
      document.head.appendChild(script);
    }
  },
};
</script>

<style></style>
