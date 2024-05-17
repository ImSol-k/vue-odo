<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>일정표</p>
        <div class="demo-app">
          <FullCalendar class="fullCalendar" :options='calendarOptions' />
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import Swal from "sweetalert2";


export default {
  name: "MemberManagerView",
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: { // 헤더에 표시할 툴 바
          start: 'prev next today',
          center: 'title',
          end: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        contentHeight: 1000,
        weekend: true,
        locale: 'ko',
        events: [
          { title: '오늘', start: new Date().getDate },
          { title: '컴포즈클래스', start: '2024-05-10 08:00:00', end: '2024-05-22 01:00:00' },
          { title: '메가클래스', start: '2024-05-11 08:00:00', end: '2024-05-18 01:00:00' },
          { title: '일일클래스', start: '2024-05-22 18:00:00' },
        ],
        eventClick: function (info) {
          Swal.fire({
             title: '일정',
             html: "스케줄: "+ info.event.title + "<br/>일시: " + new Date(info.event.start).toLocaleString().substring(0,20).replace('/g', ''),
             })
          //alert('스케줄: ' + info.event.title + '\n' + '일시: ' + (info.event.start));

          // change the border color just for fun
        }
      }
    };
  },
  methods: {},
  created() { },
};
</script>

<style>
.demo-app > .fullCalendar{
  width: 700px;
}
:root{
  --fc-event-bg-color: #8521ff;
  --fc-event-border-color: #8521ff;
}
</style>
