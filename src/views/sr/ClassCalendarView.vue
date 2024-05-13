<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>일정표</p>
        <div class="demo-app">
          <FullCalendar :options='calendarOptions' />
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
          { title: 'Meeting', start: new Date() },
          { title: 'Meeting', start: '2024-05-10 08:00:00', end: '2024-05-12 01:00:00' },
          { title: 'Meeting', start: '2024-05-22 18:00:00' },
        ],
        eventClick: function (info) {
          Swal.fire({
             title: '일정',
             html: "스케줄: "+ info.event.title + "<br/>일시: " + new Date(info.event.start),
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

<style></style>
