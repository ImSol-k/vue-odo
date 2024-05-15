<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>클래스 등록</p>
        <div class="whatClass">
          <span
            v-on:click.prevent="selectClass(1)"
            :class="{ classChack: isClass }"
            >원데이</span
          >
          <span
            v-on:click.prevent="selectClass(2)"
            :class="{ classChack: !isClass }"
            >정규</span
          >
        </div>
        <!-- 원데이클래스 등록 -->
        <div class="classAddBox" v-if="isClass">
          <div class="classAddImg">
            <img src="@/assets/images/icon/ss/kakao.png" alt="" />
            <div class="classAddImgTitle">
              <p>대표이미지</p>
              <input type="file" name="" id="" />
              <select name="" id="" class="addPageSelectClassMemory">
                <option value="" disabled selected>기존클래스 불러오기</option>
                <option value="" v-for="i in 5" :key="i">
                  기존에 사용했던 클래스명 불러오기
                </option>
              </select>
            </div>
          </div>
          <!--classAddImg-->
          <div class="classAddInfo">
            <select name="" id="" class="addPageSelectClass">
              <option value="" disabled selected>관련 정규클래스 선택</option>
              <option value="" v-for="i in 5" :key="i">
                정규클래스 {{ i }}번
              </option>
            </select>
            <div class="classAddInfoBox">
              <div>
                <label for="className">클래스명</label>
                <input type="text" id="className" placeholder="클래스명" />
              </div>
              <div>
                <label for="classinfo">클래스설명</label>
                <input type="text" id="classinfo" placeholder="클래스 설명" />
              </div>
              <div class="classSchedule">
                <label for="">일정</label>
                <div class="classScheduleFor">
                  <div
                    class="classScheduleBox"
                    v-for="i in onedayDate.length"
                    :key="i"
                  >
                    <VueDatePicker
                      class="VueDatePickerOne"
                      locale="ko"
                      time-picker-inline
                      v-model="onedayDate[i]"
                    />
                    <button v-on:click.prevent="schedulClick(2, i)">
                      삭제
                    </button>
                    <button
                      v-on:click.prevent="schedulClick(1, 0)"
                      v-show="onedayDate.length == i"
                    >
                      추가
                    </button>
                  </div>
                </div>
                <!-- <div class="classScheduleSelectBox">
                  <select name="" id="">
                    <option value="" disabled selected>월</option>
                    <option value="" v-for="i in 12" :key="i">{{ i }}월</option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>일</option>
                    <option value="" v-for="i in 31" :key="i">{{ i }}일</option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>시간</option>
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>시</option>
                    <option value="" v-for="i in 12" :key="i">{{ i }}</option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>분</option>
                    <option value="" v-for="i in 6" :key="i">
                      {{ i * 10 }}
                    </option>
                  </select>
                  <button>+</button>
                  <button>-</button>
                </div> -->
                <!--classScheduleSelectBox-->
              </div>
              <!--classSchedule-->
              <div>
                <label for="">장소</label>
                <input type="text" id="classinfo" placeholder="주소입력" />
              </div>
              <div class="classCategory">
                <label for="">카테고리</label>
                <div class="classCategorySelectBox">
                  <select name="" id="">
                    <option value="" disabled selected>1차 카테고리</option>
                    <option value="" v-for="i in 12" :key="i">
                      1차카테고리{{ i }}
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>2차 카테고리</option>
                    <option value="" v-for="i in 6" :key="i">
                      2차카테고리{{ i }}
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>3차 카테고리</option>
                    <option value="" v-for="i in 4" :key="i">
                      3차카테고리{{ i }}
                    </option>
                  </select>
                </div>
                <!--classCategorySelectBox-->
              </div>
              <!--classCategory-->
              <div>
                <label for="">가격</label>
                <input type="text" placeholder="추가금액 입력" />
              </div>
              <div>
                <label for="">모집인원</label>
                <input type="text" placeholder="인원수" />
              </div>
              <div class="addInfoImg">
                <label for="">상세이미지</label>
                <div class="addSelectImg">
                  <div>
                    <input type="file" name="" id="" />
                    <button>+</button>
                    <button>-</button>
                  </div>
                  <div>
                    <input type="file" name="" id="" />
                    <button>+</button>
                    <button>-</button>
                  </div>
                </div>
                <!--addSelectImg-->
              </div>
            </div>
          </div>
          <!--classAddInfo-->
          <div class="isAddBtn">
            <button>취소</button>
            <button>등록</button>
          </div>
        </div>
        <!--classAddBox-->

        <!-- 정규클래스 등록 -->
        <div class="classAddBox" v-else>
          <div class="classAddImg">
            <img src="@/assets/images/icon/ss/kakao.png" alt="" />
            <div class="classAddImgTitle">
              <p>대표이미지</p>
              <input type="file" name="" id="" />
              <select name="" id="" class="addPageSelectClassMemory">
                <option value="" disabled selected>기존클래스 불러오기</option>
                <option value="" v-for="i in 5" :key="i">
                  기존에 사용했던 클래스명 불러오기
                </option>
              </select>
            </div>
          </div>
          <!--classAddImg-->
          <div class="classAddInfo">
            <div class="classAddInfoBox">
              <div>
                <label for="className">클래스명</label>
                <input type="text" id="className" placeholder="클래스명" />
              </div>
              <div>
                <label for="classinfo">클래스설명</label>
                <input type="text" id="classinfo" placeholder="클래스 설명" />
              </div>
              <div class="classParticipation">
                <label for="">중도참여</label>
                <label class="classRadioText" for="possibility">가능</label>
                <input type="radio" name="possibility" id="possibility" />
                <label class="classRadioText" for="impossibility">불가능</label>
                <input type="radio" name="possibility" id="impossibility" />
              </div>
              <div class="classSchedule">
                <label for="">일정</label>
                <div>
                  <VueDatePicker
                    class="VueDatePicker"
                    locale="ko"
                    v-model="startDate"
                    :enable-time-picker="false"
                  />
                </div>
                <div>
                  <VueDatePicker
                    class="VueDatePicker"
                    locale="ko"
                    v-model="endDate"
                    :enable-time-picker="false"
                  />
                </div>
                <!-- <div class="classScheduleSelectBox">
                  <select name="" id="">
                    <option value="" disabled selected>시작일</option>
                    <option value="" v-for="i in 12" :key="i">{{ i }}월</option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>종료일</option>
                    <option value="" v-for="i in 31" :key="i">{{ i }}일</option>
                  </select>
                </div> -->
                <!--classScheduleSelectBox-->
              </div>
              <!--classSchedule-->
              <div>
                <label for="">장소</label>
                <input type="text" id="classinfo" placeholder="주소입력" />
              </div>
              <div class="classCategory">
                <label for="">카테고리</label>
                <div class="classCategorySelectBox">
                  <select name="" id="">
                    <option value="" disabled selected>1차 카테고리</option>
                    <option value="" v-for="i in 12" :key="i">
                      1차카테고리{{ i }}
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>2차 카테고리</option>
                    <option value="" v-for="i in 6" :key="i">
                      2차카테고리{{ i }}
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="" disabled selected>3차 카테고리</option>
                    <option value="" v-for="i in 4" :key="i">
                      3차카테고리{{ i }}
                    </option>
                  </select>
                </div>
                <!--classCategorySelectBox-->
              </div>
              <!--classCategory-->
              <div>
                <label for="">가격</label>
                <input type="text" placeholder="추가금액 입력" />
              </div>
              <div>
                <label for="">모집인원</label>
                <input type="text" placeholder="인원수" />
              </div>
              <div class="addInfoImg">
                <label for="">상세이미지</label>
                <div class="addSelectImg">
                  <div>
                    <input type="file" name="" id="" />
                    <button>+</button>
                    <button>-</button>
                  </div>
                  <div>
                    <input type="file" name="" id="" />
                    <button>+</button>
                    <button>-</button>
                  </div>
                </div>
                <!--addSelectImg-->
              </div>
            </div>
          </div>
          <!--classAddInfo-->
          <div class="isAddBtn">
            <button>취소</button>
            <button>등록</button>
          </div>
        </div>
        <!--classAddBox---->
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";

export default {
  name: "ClassAddView",
  components: { AppHeader, AppFooter, AppMenu },
  data() {
    return {
      isClass: true,
      startDate: null,
      endDate: null,
      onedayDate: [null],
    };
  },
  methods: {
    selectClass(num) {
      if (num == 1) {
        this.isClass = true;
      } else {
        this.isClass = false;
      }
    },
    schedulClick(num, i) {
      if (this.onedayDate.length >= 10) {
        console.log("최대10개까지 등록가능");
      } else if (this.onedayDate.length < 0) {
        console.log("1개이상 등록필수");
      } else {
        if (num == 1) {
          console.log("일정추가");
          this.onedayDate.push(null);
        } else {
          console.log("일정삭제");
          this.onedayDate.splice(i, 1);
        }
      }
    },
    dateSetting() {},
  },
  created() {},
};
</script>

<style>
</style>
