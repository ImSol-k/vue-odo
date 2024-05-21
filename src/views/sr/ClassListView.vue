<template>
  <AppHeader />
  <div class="wrap">
    <div class="findClassBox">
      <div>
        <p><span>"서울"</span>검색결과(<span>233건</span>)</p>
        <button v-on:click="MapOnOff">
          <span v-if="!isMap">지도로보기</span>
          <span v-else>리스트로보기</span>
        </button>
        <div class="classTypeSelect">
          <select name="" id="">
            <option value="" selected>전체클래스</option>
            <option value="">원데이</option>
            <option value="">정규</option>
            <option value="">상시</option>
          </select>
        </div>
      </div>

      <!-- 리스트로보기 -->
      <div class="findClassListBox clearfix" v-if="!isMap">
        <div class="classListOne" v-for="i in 18" :key="i">
          <router-link to="/classdetailpage" class="listRouterLink">
            <div class="classListBox">
              <img src="../../assets/images/hs/main_slide_3.jpg" alt="" />
              <img
                src="../../assets/images/icon/header_icons/like.png"
                alt=""
              />
            </div>
            <p class="location">경기/성남</p>
            <p class="classTitle">소풍을 즐기는..</p>
            <div class="listRreviewBox">
              <span class="liststarPoint" v-for="i in 5" :key="i">★</span>
              <span>23</span>
            </div>
            <p class="class-price">무료</p>
          </router-link>
        </div>
      </div>

      <!-- 지도로 보기 -->
      <div class="findClassListBox clearfix" v-else>
        <div class="findMapBox">
          <div class="classMapListOne" v-for="i in 10" :key="i">
            <router-link to="/classdetailpage" class="listRouterLinkMap">
              <div class="classListBox">
                <img src="../../assets/images/hs/main_slide_5.jpg" alt="" />
                <img
                  src="../../assets/images/icon/header_icons/like.png"
                  alt=""
                />
              </div>
              <div class="MapListTite">
                <p>지도로보는 클래스리스트</p>
                <div class="listRreviewBox">
                  <span class="liststarPoint" v-for="i in 5" :key="i">★</span>
                  <span>23</span>
                </div>
                <p>강남/서초</p>
                <p>클래스설명 상세,간단,한줄 뭐든 설명해주세요</p>
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
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/sr/classList.css";

export default {
  name: "ClassListView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      isMap: true,
      // 카카오맵
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
    MapOnOff() {
      this.isMap = !this.isMap;
    },
    initMap() {
      var mapContainer = document.getElementById("listMap"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.498287, 127.027064), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption);
      var positions = [
        {
          latlng: new kakao.maps.LatLng(37.498287, 127.027064),
        },
      ];

      positions.forEach(function (pos) {
        var marker = new kakao.maps.Marker({
          position: pos.latlng,
        });
        marker.setMap(map);
      });
    },
  },
  created() {},
};
</script>

<style></style>
