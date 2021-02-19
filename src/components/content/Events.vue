<template>
		<div class="events" id="events">
		<div class="container" v-if="check == 'hidden'" >
				<h1> StarDust events</h1>
			<div class="row">
				<div class="col-md-6 col-12" v-for="(event, index) in allEvents" :key=index >
					<div class="jumbotron jumbo">
						<img :src="event.url"class="img-thumbnail ">
						<h3 class="text-uppercase">{{event.title}}</h3>
						<p>
							{{event.about.split(" ").splice(0,25).join(" ") + " . . . . . ."}}
						</p>
						<button class="btn btn-dark" @click="collect(index)">More</button >
				</div>
			</div>
		</div>		
	</div>
	<div class="row popr" v-if="check == 'visible'">
			<div class="col">
				<div class="jumbotron jumbo pop" >
					<i class="material-icons" @click="cancel()">cancel</i>
					<img :src="allEvents[id].url"  class="img-thumbnail img-pop" id="img-pop"/>
					<h1>{{allEvents[id].title}}</h1>
					<h2 id="h2-pop">{{allEvents[id].about}}</h2>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>


<script>
	import {mapGetters} from "vuex"
	export default{
		data() {
			return {
				check: "hidden",
				id: 0,
			}
		},
		computed: {
			...mapGetters([
				"allEvents"
			]),
		},
		methods: {
			collect: function(data) {
					this.id = data
					this.check = "visible"
			},
			cancel: function() {
				this.id=0,
				this.check = "hidden"
			}
		},
		updated() {
			TweenMax.from(".popr",1.5,{opacity:0,x:-400, y:400,  scale:0});
		}
	}
</script>


<style scoped>
.events {
	padding-top: 130px;
	padding-bottom: 12px;
}

.pop {
	position: relative;
}

.popr {
	width: 95%;
	margin: auto;
}

.pop > i {
	position: absolute;
	top: 15px;
	right: 15px;
	padding: 5px;
}

.pop > i:hover {
	box-shadow: 2px 3px 10px 4px black;
	cursor: pointer;
}

#img-pop {
	height: 200px;
}

.pop > h1 {
	width: 70%;
	margin: 8px auto 10px;
	padding: 7px;
	font-size: 25px;
	font-weight: bolder;
	font-family: sherif;
}

#h2-pop {
	text-align: justify;
	font-size: 20px;
	line-height: 30px;
	width: 90%;
	margin: auto;
	font-family: ubuntu;
}

.jumbo {
	margin:10px;
	color: white;
	background: #100E17;
	text-align: justify;
	box-shadow: 10px 6px 10px 2px black;
	text-transform: capitalize;
	font-size: 20px;
	font-family: sherif;
	text-align: center;
}

h1 {
	border-bottom: 2px solid white;
	text-transform: uppercase;
	font-size: 35px;
	font-weight: bolder;
	color:wheat;
	padding: 10px;
	font-family: ubuntu;
	margin-bottom: 30px;
}

.jumbo > img {
	width : 200px;
	height: 130px;
}

.jumbo:hover {
	box-shadow: 10px 6px 20px 3px black;
}

.jumbo > h3 {
	text-align: center;
	padding: 8px 0px 0px 0px;
	font-size: 23px;
	font-weight:bolder;
	font-family: sherif;
}

.jumbo >button {
		padding: 10px 25px;
}

.jumbo > p {
	text-align: justify;
}

</style>
