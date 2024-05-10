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
                <router-link to="#">쿠킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[1] }">
                    <li><a href="#">한식</a></li>
                    <li><a href="#">일식</a></li>
                    <li><a href="#">중식</a></li>
                    <li><a href="#">양식</a></li>
                </ul>
            </li>
            <li @click="toggleSubMenu2">
                <router-link to="#">베이킹</router-link>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[2] }">
                    <li><a href="#">제과</a></li>
                    <li><a href="#">제빵</a></li>
                    <li><a href="#">쇼콜라</a></li>
                    <li><a href="#">디저트</a></li>
                </ul>
            </li>
            <li>
                <a href="#" @click="toggleSubMenu3">음료</a>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[3] }">
                    <li><a href="#">주류</a></li>
                    <li><a href="#">바리스타</a></li>
                </ul>
            </li>
            <li>
                <a href="#" @click="toggleSubMenu4">뷰티</a>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[4] }">
                    <li><a href="#">네일</a></li>
                    <li><a href="#">미용</a></li>
                    <li><a href="#">메이크업</a></li>
                    <li><a href="#">패션</a></li>
                </ul>
            </li>
            <li>
                <a href="#" @click="toggleSubMenu5">공예</a>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[5] }">
                    <li><a href="#">비즈</a></li>
                    <li><a href="#">뜨게질</a></li>
                    <li><a href="#">자수</a></li>
                    <li><a href="#">도자기</a></li>
                    <li><a href="#">터프팅</a></li>
                </ul>
            </li>
            <li>
                <a href="#" @click="toggleSubMenu6">스포츠</a>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[6] }">
                    <li><a href="#">수영</a></li>
                    <li><a href="#">축구</a></li>
                    <li><a href="#">야구</a></li>
                    <li><a href="#">배구</a></li>
                    <li><a href="#">골프</a></li>
                    <li><a href="#">볼링</a></li>
                </ul>
            </li>
            <li>
                <a href="#" @click="toggleSubMenu7">심리/상담</a>
                <ul class="subMenuList" :class="{ 'show': isSubMenuOpen[7] }">
                    <li><a href="#">부부상담</a></li>
                    <li><a href="#">가정상담</a></li>
                    <li><a href="#">심리상담</a></li>
                </ul>
            </li>
            <li>
                <a href="#">IT</a>
            </li>
        </ul>
    </div>

    <header>
        <div class="top">
            <div class="inner">
                <a href="#">호스트 지원</a>
                <ul>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">자주 묻는 질문</a></li>
                    <li><a href="#">공지사항</a></li>
                </ul>
            </div>
        </div>
        <div class="inner">
            <div class="bottom">
                <div class="hamberger" @click="toggleMenu">
                    <img src="../assets/images/icon/header_icons/category.png" alt="">
                    <p>카테고리</p>
                </div>
                <div class="bar"></div>
                <h1><router-link to="/" class="logo">logo</router-link></h1>
                <div class="serch-box">
                    <img src="../assets/images/icon/header_icons/search.svg" alt="">
                    <input type="search" name="" id="" placeholder="지금 생각나는 취미를 검색하세요.">
                </div>
                <ul>
                    <li><a href="#" class="like">찜</a></li>
                    <li><a href="#" class="my">마이</a></li>
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
        };
    },
    methods: {

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
    },
    created() { }
};
</script>