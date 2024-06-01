<template>
  <AppHeader @update="headerKeyword" />
  <div class="wrap">
    <div class="findClassBox">
      <div>
        <p v-if="isFind == 1">"서울"검색결과</p>
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
        <div class="classListOne" v-for="(c, i) in classList" :key="i">
          <router-link to="/classdetailpage" class="listRouterLink">
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

      <!-- 지도로 보기 -->
      <div class="findClassListBox clearfix" v-else>
        <div class="findMapBox">
          <div class="classMapListOne" v-for="(c, i) in classList" :key="i">
            <router-link to="/classdetailpage" class="listRouterLinkMap">
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
        <div class="classMap">
          <!-- <p>강남/ㅓ초</p> -->
          <div id="listMap" style="width: 485px; height: 900px"></div>
        </div>
      </div>
    </div>
  </div>
  <Observer @show="paging"></Observer>
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
      isFind: this.$route.params.no,
      isMap: true,
      type: 4,
      keyword: "",
      classList: [],
      page: 0,
      // 카카오맵
      positions: [],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");

      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dcd5445d7a7dc0572e91ed1fd7ad2d2b";
      document.head.appendChild(script);
    }
  },
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
    headerKeyword(message) {
      console.log(message);
      this.keyword = message;
      this.isFind = 2;
      this.classType();
    },
    classType() {
      console.log(this.type);
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
          if (
            response.data.result == "success" &&
            response.data.apiData != null
          ) {
            this.classList.push(...response.data.apiData);
            this.classList.forEach((list) => {
              let temp = list.classNameAddress.split(" ");
              list.classNameAddress = temp[0];
              list.classNameAddress += "/" + temp[1];
              if (list.classIntro.length >= 20) {
                list.classIntro = list.classIntro.substr(0, 20) + "...";
              }
              if (!this.isMap && list.className.length > 12) {
                list.className = list.className.substr(0, 12) + "..";
              }
            });
          } else {
            alert("검색정보 없음");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //지도
    MapOnOff() {
      this.isMap = !this.isMap;
      if (this.isMap) {
        this.$nextTick(() => {
          this.initMap();
        });
      }
    },
    initMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            var latitude = 37.5151081873838;
            var longitude = 127.107222748544;
            // var latitude = position.coords.latitude;
            // var longitude = position.coords.longitude;
            this.displayMap(latitude, longitude);
            // this.displayMap(latitude, longitude);
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
      var mapContainer = document.getElementById("listMap"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      //지도생성
      var map = new kakao.maps.Map(mapContainer, mapOption);
      //객체생성
      var geocoder = new kakao.maps.services.Geocoder();
      var coord = new kakao.maps.LatLng(latitude, longitude);
      geocoder.coord2Address(coord.getLng(), coord.getLat(), this.callback);

      //핑찍기
      this.positions = [
        {
          latlng: new kakao.maps.LatLng(latitude, longitude),
        },
      ];
      this.positions.forEach(function (pos) {
        var marker = new kakao.maps.Marker({
          position: pos.latlng,
        });
        marker.setMap(map);
      });
    },
    callback(result, status) {
      //상태체크
      if (status === kakao.maps.services.Status.OK) {
        if (result.length > 0) {
          var pos = result[0].road_address
            ? result[0].road_address.address_name
            : result[0].address.address_name;
          pos = pos.replace(/-|1|2|3|4|5|6|7|8|9|0/g, "");
          pos = pos.split(" ");
          this.keyword = pos[1];
          console.log("Road Address: " + this.keyword);
        } else {
          console.error("Geocoding result is empty");
        }
      } else {
        console.error("Geocoding failed with status: " + status);
      } //

      //리스트불러오기
      this.classType();
    },
  },
  created() {
    this.classType();
  },
};
</script>

<style></style>
