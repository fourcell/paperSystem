import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: ''
    },
    mutations: {
        title(state, str) {
            state.title = str
        }
    },
    actions: {
    }
})

export default store