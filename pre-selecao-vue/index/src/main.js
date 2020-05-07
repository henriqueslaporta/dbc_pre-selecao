import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import VeeValidate, { Validator } from "vee-validate"
import pt_BR from "vee-validate/dist/locale/pt_BR"
import Home from "./components/screens/Home"
import Login from "./components/screens/Login"
import Cadastro from "./components/screens/Cadastro"
import Candidatos from "./components/screens/Candidatos"
import Confirma from "./components/screens/Confirma"
import moment from 'moment'
import VueMask from 'v-mask'
import BackEndApi from './api/backEndApi.js'


Vue.prototype.moment = moment

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Validator.localize("pt_BR", pt_BR);

Vue.use(VueRouter);

Vue.use(VueMask);

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Login", path: "/login", component: Login },
  { name: "Cadastro", path: "/cadastro", component: Cadastro },
  { name: 'Confirma', path: '/confirma/:id', component: Confirma},
  { name: 'Candidatos', 
    path: '/candidatos', 
    component: Candidatos,
    beforeEnter: async (to, from, next) => {
      const api = new BackEndApi()
      const response = await api.verificaSeAdm( )
      if(response.error){
        next({
          name: 'Login'
        })
      } else {
        next()
      }
    }
  },
];


const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

