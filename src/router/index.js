/**
 * Created by Stevenzwzhai on 2017/3/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/indexView.vue'
import ArticleView from '../views/articleView.vue'

Vue.use(VueRouter);

const router = {
    mode: 'history',
    base:'/c/',
    routes:[{
        path:'/',
        component:IndexView
    },{
        path:'/list',
        component:ArticleView
    }]
}

export default router