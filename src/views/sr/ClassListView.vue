<template>
  <AppHeader @update="headerKeyword" />
  <div class="wrap">
    <div class="findClassBox">
      <div>
        <p v-if="isFind == 1">"{{ keyword }}"검색결과</p>
        <p v-else>"{{ keyword }}"주변클래스</p>
        <button v-on:click="MapOnOff">
          <span v-if="!isMap">지도로 보기</span>
          <span v-else>리스트로 보기</span>
        </button>
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
              </div>
              <p class="sollocation">{{ c.classNameAddress }}</p>
              <p class="classListTitle">{{ c.className }}</p>
              <div class="listRreviewBox">
                <span class="liststarPoint">★</span>
                <span>{{ c.review }}</span>
                <!-- <span class="classListPrice">{{ c.classPrice }}원</span> -->
              </div>
            </router-link>
            <img
              src="../../assets/images/redheart.svg"
              v-if="c.wish > 0"
              v-on:click="whisPM(1, c.classNo, i)"
            />
            <img
              src="../../assets/images/whiteheart.svg"
              v-else
              v-on:click="whisPM(2, c.classNo, i)"
            />
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
              <img
                src="../../assets/images/redheart.svg"
                v-if="c.wish > 0"
                v-on:click="whisPM(1, c.classNo, i)"
              />
              <img
                src="../../assets/images/whiteheart.svg"
                v-else
                v-on:click="whisPM(2, c.classNo, i)"
              />
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
<!-- <script setup>
import Observer from "@/components/ObserverView.vue";
</script> -->
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/sr/classList.css";
import axios from "axios";
import Observer from "@/components/ObserverView.vue";

export default {
  name: "ClassListView",
  components: { AppHeader, AppFooter, Observer },
  data() {
    return {
      map: "",
      //1이면 키워드검색, 2면 주소검색
      isFind: this.$route.params.no,
      isMap: true, //지도로보기/리스트로보기
      type: 4, //기본타입 전체불러오기
      keyword: "",
      classList: [],
      page: 0, //페이징용

      // 카카오맵 포지션
      positions: [],

      //기본좌표 강남
      latitude: 37.498287,
      longitude: 127.027064,
    };
  },
  mounted() {
    /********************************************************************
     * 카카오맵
     */
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
  methods: {
    /********************************************************************
     * 위시 추가/ 삭제
     *  1 - 삭제
     *  2 - 추가
     */
    whisPM(num, classNo, i) {
      if (this.$store.state.token != null) {
        if (num == 1) {
          axios({
            method: "delete",
            url: `${this.$store.state.apiBaseUrl}/odo/company/wish/${classNo}`,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: "Bearer " + this.$store.state.token,
            },
            responseType: "json",
          })
            .then((response) => {
              if (response.data.result === "success") {
                this.classList[i].wish = 0;
              } else {
                alert("통신오류");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          axios({
            method: "post",
            url: `${this.$store.state.apiBaseUrl}/odo/company/wish/${classNo}`,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: "Bearer " + this.$store.state.token,
            },
            responseType: "json",
          })
            .then((response) => {
              if (response.data.result === "success") {
                this.classList[i].wish = 1;
              } else {
                alert("통신오류");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        alert("로그인후 이용가능");
      }
    },
    paging() {
      this.page++;
      this.classType();
    },

    /********************************************************************
     * 클래스 리스트 불러오기
     * isFind == 1 > 키워드검색
     * siFind == 2 > 주변클래스찾기
     */
    classType() {
      if (this.page == 1) {
        this.classList = [];
      }
      if (this.keyword != "") {
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
            classLatitude: this.latitude,
            classLongitutde: this.longitude,
          },
          responseType: "json",
        })
          .then((response) => {
            if (
              response.data.result == "success" &&
              response.data.apiData != null
            ) {
              if (Array.isArray(response.data.apiData)) {
                this.classList.push(...response.data.apiData);
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
                    latlng: new kakao.maps.LatLng(
                      list.classLatitude,
                      list.classLongitutde
                    ),
                  });
                });
                this.latitude = this.classList[0].classLatitude;
                this.longitude = this.classList[0].classLongitutde;
                this.displayMap(
                  this.classList[0].classLatitude,
                  this.classList[0].classLongitutde
                );
              } else {
                this.classList = response.data.apiData;
              }
              /* eslint-disable */
            } else {

            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    /********************************************************************
     * 지도 on/off
     */
    MapOnOff() {
      this.isMap = !this.isMap;

      //리스트->지도 변환시 맵 새로그려주기
      if (this.isMap) {
        this.$nextTick(() => {
          this.initMap();
        });
      }
    },

    /********************************************************************
     * 카카오 맵관련 메소드
     */
    initMap() {
      
      //현재위치 얻어오기
      if (this.isFind == 2) {
        //객체생성
        var geocoder = new kakao.maps.services.Geocoder();
        var coord = new kakao.maps.LatLng(this.latitude, this.longitude);
        var callback = function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            if (result.length > 0) {
              var pos = result[0].road_address
                ? result[0].road_address.address_name
                : result[0].address.address_name;
              pos = pos.replace(/-|1|2|3|4|5|6|7|8|9|0/g, "");
              pos = pos.split(" ");
              var center = this.map.getCenter();
              this.latitude = center.La;
              this.longitude = center.Ma;
              this.keyword = pos[1];
              this.classType();
            } else {

            }
          } else {

          }
        }.bind(this);
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
        
      }
      //맵을 그린다 기본위치를 표시------------------------------------------------------------
      var mapContainer = document.getElementById("listMap"); // 지도를 표시할 div
      var mapOption = {
        //옵션세팅
        center: new kakao.maps.LatLng(this.latitude, this.longitude), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };
      //지도생성
      this.map = new kakao.maps.Map(mapContainer, mapOption);
    },
    displayMap() {
      //마커 이미지
      var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < this.positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: this.positions[i].latlng, // 마커를 표시할 위치
          title: this.positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(this.map);
      }

      this.map.setCenter(this.positions[0].latlng);
    },
  },
  created() {
    // 쿼리 파라미터로부터 keyword 값을 받아서 this.keyword에 저장
    this.keyword = this.$route.query.keyword || "";
  },
};
</script>

<style></style>
