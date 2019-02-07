// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
new Vue({
router,
render: createEl => createEl(App)
}).$mount('#app');