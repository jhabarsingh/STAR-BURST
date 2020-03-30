<template>
	<div id="teammodel">
		<div class="container" v-if="!toogle">
			<div class="row" >
				<div class="col">
					<div class="jumbotron jumbo h5" v-for="(data, index) in allEvents" :key="index" >
						{{ data.title}}
						<i class="material-icons delete " title="delete" @click="del(index)">delete</i>

						<i class="material-icons update" title="update" @click="update(index)">view_headline</i>
					</div>
				</div>
			</div>
			<div style="text-align:center;">
				<button class="btn btn-outline-light button" @click="add()">Add New Event</button>	
			</div>
			
		</div>

		<div class="container" v-if="toogle">
				<div class="row">
					<div class="col">
						<div class="jumbotron pop-jumbo con" style="font-family: ubuntu;">

							<i class="material-icons cancel dark" @click="toogle = !toogle" title="close">cancel</i>
							<div class="input-group mb-3 mt-2">
							  <div class="input-group-prepend">
							    <span class="input-group-text label" id="basic-addon1">Title</span>
							  </div>
							  <input type="text" class="form-control rels" :value="id >=0 ? allEvents[id].title: ''" aria-label="Username" aria-describedby="basic-addon1"
								ref="title"
							  >
							</div>
							<div class="input-group mb-3 about">
							  <div class="input-group-prepend">
							    <span class="input-group-text label">About</span>
							  </div>
							  <textarea class="form-control rels" aria-label="With textarea" 
							  :value="id>=0 ? allEvents[id].about: ''"
								ref="about"
							  ></textarea>
							</div>
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text label" id="basic-addon1">Image Url</span>
							  </div>
							  <input type="text" class="form-control rels" :value="id >=0 ? allEvents[id].url: ''" aria-label="Username" aria-describedby="basic-addon1"
								ref="url"
							  >
							</div>
							<div style="text-align:center;">
								<button class="btn btn-outline-dark" @click="id >=0 ? updateData(): addData()">
									{{ id >=0 ? "Update": "Add Event"}}
								</button>
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script >
import {mapGetters} from "vuex"
export default{
	created(){
		this.$store.dispatch("getEvents")
	},
	data(){
		return{
			toogle: false,
			id: 0,
			method: "",
		}
	},
	computed:{
		...mapGetters(["allEvents"])
	},
	methods:{
		del: function(val){
			if(confirm("Are you sure you want to delete")){
				this.$store.dispatch("deleteEvents", this.allEvents[val].id)
				setTimeout(()=>{
					location.reload(true)
				},500)
			}
			return
		},
		add: function(){
			this.id = -1
			this.toogle = !this.toogle
		},
		addData: function(){
			this.$store.dispatch("postEvents", {
				title: this.$refs.title.value,
				about: this.$refs.about.value,
				url: this.$refs.url.value
			})

			this.toogle = !this.toogle
			setTimeout(()=>{
					location.reload(true)
				},500)
		},
		update: function(val){
			this.toogle = !this.toogle
			this.id = val
		},
		updateData: function(){
			this.toogle = !this.toogle
			this.$store.dispatch("updateEvents", {
				id: this.allEvents[this.id].id,
				title: this.$refs.title.value,
				about: this.$refs.about.value,
				url: this.$refs.url.value
			})
			setTimeout(()=>{
					location.reload(true)
				},500)

		}
	}		
}

</script>

<style scoped>


.con{
	position: relative;
}

.cancel{
	position: absolute;
	top: 10px;
	right: 20px;
}
#teammodel{
	padding-top:130px;	
	padding-bottom: 30px;
}

.jumbo{
	padding: 20px;
	font-family: ubuntu;
	position: relative;
	background: #100E17;
	color: white;
	box-shadow: 1px 4px 10px 2px black;
}
.jumbo:hover, .pop-jumbo:hover{
box-shadow: 2px 5px 12px 3px gray;	
}
.jumbo > .delete{
	position: absolute;
	top: 10px;
	right: 20px;
	trasition: 1s linear;
}
.jumbo > .update{
	position: absolute;
	top: 10px;
	right: 70px;
	trasition: 1s linear;
}
.pop-jumbo, .label, .rels{
	background: #100E17;
	color: white;
	font-size: 18px;
}
.rels{
	font-family: sherif;
}
i:hover{
	transform: scale(1.1);
	transform: translateY(-2px);
	trasition: 1s linear;
	cursor: pointer;
}

.label{
	width: 150px;
}

.about{
	height: 200px;
}

</style>