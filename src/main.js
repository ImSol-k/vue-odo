import { createApp } from 'vue';
import App from './App.vue';
//vuex,router
import store from './store/storage.js';
import router from './router';
//캘린더
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
//에디터
import { quillEditor } from 'vue3-quill'

//프론트용app
const app = createApp(App);
app.use(store).use(router).use(quillEditor);
// app.use(quillEditor)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');

window.Kakao.init('10a7f3623894713c0b64f29c1e5c6854');

