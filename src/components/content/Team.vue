<template>
	<div class="about" id="team">
		<div class="container" v-if="checks == 'hidden'">
			<h1>FOUNDERS</h1>
			<div class="row">
				<div class="col-md-6 col-12" v-for="(data, index) in allData" :key="index">
					<div class="jumbotron jumbo" :title="data.name">
						<div class="row">
								<div class="col-12">
									<img :src="data.url" class="img-thumbnail">
								</div>
								<div class="col-12 name">
									{{data.name}}
								</div>
								<div class="col-12 designation text-uppercase">
									{{data.designation}}
								</div>
								<button class="btn btn-dark db"  @click="clickMe(index)">About</button >
						</div>
					</div>
				</div>
			</div>
			<hr>
			<h1>TEAM MEMBERS</h1>
			<div class="row">
				<div class="col-md-6 col-12" v-for="data in allData">
					<div class="jumbotron jumbo" >
						<div class="row">
								<div class="col-12">
									<img :src="data.url" class="img-thumbnail">
								</div>
								<div class="col-12 name">
									{{data.name}}
								</div>
								<div class="col-12 designation">
									{{data.designation}}
								</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="row popr" v-if="checks=='visible'">
			<div class="col">
				<div class="jumbotron jumbo pop" >
					<i class="material-icons" @click="cancel()">cancel</i>
					<img :src="allData[id].url"  class="img-thumbnail img-pop" />
					<h1 class="h1-pop">{{allData[id].name}}</h1>
					<h2 class="h2-pop">{{allData[id].designation}}</h2>
					<p>
						{{allData[id].about}}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import {mapGetters} from "vuex"
export default {
	data() {
		return {
			checks:'hidden',
			id: 0,
			color:'red'
		}
	},
	computed: {
		...mapGetters([
				"allData"
			])
	},
	methods: {
		clickMe: function(key) {
			this.id = key
			this.checks = "visible"
		},
		cancel: function() {
			this.checks = "hidden"
		}
	},
	updated() {
		TweenMax.from(".popr", 1.5, {opacity:0,x:-300, y:300, scale:0});
	}
}
</script>


<style scoped>
	

.db{
	padding: 10px 20px ;
	margin: 10px auto -20px auto;
}

.h1-pop{
	font-family:cursive;
	font-size: 30px;
	text-align: center;
	width: 60%;	
	font-weight: bolder;
}
.h2-pop{
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	font-style: italic;
}
.img-pop{
	max-width: 40%;
	margin-left: 30%;
}
.img-pop:hover{
	box-shadow: 1px 3px 10px 4px black;
}

.jumbo > p{
	font-size: 20px;
	text-align: justify;
}
.about{
	padding-top: 100px;
}
.pop > *{
	margin-top: 10px;
}
.pop > p{
	margin-top: 15px;
	font-family: ubuntu;
	font-size: 1.4em;
}
.jumbo{
	background: #100E17;
	color: wheat;
	box-shadow: 2px 4px 10px 2px black;
}
img{
	width: 50%;
	margin-left:25%;
}
.name{
	font-size: 25px;
	font-weight: bolder;
	font-family: serif;
	text-align: center;
}
.designation{
	text-align: center;
	color: white;
	font-family: ubuntu;
}

.jumbo:hover{
	box-shadow: 10px 6px 20px 5px black;
}

hr{
	box-shadow: 1px 4px 10px 2px black;	
}

h1{
	font-family: ubuntu;
	color: wheat;
	border-bottom: 2px solid white;
	margin: 25px auto;
	font-weight: bolder;
	padding: 5px;

}

.pop{
	position: relative;
	width: 80%;
	margin: 10px auto;
}
i{
	position: absolute;
	right: 10px;
	top: 10px;
}
i:hover{
	box-shadow: 1px 2px 10px 4px black;
	cursor: pointer;
}

.popr{
	width: 100%;
	margin: auto;
}
</style>
