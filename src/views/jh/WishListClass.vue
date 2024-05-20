<template><!--업체 소개페이지-->

    <AppHeader />
    <div class="wrap">



        <div class="mymy-header clearfix">

            <img src="@/assets/images/icon/ss/default-profile.png" alt="회원 프로필" v-on:click.prevent="goModify">
            <ul>
                <li>mypage@naver.com(닉네임나올자리)</li>
                <li>일반회원</li>
                <li>
                    <router-link class="goLogin" to="/mypage/modify">정보 수정</router-link>
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
                        <span type="button" class="isClass">클래스</span>
                        <span>ㅣ</span>
                        <span type="button" class="isClass">
                            <RouterLink to="wishlistcompany">업체</RouterLink>
                        </span>
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
                    <div class="cover39">
                        <div class="cover33 clearfix">
                            <!--위시리스트 있을때-->
                            <div class="cover34" v-for="(a, i) in a" :key="i">
                                <div class="cover32">
                                    <img class="img33" src="../../assets/images/회사이미지.png" alt="">
                                    <img v-on:click.prevent="modalUp" style="cursor:pointer" class="img31"
                                        src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
                                        alt="">
                                </div>
                                <p>지역이름</p>
                                <p class="p30">설명~설명~설명~설명~설명~설명~설명~설명~설명~설설명~설명~설명~설명~설명~설명~설명~설명~설명~설</p>
                                <p>무료</p>
                            </div>
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
    <!--모달창-->
    <div id="newModal">
        <div class="modal-content2">
            <p class="closeBtn" v-on:click="close">x</p>
            <div class="modal-p">
                <p>위시리스트에서 삭제됩니다</p>
                <p>삭제 하시겠습니까?</p>
            </div>
            <div class="modal-b">
                <button>취소</button>
                <button>삭제</button>
            </div>
        </div>
    </div>

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
        modalUp() {
            console.log("업");
            let viewModal = document.querySelector("#newModal");

            viewModal.style.display = "block";
        },
        close() {
            let viewModal = document.querySelector("#newModal");

            viewModal.style.display = "none";
        }

    },
    created() {

    }
}
</script>

<style></style>