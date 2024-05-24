<template>

    <!-- Dropdown Menu -->
    <div class="dropdown-menu" :class="{ 'show': isMenuOpen }">
        <!-- Close Button -->
        <div class="drop-close" @click="toggleMenu">
            <img src="../assets/images/icon/header_icons/x.png" alt="">
        </div>
        <!-- Menu Items -->
        <ul>
            <li @click="toggleSubMenu1">
                <router-link to="">쿠킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[1] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[0]}`">한식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[1]}`">일식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[2]}`">중식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[3]}`">양식</router-link></li>
                </ul>
            </li>
            <li @click="toggleSubMenu2">
                <router-link to="">베이킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[2] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[4]}`">제과</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[5]}`">제빵</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[6]}`">쇼콜라</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[7]}`">디저트</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu3">음료</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[3] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[8]}`">주류</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[9]}`">바리스타</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu4">뷰티</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[4] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[10]}`">네일</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[11]}`">미용</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[12]}`">메이크업</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[13]}`">패션</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu5">공예</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[5] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[14]}`">비즈</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[15]}`">뜨게질</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[16]}`">자수</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[17]}`">도자기</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[18]}`">터프팅</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu6">스포츠</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[6] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[19]}`">수영</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[20]}`">축구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[21]}`">야구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[22]}`">배구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[23]}`">골프</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[24]}`">볼링</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu7">심리/상담</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[7] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[25]}`">부부상담</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[26]}`">가정상담</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[27]}`">심리상담</router-link></li>
                </ul>
            </li>
            <li>
                <router-link :to="`/searchresultpage2/${this.subCateNo[28]}`">IT</router-link>
            </li>
        </ul>
    </div>

    <header>
        <div class="top">
            <div class="inner">
                <router-link to="/companyselect">호스트 지원</router-link>
                <ul>
                    <li v-if="(this.$store.state.authUser == '' && this.$store.state.token == '')"><router-link to="/join">회원가입</router-link></li>
                    <li v-else><router-link to="/mypage/pay" @click="goMypage">{{ this.$store.state.authUser.userNickname }}님</router-link></li>
                    <li v-if="(this.$store.state.authUser == '' || this.$store.state.token == '')"><router-link to="/login/user">로그인</router-link></li>
                    <li v-else><router-link to="/" @click="logout">로그아웃</router-link></li>
                    <li><router-link to="">자주 묻는 질문</router-link></li>
                    <li><router-link to="/mypage/notice">공지사항</router-link></li>
                </ul>
            </div>
        </div>
        <div class="inner">
            <div class="bottom">
                <div class="hamberger" @mouseover="cateMouseover" @mouseleave="cateMouseleave" @click="toggleMenu">
                    <img :src="cateSrc" alt="">
                    <p>카테고리</p>
                </div>
                <div class="bar"></div>
                <h1><router-link to="/" class="logo">logo</router-link></h1>
                <div class="serch-box" @click="searchActive">
                    <img src="../assets/images/icon/header_icons/search.svg" alt="">
                    <input type="search" name="" id="" placeholder="지금 생각나는 취미를 검색하세요.">
                </div>
                <ul>
                    <li><router-link to="/wishlistclass" @click="checkAuth" class="like">위시리스트</router-link></li>
                    <li><router-link to="/mypage/pay" @click="checkAuth" class="my">마이</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "AppHeader",
    components: {
    },
    data() {
        return {
            subCateNo: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
            isMenuOpen: false,
            isSubMenuOpen:  {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
            },
            cateSrc: require("@/assets/images/icon/header_icons/category.png"),
        };
    },
    methods: {


        /////////////////////////////// ss /////////////////////////////////////
        // 로그아웃
        logout(){
            this.$store.commit('setAuthUser', '');
            this.$store.commit('setToken', '');
            this.$router.push('/login/user');
        },

        // 로그인 체크
        checkAuth(){
            if((this.$store.state.authUser == '' && this.$store.state.token == '')){
                this.$router.push('/login/user');
            }
        },

        goMypage(){
            this.$router.push('/mypage/pay');
        },


        /////////////////////////////////////////////////////////////////////////





        


        ///////////////////////////////////// 사이드 바 ///////////////////////////////
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            for(let i=1; i<8; i++) {
                this.isSubMenuOpen[i] = false;
            }
        },
        toggleSubMenu1() {
            this.isSubMenuOpen[1] = !this.isSubMenuOpen[1];
        },
        toggleSubMenu2() {
            this.isSubMenuOpen[2] = !this.isSubMenuOpen[2];
        },
        toggleSubMenu3() {
            this.isSubMenuOpen[3] = !this.isSubMenuOpen[3];
        },
        toggleSubMenu4() {
            this.isSubMenuOpen[4] = !this.isSubMenuOpen[4];
        },
        toggleSubMenu5() {
            this.isSubMenuOpen[5] = !this.isSubMenuOpen[5];
        },
        toggleSubMenu6() {
            this.isSubMenuOpen[6] = !this.isSubMenuOpen[6];
        },
        toggleSubMenu7() {
            this.isSubMenuOpen[7] = !this.isSubMenuOpen[7];
        },
        cateMouseover() {
            this.cateSrc = require("@/assets/images/icon/header_icons/active_category.png");
        },
        cateMouseleave() {
            this.cateSrc = require("@/assets/images/icon/header_icons/category.png");
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////
    },
    created() {
    
    }
};
</script>