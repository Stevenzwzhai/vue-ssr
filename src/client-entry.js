/**
 * Created by Stevenzwzhai on 2017/3/14.
 */
import {app, store} from './app'

//将服务端渲染时候的状态写入store
if(window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__);
}
//挂载到index.html中
app.$mount('#app');