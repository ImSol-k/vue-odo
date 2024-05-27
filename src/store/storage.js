import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9090",
            //apiBaseUrl: "http://54.180.79.237:9090",
            token: "",
            authUser: "",
            authCompany: "",
            couponNo: ""
        };
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
        },
        setAuthUser(state, payload){
            state.authUser = payload;
        },
        setAuthCompany(state, payload){
            state.authCompany = payload;
        },
        setCouponNo(state, payload){
            state.couponNo = payload;
        }
    },
    plugins: [
        createPersistedState({
            paths: ['token','authUser', 'authCompany']
        })
    ]
});