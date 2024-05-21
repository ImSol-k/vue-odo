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
                                    <td colspan="5">한때, 무지개 빛깔의 문어들이 하늘을 날아다니는 나라가 있었어. 그 나라는 공중에 떠 있는 섬들로 이루어져 있었고, 섬마다
                                        특이한 생명체들이 살고 있었지. 예를 들어, 빨간 색깔의 섬에서는 항상 웃고 있는 거대한 토마토들이 자라났고, 파란 색깔의 섬에서는 하늘을 나는
                                        돌고래들이 구름 속에서 자유롭게 헤엄치고 있었어.

                                        이 나라에는 또 하나의 특이한 점이 있었는데, 바로 시간이 거꾸로 흐른다는 거야. 그래서 아침에 눈을 뜨면 저녁 식사를 하게 되고, 밤이 되면
                                        아침 식사를 준비했지. 사람들은 하루가 끝나면 피곤해져서 침대에서 일어나 하루를 마무리했어. 아이들은 학교에서 돌아오자마자 숙제를 다 한 채로
                                        놀이터로 뛰어나갔고, 어른들은 출근 전에 하루 일과를 모두 마친 뒤 여유롭게 커피 한 잔을 즐겼지.

                                        그곳의 왕은 거대한 초콜릿 케이크로 만든 성에 살고 있었어. 이 성은 비가 올 때마다 녹아내리지 않도록 마법의 우산들이 지붕을 덮고 있었지.
                                        왕은 매일 아침(실은 밤)마다 자신의 왕국을 돌며 마법의 꽃들을 가꾸었어. 이 꽃들은 사람들의 소원을 들어주는 능력이 있었는데, 꽃잎을 떼어내서
                                        물에 띄우면 소원이 이루어진다고 했지.

                                        그러던 어느 날, 아주 특별한 소원이 들어왔어. 그건 바로 "모든 것들이 원래대로 돌아가게 해주세요"라는 소원이었어. 이 소원을 한 사람은
                                        공중에 떠 있는 섬 중 가장 작은 섬에 사는 한 소녀였어. 그녀는 시간이 거꾸로 흐르는 세상에서 너무나 혼란스러워하고 있었거든. 왕은 그 소원을
                                        들어주기로 결심하고, 모든 섬에 마법의 꽃잎을 뿌렸어.

                                        그 순간, 하늘을 나는 문어들이 다시 바다로 돌아가고, 돌고래들은 구름 속에서 바다로 뛰어내렸어. 시간은 정상적으로 흐르기 시작했고, 사람들은
                                        아침에 눈을 뜨면 아침 식사를 하고, 밤이 되면 침대에 누워 하루를 마무리했지. 왕의 초콜릿 케이크 성도 녹아내리지 않게 되었고, 사람들은
                                        평화롭고 행복한 일상을 되찾았어.

                                        하지만, 그 소녀는 여전히 밤하늘을 올려다보며 문어들이 춤추던 모습을 그리워했어. 그녀는 가끔 밤하늘에 별들이 반짝일 때마다, 저 멀리서
                                        문어들의 웃음소리가 들려오는 것만 같았어. 세상은 여전히 신비롭고, 언제 어떤 재미있는 일이 벌어질지 아무도 모르는 법이니까!</td>
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