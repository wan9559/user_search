import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.prototype.$bus = new Vue()
new Vue({
    render: h => h(App),
    beforeDestroy() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')