import { createApp } from 'vue';
import App from './App.vue';
//vuex,router
import store from './store/storage.js';
import router from './router';
//캘린더
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);
app.use(store).use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
