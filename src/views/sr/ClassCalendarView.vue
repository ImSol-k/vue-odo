<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>일정표</p>
        <div class="demo-app">
          <FullCalendar :options="calendarOptions" />
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

export default {
  name: "MemberManagerView",
  components: {
    AppHeader,
    AppFooter,
    AppMenu,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style>
</style>
