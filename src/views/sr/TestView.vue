<template>
  <div id="wrap">
    <QuillEditor ref="quillEditor" theme="snow" toolbar="full" @ready="onEditorReady" />
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';

export default {
  name: 'TestView',
  components: {
    QuillEditor
  },
  methods: {
    onEditorReady() {
      this.$nextTick(() => {
        // Quill 인스턴스를 가져옵니다.
        const editorInstance = this.$refs.quillEditor.getQuill();
        // 툴바 모듈을 가져옵니다.
        let toolbar = editorInstance.getModule('toolbar');
        toolbar.addHandler('image', this.selectLocalImage);
      });
    },
    selectLocalImage() {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
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
      formData.append('file', file);

      axios({
        method: 'post', //put,post,delete
        url: `${this.$store.state.apiBaseUrl}/odo/company/file`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        //params: { crtPage: this.crtPage, keyword: this.keyword }, //get방식 파라미터로 값이 전달
        data: formData, //이경우는 json이 아님

        responseType: 'json' //수신타입
      }).then(response => {

        // 서버로부터 응답받은 데이터에서 이미지 saveName을 추출합니다.
        const saveName  = response.data.apiData; // 예를 들어, 응답 데이터에 이미지 URL이 result 키에 위치한다고 가정합니다.
        // saveName 으로 imageUrl 을 만듭니다.
        const imageUrl = "http://localhost:9090/upload/"+saveName

        // Quill 에디터 인스턴스를 가져옵니다.
        const editorInstance = this.$refs.quillEditor.getQuill();
        // 현재 에디터의 커서 위치를 가져옵니다.
        const range = editorInstance.getSelection(true);
        // 에디터의 현재 커서 위치에 이미지를 삽입합니다. imageUrl은 서버로부터 받은 이미지의 URL입니다.
        editorInstance.insertEmbed(range.index, 'image', imageUrl);
        // 이미지 삽입 후 커서 위치를 이미지 뒤로 이동시킵니다.
        editorInstance.setSelection(range.index + 1);

      }).catch(error => {
        console.log(error);
      });

    }
  }
}
</script>