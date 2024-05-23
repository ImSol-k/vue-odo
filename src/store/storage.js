import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9090",
            //apiBaseUrl: "http://54.180.79.237:9090",
            token: "",
            authUser: "",
            authCompany: ""
        };
    },
    mutations: {
    },
    plugins: [
        createPersistedState({
            paths: ['token','authUser', 'authCompany']
        })
    ]
});