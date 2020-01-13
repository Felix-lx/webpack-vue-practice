import Vue from 'vue'
import VueRouter from 'vue-router'
import Component1 from '../components/component1.vue'
import Component2 from '../components/component2.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/component1',component:Component1},
        {path:'/component2',component:Component2}
    ]
})

export default router