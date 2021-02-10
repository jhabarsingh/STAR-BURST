import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)
import router from "../router/index"
export default new Vuex.Store({
  state: {		
	  data:[],
	  events:[],
	  toogle: true
 },
 getters: {
 	allData: function(state) {
 		// Returns the whole data;	
    return state.data;
 	},
 	allEvents: function(state) {
    // Returns the whole events;
 		return state.events;
 	}
 },
 mutations: {
 	check: function(state) {
    // Toogle the toogle data;
 		state.toogle = !state.toogle;
 	}
 },
 actions: {
  checkme: function({commit}) {
    // Action to commit check Mutation;
  	commit("check");
  },
   
  autoLogout({commit}){
    // Action to logout;
  	setTimeout(()=>{
  		router.push("/login");
  	}, 3600000)
  },
  updateEvents({commit, state}, data){
    // Action to update the Events;
  	axios.put("https://stardust-4e9ca.firebaseio.com/events/"+ data.id +".json/?auth="+localStorage.getItem("idToken"),
  	{
  		title: data.title,
  		about: data.about,
  		url: data.url
  	})
    .then(request => {},
      err => {
  			console.log(err);
  	})
  },
  deleteEvents({commit, state}, id){
    // Action to delete the events;
    axios.delete("https://stardust-4e9ca.firebaseio.com/events/"+ id +".json/?auth="+localStorage.getItem("idToken"))
    .then(request => {},
      err => {
       console.log(err);
    })	
  },
  postEvents({commit, state}, data) {
    // action to add a event in the database;
		axios.post("https://stardust-4e9ca.firebaseio.com/events.json/?auth="+localStorage.getItem("idToken"), data)
		.then(request => {
			console.log(request);
		},err => {
			console.log(err);
		})
  },
  getEvents({commit, state}) {
    // action to get all the events from the database;
    axios.get("https://stardust-4e9ca.firebaseio.com/events.json/")
    .then(request => {
      let li = []
      const events = request.data
      for(let a in events) {
        const data = {
          id: a,
          title: events[a].title,
          about: events[a].about,
          url: events[a].url
        }
        console.log(data)
        li.push(data)
      }
      state.events = li
    },err =>  {
      console.log(err)
    })
  },
  updateTeam({commit, state}, data){
  	// Action to update the team;
    axios.put("https://stardust-4e9ca.firebaseio.com/teams/"+ data.id +".json/?auth="+localStorage.getItem("idToken"),
  	{
  		name: data.name,
			designation: data.designation,
			url: data.url
  	})
  	.then(request=>{},
       err => {
  			 console.log(err)
  	})
  },
  deleteTeam({commit, state}, id){
  	// Action to delete the team;
    axios.delete("https://stardust-4e9ca.firebaseio.com/teams/"+ id +".json/?auth="+localStorage.getItem("idToken"))
  	.then(request => {},
       err => {
  			console.log(err);
  	})	
  },
  postTeam({commit, state}, data){
		// Action to create a team in the database;
    axios.post("https://stardust-4e9ca.firebaseio.com/teams.json/?auth="+localStorage.getItem("idToken"), data)
		.then(request => {
			console.log(request);
		},err => {
			console.log(err);
		})
  },
  getTeam({commit, state}){
		// Action to get all the team members details;
    axios.get("https://stardust-4e9ca.firebaseio.com/teams.json/")
		.then(request => {
			let li = [];
			const teams = request.data
			for(let a in teams) {
				const data = {
					id: a,
					name: teams[a].name,
					designation: teams[a].designation,
					url: teams[a].url
				}
				console.log(data);
				li.push(data)
			}
			state.data = li;
		},err => {
			console.log(err);
		})
  },
 }
})
