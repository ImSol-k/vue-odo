import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9090",
            //apiBaseUrl: "http://54.180.79.237:9090",
            token: "",
            authUser: {},
            cToken: "",
            authCompany: {},
            couponNo: "",
        };
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
        },
        setCToken(state, payload){
            state.cToken = payload;
        },
        setAuthUser(state, payload){
            state.authUser = payload;
        },
        setAuthCompany(state, payload){
            state.authCompany = payload;
        },
        setCouponNo(state, payload){
            state.couponNo = payload;
        },
        setCompanyNo(state, payload){
            state.companyNo = payload;
        }
    },
    plugins: [
        createPersistedState({
            paths: ['cToken','token','authUser', 'authCompany', 'companyNo']
        })
    ]
});