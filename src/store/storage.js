import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            //url베이스
            apiBaseUrl: "http://localhost:9090",
            //apiBaseUrl: "http://54.180.79.237:9090",
        };
    },
    mutations: {
    },
    plugins: [
        createPersistedState({
            paths: []
        })
    ]
});