/**
 * Created by Stevenzwzhai on 2017/3/14.
 */
//首先构建一个vue实例
import Vue from 'vue'
import router from 'router'
import store from 'store'
import App from 'App'

//这里不会直接挂载，而是通过服务端运行时挂载
let app = new Vue({
    template:'<app></app>',
    base:'/c/',
    components:{
        App
    },
    router,
    store
});

export {
    app,
    router,
    store
}