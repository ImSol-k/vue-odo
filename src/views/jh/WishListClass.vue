<template><!--업체 소개페이지-->

    <AppHeader />
    <div class="wrap">



        <div class="mymy-header">

            <img src="../../assets/images/icon/ss/default-profile.png" alt="">
            <ul>
                <li>mypage@naver.com</li>
                <li>일반회원</li>
                <li>
                    <button type="button">정보 수정</button>
                </li>
            </ul>
        </div>

        <div class="mymy clearfix">

            <mymyside />
            <!-- mypage-side -->

            <div class="mymy-content">
                <div class="mymy-head">
                    <span>위시리스트</span>
                </div>
                <!-- mymy-head -->

                <div class="mymy-main">
                    <div class="mymy-nav">
                        <button type="button">클래스</button>
                        <span>ㅣ</span>
                        <button type="button">
                            <RouterLink to="/wishlistcompany">업체</RouterLink>
                        </button>
                    </div>
                    <!-- mymy-nav -->
                    <!--위시 리스트 없을때-->
                    <!--
                    <div class="cover31">
                        
                        <div>
                            <img class="img30" src="../../assets/images/하트.png" alt="">
                        </div>
                        <div class="cover30">
                            <p>아직 찜한 클래스가 없어요</p>
                            <p>관심있는 클래스를 선택해보세요</p>
                        </div>
                        


                    </div>
                    -->

                    <div class="cover33 clearfix">
                        <!--위시리스트 있을때-->
                        <div class="cover34" v-for="(a, i) in a" :key="i">
                            <div class="cover32">
                                <img class="img31" src="../../assets/images/하트2.png" alt="">
                            </div>
                            <p>지역이름</p>
                            <p class="p30">설명~설명~설명~설명~설명~설명~설명~설명~설명~설설명~설명~설명~설명~설명~설명~설명~설명~설명~설</p>
                            <p>무료</p>
                        </div>
                    </div>
                </div>
                <!-- mymy-main -->
            </div>
            <!-- mypage-content -->

        </div>

    </div>
    <!-- 탭바 따온거 ㅋㅋ
    <div class="tabmenu out-tabmenu">
        <ul>
            <li id="tab1" class="btnCon">
                <input type="radio" checked name="tabmenu" id="tabmenu1">
                <label for="tabmenu1">menu1</label>
                <div class="tabCon">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </div>

            </li>
            <li id="tab2" class="btnCon"><input type="radio" name="tabmenu" id="tabmenu2">
                <label for="tabmenu2">menu2</label>
                <div class="tabCon">It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).</div>

            </li>
            <li id="tab3" class="btnCon"><input type="radio" name="tabmenu" id="tabmenu3">
                <label for="tabmenu3">menu3</label>
                <div class="tabCon">There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                    isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words etc.</div>

            </li>
        </ul>
    </div>
    -->


    <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import mymyside from "@/components/MyPageSide.vue"
import '@/assets/css/jh/jh.css'
import '@/assets/css/ss/ss.css'
import '@/assets/css/Initialization.css'



export default {
    components: {
        AppHeader,
        AppFooter,
        mymyside
    },
    data() {
        return {
            a: [1, 2, 3, 4, 5, 6]
        }
    },

    methods: {

    },
    created() {

    }
}
</script>

<style>
.cover32 {
    background-image: url(../../assets/images/회사이미지.png);
}
</style>