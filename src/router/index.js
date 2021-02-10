import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/content/Home.vue"
import About from "../components/content/About.vue"
import Login from "../components/content/Login.vue"
import Team from "../components/content/Team.vue"
import Events from "../components/content/Events.vue"

import LoginHome from "../components/auth/LoginHome.vue"
import EventsModel from "../components/auth/EventsModel.vue"
import TeamModel from "../components/auth/TeamModel.vue"

Vue.use(Router);

export default new Router({
  routes: [
  		{
  			path: "/",
  			component: Home
  		},
  		{
  			path: "/about",
  			component: About
  		},
  		{
  			path: "/team",
  			component: Team
  		},
  		{
  			path: "/login",
  			component: Login,

  		},
      {
        path: "/logout",
        component: Login,
        beforeEnter(to, from, next){
          // Clear the local storage before logout;
          localStorage.clear();
          next("/login");
        }
      },
  		{
  			path: "/events",
  			component: Events
  		},
  		{
  			path: "/loginHome",
  			component: LoginHome,
         beforeEnter(to, from, next) {
          if(localStorage.getItem("idToken")) { 
            next();
          }
          else {
            next("/login");
          }
        }

  		},
  		{
  			path: "/eventsmodel",
  			component: EventsModel,
         beforeEnter(to, from, next) {
          if(localStorage.getItem("idToken")) {
            next();
          }
          else {
            next("/login");
          }
        }

  		},
  		{
  			path: "/teammodel",
  			component: TeamModel,
         beforeEnter(to, from, next) {
          if(localStorage.getItem("idToken")) {
            next();
          }
          else {
            next("/login");
          }
        }

  		}
  ],
  mode: 'history',
  scrollBehavior() {
      return {x: 0, y: 0}
  }
})
