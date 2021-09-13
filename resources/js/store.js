import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        data: [25, 20, 12, 39, 15, 40, 39, 80, 40, 50, 12, 11]
    },
    mutations: {},
    actions: {}
});

