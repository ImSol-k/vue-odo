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
                <router-link to="" :class="{ 'show': isSubMenuOpen[1] }">쿠킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[1] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[0]}?crtPage=1`">한식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[1]}?crtPage=1`">일식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[2]}?crtPage=1`">중식</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[3]}?crtPage=1`">양식</router-link></li>
                </ul>
            </li>
            <li @click="toggleSubMenu2">
                <router-link to="" :class="{ 'show': isSubMenuOpen[2] }">베이킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[2] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[4]}?crtPage=1`">제과</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[5]}?crtPage=1`">제빵</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[6]}?crtPage=1`">쇼콜라</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[7]}?crtPage=1`">디저트</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu3" :class="{ 'show': isSubMenuOpen[3] }">음료</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[3] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[8]}?crtPage=1`">주류</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[9]}?crtPage=1`">바리스타</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu4" :class="{ 'show': isSubMenuOpen[4] }">뷰티</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[4] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[10]}?crtPage=1`">네일</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[11]}?crtPage=1`">미용</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[12]}?crtPage=1`">메이크업</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[13]}?crtPage=1`">패션</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu5" :class="{ 'show': isSubMenuOpen[5] }">공예</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[5] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[14]}?crtPage=1`">비즈</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[15]}?crtPage=1`">뜨게질</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[16]}?crtPage=1`">자수</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[17]}?crtPage=1`">도자기</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[18]}?crtPage=1`">터프팅</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu6" :class="{ 'show': isSubMenuOpen[6] }">스포츠</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[6] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[19]}?crtPage=1`">수영</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[20]}?crtPage=1`">축구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[21]}?crtPage=1`">야구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[22]}?crtPage=1`">배구</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[23]}?crtPage=1`">골프</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[24]}?crtPage=1`">볼링</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="" @click="toggleSubMenu7" :class="{ 'show': isSubMenuOpen[7] }">심리/상담</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[7] }">
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[25]}?crtPage=1`">부부상담</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[26]}?crtPage=1`">가정상담</router-link></li>
                    <li><router-link :to="`/searchresultpage2/${this.subCateNo[27]}?crtPage=1`">심리상담</router-link></li>
                </ul>
            </li>
            <li>
                <router-link :to="`/searchresultpage2/${this.subCateNo[28]}?crtPage=1`">IT</router-link>
            </li>
        </ul>
    </div>

    <header>
        <div class="top">
            <div class="inner">
                <router-link to="/companyselect">호스트 지원</router-link>
                <ul>
                    <li v-if="(this.$store.state.authUser == '' && this.$store.state.token == '')"><router-link
                            to="/join">회원가입</router-link></li>
                    <li v-else><router-link to="/mypage/pay" @click="goMypage">{{
        this.$store.state.authUser.userNickname }}님</router-link></li>
                    <li v-if="(this.$store.state.authUser == '' || this.$store.state.token == '')"><router-link
                            to="/login/user">로그인</router-link></li>
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
                    <input type="search" placeholder="지금 생각나는 취미를 검색하세요." v-model="keyword" @keyup.enter="find">
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
            keyword: "",
            subCateNo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            isMenuOpen: false,
            isSubMenuOpen: {
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
        find() {
            console.log("검색")
            this.$emit('update',this.keyword);
        },
        /////////////////////////////// ss /////////////////////////////////////
        // 로그아웃
        logout() {
            this.$store.commit('setAuthUser', '');
            this.$store.commit('setToken', '');
            this.$router.push('/login/user');
        },
        // 로그인 체크
        checkAuth() {
            if ((this.$store.state.authUser == '' && this.$store.state.token == '')) {
                this.$router.push('/login/user');
            }
        },
        goMypage() {
            this.$router.push('/mypage/pay');
        },
        /////////////////////////////////////////////////////////////////////////

        ///////////////////////////////////// 사이드 바 ///////////////////////////////
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            for (let i = 1; i < 8; i++) {
                this.isSubMenuOpen[i] = false;
            }
        },
        toggleSubMenu1() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '1') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[1] = !this.isSubMenuOpen[1];  // '1'은 그대로 토글
        },
        toggleSubMenu2() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '2') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[2] = !this.isSubMenuOpen[2];
        },
        toggleSubMenu3() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '3') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[3] = !this.isSubMenuOpen[3];
        },
        toggleSubMenu4() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '4') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[4] = !this.isSubMenuOpen[4];
        },
        toggleSubMenu5() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '5') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[5] = !this.isSubMenuOpen[5];
        },
        toggleSubMenu6() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '6') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
            this.isSubMenuOpen[6] = !this.isSubMenuOpen[6];
        },
        toggleSubMenu7() {
            Object.keys(this.isSubMenuOpen).forEach(key => {
                if (key !== '7') {  // '1'을 제외하고 false로 설정
                    this.isSubMenuOpen[key] = false;
                }
            });
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