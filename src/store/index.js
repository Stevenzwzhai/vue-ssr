/**
 * Created by Stevenzwzhai on 2017/3/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.store({
    state:{
        count:0
    },
    mutations:{
        add(){
            state.count++;
        }
    }
});
