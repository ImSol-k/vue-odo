<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>
          클래스 <span v-if="isAdd == 1">등록</span><span v-else>수정</span>
        </p>
        <div class="whatClass" v-if="isAdd == 1">
          <span
            v-on:click.prevent="selectClass(1)"
            :class="{ classChack: isClass == 1 }"
            >원데이</span
          >
          <span
            v-on:click.prevent="selectClass(2)"
            :class="{ classChack: isClass == 2 }"
            >정규</span
          >
        </div>
        <!-- 원데이클래스 등록 -->
        <div class="classAddBox">
          <div class="classAddImg">
            <img :src="img" alt="" style="width: 150px; height: 150px;" v-if="isAdd == 1"/>
            <img :src="`${this.$store.state.apiBaseUrl}/upload/${img}`" alt="" style="width: 150px; height: 150px;" v-else/>
            <div class="classAddImgTitle">
              <p>클래스 대표이미지</p>
              <input type="file" name="" id="" v-on:change="imgFile" />
              <select
                name=""
                id=""
                class="addPageSelectClassMemory"
                v-model="selectClassNo"
                @change="classShow"
                v-show="isAdd == 1"
              >
                <option value="" disabled selected>기존클래스 불러오기</option>
                <option v-for="(cl, i) in cList" :key="i" :value="cl.classNo">
                  {{ cl.className }}
                </option>
              </select>
            </div>
          </div>
          <!--classAddImg-->
          <div class="classAddInfo">
            <select
              name=""
              id=""
              class="addPageSelectClass"
              v-if="isClass == 1"
              v-model="classVo.recClassNo"
            >
              <option value="" disabled selected>관련 정규클래스 선택</option>
              <option v-for="(c, i) in rClassList" :key="i" :value="c.classNo">
                {{ c.className }}
              </option>
            </select>
            <div class="classAddInfoBox">
              <div>
                <label for="className">클래스명</label>
                <input
                  type="text"
                  id="className"
                  placeholder="클래스명"
                  v-model="classVo.className"
                />
              </div>
              <div>
                <label for="classinfo">클래스소개</label>
                <input
                  type="text"
                  id="classinfo"
                  placeholder="간단한 소개글 작성"
                  v-model="classVo.classIntro"
                />
              </div>
              <div class="classParticipation" v-if="isClass == 2">
                <label for="">중도참여</label>

                <label class="classRadioText" for="possibility">가능</label>
                <input
                  type="radio"
                  name="possibility"
                  id="possibility"
                  @change="selectClass(3)"
                />
                <label class="classRadioText" for="impossibility">불가능</label>
                <input
                  type="radio"
                  name="possibility"
                  id="impossibility"
                  @change="selectClass(2)"
                />
              </div>
              <!-- 원데이일정 -->
              <div class="classSchedule" v-if="isClass == 1">
                <label for="">일정</label>
                <div class="classScheduleFor">
                  <div
                    class="classScheduleBox"
                    v-for="i in onedayDate.length"
                    :key="i"
                  >
                    <input
                      class="VueDatePickerOne"
                      type="datetime-local"
                      v-model="onedayDate[i - 1]"
                    />
                    <!-- <VueDatePicker
                    class="VueDatePickerOne"
                    locale="ko"
                    time-picker-inline
                    v-model="onedayDate[i]"
                  /> -->
                    <button v-on:click.prevent="schedulClick(2, i - 1)">
                      삭제
                    </button>
                    <button
                      v-on:click.prevent="schedulClick(1, i - 1)"
                      v-show="onedayDate.length == i - 1"
                    >
                      추가
                    </button>
                  </div>
                </div>

                <!--classScheduleSelectBox-->
              </div>
              <!-- 정규일정 -->
              <div class="classSchedule" v-else>
                <label for="">일정</label>
                <div>
                  <p>시작일</p>
                  <input
                    class="VueDatePicker"
                    type="datetime-local"
                    v-model="startDate"
                  />
                  <!-- <VueDatePicker
                    class="VueDatePicker"
                    locale="ko"
                    v-model="startDate"
                    :enable-time-picker="false"
                  /> -->
                </div>
                <div>
                  <p>종료일</p>
                  <input
                    class="VueDatePicker"
                    type="datetime-local"
                    v-model="endDate"
                  />
                  <!-- <VueDatePicker
                    class="VueDatePicker"
                    locale="ko"
                    v-model="endDate"
                    :enable-time-picker="false"
                  /> -->
                </div>
              </div>
              <!--classSchedule-->
              <div class="classAddress">
                <label for="">주소</label>
                <div>
                  <div class="classAddpostcode">
                    <input
                      type="text"
                      id="postcode"
                      placeholder="우편번호"
                      v-model="classVo.classZipcode"
                      readonly
                    />
                    <input
                      type="button"
                      v-on:click.prevent="DaumPostcode()"
                      value="우편번호 찾기"
                    />
                  </div>
                  <input
                    type="text"
                    id="roadAddress"
                    placeholder="도로명주소"
                    v-model="classVo.classNameAddress"
                    readonly
                  />
                  <input
                    type="text"
                    id="jibunAddress"
                    placeholder="지번주소"
                    v-model="classVo.classNumAddress"
                    readonly
                  />
                  <span id="guide" style="color: #999; display: none"></span>
                  <input
                    type="text"
                    id="sample4_detailAddress"
                    placeholder="상세주소"
                    v-model="classVo.classDetailAddress"
                  />
                </div>
              </div>
              <!-- <div>
                  <label for="">장소</label>
                  <input type="text" id="classinfo" placeholder="주소입력" />
                </div> -->
              <div class="classCategory">
                <label for="">카테고리</label>
                <div class="classCategorySelectBox">
                  <select
                    name=""
                    id=""
                    v-model="classVo.cate1No"
                    @change="cateSelect"
                  >
                    <option value="" disabled selected>1차 카테고리</option>
                    <option v-for="(c, i) in cate1" :key="i" :value="c.cate1No">
                      {{ c.cate1Name }}
                    </option>
                  </select>
                  <select name="" id="" v-model="classVo.cate2No">
                    <option value="" disabled selected>2차 카테고리</option>
                    <option v-for="(c, i) in cate2" :key="i" :value="c.cate2No">
                      {{ c.cate2Name }}
                    </option>
                  </select>
                </div>
                <!--classCategorySelectBox-->
              </div>
              <!--classCategory-->
              <div>
                <label for="">가격</label>
                <input
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  placeholder="추가금액 입력"
                  v-model="classVo.classPrice"
                />
              </div>
              <div>
                <label for="">모집인원</label>
                <input
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  placeholder="인원수"
                  v-model="classVo.classMax"
                />
              </div>
              <div>
                <label for="">클래스오픈<br />최소인원</label>
                <input
                  type="text"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  placeholder="인원수"
                  v-model="classVo.classMin"
                />
              </div>
              <div class="quillEditorBox">
                <label for="">상세설명</label><br />
                <QuillEditor
                  ref="quillEditor"
                  theme="snow"
                  toolbar="full"
                  v-model="classVo.classInfo"
                  @ready="onEditorReady"
                />
                <!-- <button
                    style="
                      border: none;
                      border-radius: 5px;
                      width: 100px;
                      height: 35px;
                      font-size: 18px;
                      margin: 10px 0px;
                      background-color: rgb(209, 209, 209);
                    "
                    @click="classInfo(state)"
                  >
                    저장
                  </button> -->
              </div>
            </div>
          </div>
          <!--classAddInfo-->
          <div class="isAddBtn">
            <button><router-link to="/companypage">취소</router-link></button>
            <button
              v-if="isAdd == 1"
              type="button"
              v-on:click.prevent="classHandle"
            >
              등록
            </button>
            <button v-else type="button" v-on:click.prevent="classHandle">
              수정
            </button>
          </div>
        </div>
        <!--classAddBox---->
      </div>
      <!--classAddBox-->
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import { QuillEditor } from "@vueup/vue-quill";
import axios from "axios";
import moment from "moment";

export default {
  name: "ClassAddView",
  components: { AppHeader, AppFooter, AppMenu, QuillEditor },
  data() {
    return {
      showImage: true,
      isAdd: this.$route.params.isadd, //1추가 2수정
      isClass: "",
      // ============================
      img: "",
      companyNum: this.$store.state.authCompany.companyNo,
      classNo: this.$route.query.no,
      cList: [],
      rClassList: [],
      selectClassNo: "",
      selecRtClassNo: "",
      cate1: [],
      cate2: [],
      classImage: "",
      classVo: {
        cate1No: "",
        cate2No: "",
        className: "",
        classType: "",
        classIntro: "",
        classZipcode: "",
        classNameAddress: "",
        classNumAddress: "",
        classDetailAddress: "",
        classLatitude: "",
        classLongitutde: "",
        classPrice: "",
        classMin: "",
        classMax: "",
        classInfo: "",
        classUrl: "",
        recClassNo: "",
      },
      startDate: new Date(),
      endDate: new Date(),
      onedayDate: [new Date()],
    };
  },
  methods: {
    /********************************************************************
     * 날짜형식 변환
     */
    formatDate(date) {
      return moment(date).format(`YYYY-MM-DD HH:MM:ss`);
    },

    /********************************************************************
     * 원데이클래스 일정리스트 불러오기
     */
    ondaySchedule() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/one/${this.classNo}`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        responseType: "json",
      })
        .then((response) => {
          // console.log(response.data.apiData);
          for (let i = 0; i < response.data.apiData.length; i++) {
            this.onedayDate[i] = response.data.apiData[i].start;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 클래스 추가/ 수정
     * isAdd == 1 > 추가, isAdd == 2 > 수정
     */
    classHandle() {
      const formData = new FormData();

      //파일 값 확인
      if (this.classImage == "") {
        if (this.isAdd == 1) {
          alert("파일이 비어있습니다.");
        } else {
          formData.append("classImage", this.img);
        }
      } else {
        formData.append("classImageFile", this.classImage);
        formData.append("classType", this.classVo.classType);
        formData.append("companyNo", this.companyNum);
        formData.append("cate1No", this.classVo.cate1No);
        formData.append("cate2No", this.classVo.cate2No);
        formData.append("className", this.classVo.className);
        formData.append("classIntro", this.classVo.classIntro);
        formData.append("classZipcode", this.classVo.classZipcode);
        formData.append("classNameAddress", this.classVo.classNameAddress);
        formData.append("classNumAddress", this.classVo.classNumAddress);
        formData.append("classDetailAddress", this.classVo.classDetailAddress);
        formData.append("classLatitude", this.classVo.classLatitude);
        formData.append("classLongitutde", this.classVo.classLongitutde);
        if (this.classVo.classPrice == "") {
          formData.append("classPrice", 0);
        } else {
          formData.append("classPrice", this.classVo.classPrice);
        }
        formData.append("classMin", this.classVo.classMin);
        formData.append("classMax", this.classVo.classMax);
        formData.append("classUrl", this.classVo.classUrl);

        //클래스 타입별 들어가는 스케줄값이 다름
        //1이면 배열 아니면 단일값으로 들어감
        if (this.classVo.classType == 1) {
          if (this.classVo.recClassNo == "") {
            formData.append("recClassNo", 0);
          } else {
            formData.append("recClassNo", this.classVo.recClassNo);
          }
          this.onedayDate.forEach((date, index) => {
            if (date != null) {
              formData.append(`startDateList[${index}]`, this.formatDate(date));
            }
            // console.log(this.formatDate(date));
          });
        } else {
          formData.append("startDate", this.formatDate(this.startDate));
          formData.append("endDate", this.formatDate(this.endDate));
        }
        if (this.classVo.classNo != null) {
          formData.append("classNo", this.classNo);
        }

        //에디터 본문내용
        // 에디터 인스턴스 가져오기
        const editorInstance = this.$refs.quillEditor.getQuill();

        // HTML 형식으로 에디터의 내용 추출
        const editorHtmlContent = editorInstance.root.innerHTML;
        // console.log(editorHtmlContent);

        /* fomdata에 추가 */
        formData.append("classInfo", editorHtmlContent);

        if (this.classVo.className == "") {
          alert("클래스명을 작성해주세요.");
        } else if (this.classVo.classType == "") {
          alert("클래스타입을 선택해주세요");
        } else if (this.classVo.classIntro == "") {
          alert("클래스 소개를 작성해주세요.");
        } else if (this.isClass && this.onedayDate == "") {
          alert("일정을 입력해 주세요");
        } else if (
          !this.isClass &&
          this.startDate == "" &&
          this.endDate == ""
        ) {
          alert("시작일과 종료일을 확인 해 주세요");
        } else if (
          this.classVo.classZipcode == "" &&
          this.classVo.classDetailAddress == ""
        ) {
          alert("주소(상세주소)를 입력해 주세요");
        } else if (this.classVo.cate2No == "") {
          alert("카테고리를 선택해 주세요");
        } else if (this.classVo.classMax == "" && this.classVo.classMin == "") {
          alert("인원수를 입력해주세요.");
        } else if (editorHtmlContent == null) {
          alert("상세설명을 입력해주세요.");
        } else if (
          Number(this.classVo.classMax) <= Number(this.classVo.classMin)
        ) {
          alert("최소인원은 총 모집인원보다 작게 입력해주세요.");
        } else {
          if (this.isAdd == 1) {
            //클래스 추가 ==============

            // console.log("클래스 추가");
            axios({
              method: "post",
              url: `${this.$store.state.apiBaseUrl}/odo/company/insert`,
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: formData,
              responseType: "json",
            })
              .then((response) => {
                if (response.data.result == "success") {
                  alert("클래스가 추가되었습니다.");
                  this.$router.push("/companypage");
                } else {
                  alert("클래스 추가 실패");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            //클래스 수정 =======================
            // console.log("클래스 수정");

            axios({
              method: "put",
              url: `${this.$store.state.apiBaseUrl}/odo/company/update`,
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: formData,
              responseType: "json",
            })
              .then((response) => {
                // console.log(response.data);
                if (response.data.result == "success") {
                  alert("클래스가 수정되었습니다.");
                  this.$router.push("/companypage");
                } else {
                  alert("클래스 수정 실패");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      }
    },
    //이미지저장, 미리보기
    imgFile(event) {

      this.showImage = true;
      //이미지 저장
      this.classImage = event.target.files[0];
      const READER = new FileReader();
      READER.onload = (e) => {
        this.img = e.target.result;
      };
      if (this.classImage) {
         READER.readAsDataURL(this.classImage);
        }
      if (this.classImage != null) {
        //이미지 미리보기
        this.img = this.classImage
      }
    },

    /********************************************************************
     * 기존 클래스 리스트
     */
    classList(type) {
      //기존클래스 정보
      let tempVo = {
        type: type,
        no: this.companyNum,
      };

      axios({
        method: "post",
        url: `${this.$store.state.apiBaseUrl}/odo/company/cclist`,
        data: tempVo,
        headers: {
          //전송타입 + 토큰
          "Content-Type": "application/json; charset=utf-8",
        },
        responseType: "json",
      })
        .then((response) => {
          if (response.data.result == "success") {
            this.cList = response.data.apiData;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 수정할 클래스정보 불러오기
     */
    classShow() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/getclass`,
        headers: {
          //전송타입 + 토큰
          "Content-Type": "application/json; charset=utf-8",
        },
        params:
          this.isAdd == 1
            ? {
                companyNo: this.companyNum,
                classNo: this.selectClassNo,
              }
            : { companyNo: this.companyNum, classNo: this.classNo },
        responseType: "json",
      })
        .then((response) => {
          console.log(response.data.apiData);
          if (response.data.result == "success") {
            this.classVo = response.data.apiData;
            this.onedayDate = response.data.apiData.startDateList;
            this.startDate = response.data.apiData.startDate;
            this.endDate = response.data.apiData.endDate;
            this.img = response.data.apiData.classImage;
           
            // 에디터 인스턴스 가져오기
            const editorInstance = this.$refs.quillEditor.getQuill();

            //에디터에 내용 적용  //content는 서버에서 받은 내용
            editorInstance.root.innerHTML = response.data.apiData.classInfo;

            if (this.classVo.classType == 1) {
              this.isClass = 1;
            } else {
              this.isClass = 2;
            }
            //스케줄 불러오기
            // this.getschedule();
          } else {
            alert("클래스를 불러오는데 실패했습니다.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 정규클래스 리스트
     */
    regularClass() {
      // console.log("정규클래스");
      axios({
        method: "post",
        url: `${this.$store.state.apiBaseUrl}/odo/company/getrclass/${this.companyNum}`,
        headers: {
          //전송타입 + 토큰
          "Content-Type": "application/json; charset=utf-8",
        },
        responseType: "json",
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.result == "success") {
            this.rClassList = response.data.apiData;
            this.isClass = 2;
          } else {
            alert("불러오기 실패");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 카테고리불러오기
     */
    cate() {
      axios({
        method: "post",
        url: `${this.$store.state.apiBaseUrl}/odo/company/getcate`,
        headers: {
          //전송타입 + 토큰
          "Content-Type": "application/json; charset=utf-8",
        },
        responseType: "json",
      })
        .then((response) => {
          if (response.data.result == "success") {
            this.cate1 = response.data.apiData;
          } else {
            // console.log("불러오기 실패");
          }
          // console.log(this.cateList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //2차 카테고리 불러오기
    cateSelect() {
      if (this.cate1 == null) {
        alert("1차 카테고리를 선택해 주세요.");
      } else {
        axios({
          method: "get",
          url: `${this.$store.state.apiBaseUrl}/odo/company/getcate2/${this.classVo.cate1No}`,
          headers: {
            //전송타입 + 토큰
            "Content-Type": "application/json; charset=utf-8",
          },
          responseType: "json",
        })
          .then((response) => {
            if (response.data.result == "success") {
              this.cate2 = response.data.apiData;
            } else {
              // console.log("불러오기 실패");
            }
            // console.log(this.cateList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    /********************************************************************
     * 주소관련
     */
    DaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          //주소 저장
          this.classVo.classZipcode = data.zonecode;
          this.classVo.classNameAddress = data.roadAddress;
          this.classVo.classNumAddress = data.jibunAddress;
          // //검색된주소 위도, 경도로 저장
          var geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(
            this.classVo.classNameAddress,
            (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                // 주소 검색 결과가 성공일 경우
                this.classVo.classLatitude = result[0].y; // 위도
                this.classVo.classLongitutde = result[0].x; // 경도
              } else {
                // 주소 검색 실패
                // console.error("주소 검색 실패");
              }
            }
          );
        },
      }).open();
    },

    /********************************************************************
     * 클래스 타입 변경
     */
    selectClass(num) {
      console.log(num);
      if (num == 1) {
        this.isClass = 1;
        this.classVo.classType = 1;
        this.classList(1);
      } else {
        this.isClass = 2;
        if (num == 2) {
          this.classVo.classType = 2;
        } else {
          this.classVo.classType = 3;
        }
        this.classList(2);
      }
    },

    /********************************************************************
     * 일정 추가삭제
     */
    schedulClick(num, i) {
      this.onedayDate = this.onedayDate || [null];
      if (this.onedayDate.length >= 10) {
        alert("최대10개까지 등록가능");
      } else if (this.onedayDate.length < 0) {
        alert("1개이상 등록필수");
      } else {
        if (num == 1) {
          // console.log("일정추가");
          this.onedayDate.push(null);
        } else {
          // console.log("일정삭제");
          this.onedayDate.splice(i, 1);
        }
      }
    },

    /********************************************************************
     * 에디터
     */
    onEditorReady() {
      this.$nextTick(() => {
        // Quill 인스턴스를 가져옵니다.
        const editorInstance = this.$refs.quillEditor.getQuill();
        // 툴바 모듈을 가져옵니다.
        let toolbar = editorInstance.getModule("toolbar");
        toolbar.addHandler("image", this.selectLocalImage);
      });
    },
    selectLocalImage() {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      // 파일 선택 시 실행될 이벤트 리스너를 정의합니다.
      input.onchange = () => {
        const file = input.files[0];

        // 파일을 서버로 업로드하는 함수를 호출합니다.
        if (file) {
          this.uploadImageToServer(file);
        }
      };
    },
    uploadImageToServer(file) {
      const formData = new FormData();
      formData.append("file", file);

      axios({
        method: "post", //put,post,delete
        url: `${this.$store.state.apiBaseUrl}/odo/company/file`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData, //이경우는 json이 아님

        responseType: "json", //수신타입
      })
        .then((response) => {
          // 서버로부터 응답받은 데이터에서 이미지 saveName을 추출합니다.
          const saveName = response.data.apiData; // 예를 들어, 응답 데이터에 이미지 URL이 result 키에 위치한다고 가정합니다.
          // saveName 으로 imageUrl 을 만듭니다.
          const imageUrl = `${this.$store.state.apiBaseUrl}/upload/` + saveName;

          // Quill 에디터 인스턴스를 가져옵니다.
          const editorInstance = this.$refs.quillEditor.getQuill();
          // 현재 에디터의 커서 위치를 가져옵니다.
          const range = editorInstance.getSelection(true);
          // 에디터의 현재 커서 위치에 이미지를 삽입합니다. imageUrl은 서버로부터 받은 이미지의 URL입니다.
          editorInstance.insertEmbed(range.index, "image", imageUrl);
          // 이미지 삽입 후 커서 위치를 이미지 뒤로 이동시킵니다.
          editorInstance.setSelection(range.index + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    // console.log(this.$route.query.no);
    this.regularClass();
    this.cate();
    if (!(this.isAdd == 1)) {
      this.classShow();
      this.ondaySchedule();
      this.showImage = false;
    } else {
      this.classVo.classType = 2;
      this.classList(this.classVo.classType);
    }
  },
};
</script>

<style>
.dp__theme_light {
  --dp-primary-color: #8521ff;
}
.dp__time_display_inline {
  padding: 0px;
}
</style>
