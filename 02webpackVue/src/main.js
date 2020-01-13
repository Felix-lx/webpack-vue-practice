console.log("测试")
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})