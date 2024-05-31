<template>
    <div>
        <!-- AppHeader -->
        <AppHeader />
        <div class="wrap">
            <!-- <MyPageHeader /> -->
            <div>
                <!-- <MyPageSide /> -->
                <div>
                    <div>
                        <table class="ta3334">
                            <thead>
                                <tr>
                                    <th style="width: 100px;">번호</th>
                                    <td style="width: 50px;">{{ MjVo.idx }}</td>
                                    <th style="width: 100px;">작성일</th>
                                    <td style="width: 120px;">{{ MjVo.regDate }}</td>
                                    <th style="width: 80px;">조회수</th>
                                    <td style="width: 80px;">{{ MjVo.pagesNo }}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>제목</th>
                                    <td colspan="3">{{ MjVo.title }}</td>
                                    <th>글쓴이</th>
                                    <td>{{ MjVo.notice_name }}</td>
                                </tr>
                                <tr>
                                    <td colspan="6">
                                        {{ MjVo.content }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button id="notice_btn" @click="goList">목록</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>

<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/mj/read.css';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';

export default {
    name: "ReadView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            MjVo: {
                idx:'',
                title:'',
                notice_name:'',
                content:'',
                regDate:'',
                pagesNo:''
            }
        };
    },
    methods: {
        fetchNotice() {
            axios({
                method: 'get', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/odo/mypage/notice/${this.$route.params.no}`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

               this.MjVo=response.data;

            }).catch(error => {
                console.log(error);
                
            });
        },
        goList() {
            // 목록 보기로 이동하는 로직을 구현
            this.$router.push('/mypage/notice'); // 예시 라우팅, 필요에 따라 조정
        }
    },
    created() {
        this.fetchNotice(); // 컴포넌트가 생성될 때 fetchNotice 메소드 호출
    }
};
</script>

<style>
</style>