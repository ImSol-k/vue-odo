<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>일정표</p>
        <div class="demo-app">
          <FullCalendar class="fullCalendar" :options="calendarOptions" />
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "MemberManagerView",
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          // 헤더에 표시할 툴 바
          start: "prev",
          center: "title",
          end: "next",
          // end: "dayGridMonth,dayGridWeek,dayGridDay",
        },
        contentHeight: 800,
        weekend: false,
        locale: "ko",
        events: [
          {
            title: "",
            start: "",
            end: ""
          }
        ],
        eventClick: function (info) {
          // console.log(info.event.end);
          if (info.event.end == null) {
            Swal.fire({
              title: "일정",
              html:
                "스케줄: " +
                info.event.title +
                "<br/>일정: " +
                new Date(info.event.start)
                  .toLocaleString()
                  .substring(0, 20)
                  .replace("/g", ""),
            });
          } else {
            Swal.fire({
              title: "일정",
              html:
                "스케줄: " +
                info.event.title +
                "<br/>시작일: " +
                new Date(info.event.start)
                  .toLocaleString()
                  .substring(0, 20)
                  .replace("/g", "") +
                "<br/>종료일: " +
                new Date(info.event.end)
                  .toLocaleString()
                  .substring(0, 20)
                  .replace("/g", ""),
            });
          }
        },
      },
    };
  },
  methods: {

    /********************************************************************
     * 스케줄 불러오기
     */
    getSchedule() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/getschedule/${this.$store.state.authCompany.companyNo}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "json",
      })
        .then((response) => {
          // console.log(response.data);
          this.calendarOptions.events = response.data.apiData;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.getSchedule();
  },
};
</script>

<style>
:root {
  --fc-event-bg-color: #8521ff;
  --fc-event-border-color: #8521ff;
}
</style>
