<template>
	<div id="teammodel">
		<div class="container" v-if="!toogle">
			<div class="row" >
				<div class="col">
					<div class="jumbotron jumbo h5" v-for="(data, index) in allData" :key="index" >
						{{ data.name}}
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
							    <span class="input-group-text label" id="basic-addon1">Name</span>
							  </div>
							  <input type="text" class="form-control rels" :value="id >=0 ? allData[id].name: ''" aria-label="Username" aria-describedby="basic-addon1"
								ref="name"
							  >
							</div>
							<div class="input-group mb-3 mt-2">
							  <div class="input-group-prepend">
							    <span class="input-group-text label" id="basic-addon1">Designation</span>
							  </div>
							  <input type="text" class="form-control rels" :value="id >=0 ? allData[id].designation: ''" aria-label="Username" aria-describedby="basic-addon1"
								ref="designation"
							  >
							</div>
							<div class="input-group mb-3">
							  <div class="input-group-prepend">
							    <span class="input-group-text label" id="basic-addon1">Image Url</span>
							  </div>
							  <input type="text" class="form-control rels" :value="id >=0 ? allData[id].url: ''" aria-label="Username" aria-describedby="basic-addon1"
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
		this.$store.dispatch("getTeam")
	},
	data(){
		return{
			toogle: false,
			id: 0,
			method: "",
		}
	},
	computed:{
		...mapGetters(["allData"])
	},
	methods:{
		del: function(val){
			if(confirm("Are you sure you want to delete")){
				this.$store.dispatch("deleteTeam", this.allData[val].id)
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
			this.$store.dispatch("postTeam", {
				name: this.$refs.name.value,
				designation: this.$refs.designation.value,
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
			this.$store.dispatch("updateTeam", {
				id: this.allData[this.id].id,
				name: this.$refs.name.value,
				designation: this.$refs.designation.value,
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