<template>

    <!-- Dropdown Menu -->
    <div class="dropdown-menu" :class="{ 'show': isMenuOpen }">
        <!-- Close Button -->
        <div class="drop-close" @click="toggleMenu">
            <img src="../assets/images/icon/header_icons/x.png" alt="">
        </div>
        <!-- Menu Items -->
        <ul>
            <li>
                <a href="#">쿠킹</a>
                <ul>
                    <li><a href="#">한식</a></li>
                    <li><a href="#">일식</a></li>
                    <li><a href="#">중식</a></li>
                    <li><a href="#">양식</a></li>
                </ul>
            </li>
            <li>
                <a href="#">베이킹</a>
            </li>
            <li>
                <a href="#">음료</a>
            </li>
            <li>
                <a href="#">뷰티</a>
            </li>
            <li>
                <a href="#">공예</a>
            </li>
            <li>
                <a href="#">스포츠</a>
            </li>
            <li>
                <a href="#">심리/상담</a>
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
                <h1><a href="#" class="logo">logo</a></h1>
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
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
    created() { }
};
</script>