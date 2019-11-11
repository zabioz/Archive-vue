import Vuex from 'vuex'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return{
                msg: "this store message!!"
            }
        }
    })
}
export default createStore