<template>
    <div>
        <!-- AppHeader -->
        <AppHeader />
        <div class="wrap">

            <MyPageHeader />
            <!-- mypage-main -->

            <div class="mymy clearfix">

                <MyPageSide />
                <!-- mypage-side -->

                <div class="mymy-content">
                    <div>
                        <table class="ta3334">
                            <thead>
                                <tr>
                                    <th style="width: 100px;">번호</th>
                                    <th style="width: 300px;">제목</th>
                                    <th>글쓴이</th>
                                    <th style="width: 150px;">작성일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1111</td>
                                    <td>공지 전달드립니다</td>
                                    <td>이미지</td>
                                    <td>2024-05-21</td>
                                    <td>111</td>
                                </tr>
                                <tr>
                                    <td colspan="5">Everybody 모두 put your hands up<br>
                                        Everybody 모두 토요 hans up<br>
                                        Everybody 모두 put your hands up<br>
                                        Everybody 모두 죽지 않아<br>
                                        키가 작은 꼬마 동훈이 예<br>
                                        내 얘기를 들어 보세요<br>
                                        받아쓰기 이십 점<br>
                                        동네 꼬마 비웃어<br>
                                        나랑 키도 비슷해<br>
                                        이것 참 난 석사인데<br>
                                        키도 작고 못 생겼는데<br>
                                        가진 것도 하나 없는데<br>
                                        키가 작아서 나는 행복해<br>
                                        세상 모든 것을<br>
                                        우러러 볼 수 있으니까<br>
                                        나는 행복해 Uh<br>
                                        니노 막시무스 카이저 쏘제<br>
                                        쏘냐도르 & 스파르타<br>
                                        죽지 않아 나는 죽지 않아<br>
                                        오오오 나는 죽지 않아<br>
                                        니노 막시무스 카이저 쏘제<br>
                                        쏘냐도르 & 스파르타<br>
                                        죽지 않아 나는 죽지 않아<br>
                                        나는 키 작은 꼬맹이니깐<br>
                                        <br>
                                        <br>
                                        꿈이 많은 꼬마 동훈이 예<br>
                                        하고 싶은 게 참 많았지<br>
                                        노래하고 싶다고<br>
                                        무대 서고 싶다고<br>
                                        앨범까지 냈는데<br>
                                        이것 참 아무도 몰라<br>
                                        마음 대로 안 풀린다고<br>
                                        마음 먹기 나름이라고<br>
                                        절대 놓치고 싶지 않아<br>
                                        넘어지면 또 다시<br>
                                        일어나면 되니까<br>
                                        나는 괜찮아<br>
                                        니노 막시무스 카이저 쏘제<br>
                                        쏘냐도르 & 스파르타<br>
                                        죽지 않아 나는 죽지 않아<br>
                                        오오오 나는 죽지 않아<br>
                                        니노 막시무스 카이저 쏘제<br>
                                        쏘냐도르 & 스파르타<br>
                                        죽지 않아 나는 죽지 않아<br>
                                        나는 키 작은 꼬맹이니깐<br>
                                        사랑에 실패해도 절대 죽지 않아<br>
                                        사업에 실패해도 절대 죽지 않아<br>
                                        시험에 떨어져도 절대 죽지 않아<br>
                                        You & I we are never die<br>
                                        니노 막시무스 카이저 쏘제<br>
                                        쏘냐도르 & 스파르타<br>
                                        죽지 않아 나는 죽지 않아<br>
                                        나는 키 작은 꼬맹이니깐</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <!-- mymy-main -->
            </div>
            <!-- mypage-content -->

        </div>
        <!-- mymy -->
    </div>
    <!-- 푸터 -->
    <AppFooter />
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/mj/read.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

export default {
    name: "ModifyView",
    components: {
        AppHeader,
        AppFooter,
        MyPageSide,
        MyPageHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>

<style></style>