<template>
	<div class="login" id="login">
		<div class="container">
			<div class="jumbotron jumbo jumbos">
				<form @submit.prevent='authenticate()'>
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email</label>
				    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
						v-model="email"
				    >
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="exampleInputPassword1"
						v-model="password"
				    >
				  </div>
				  <button type="submit" class="btn btn-primary"
				  >Submit</button>
				</form>
			</div>
	</div>
	</div>
	
</template>


<script>
import axios from "axios"

export default{
	mounted(){
		TweenMax.from(".jumbos", 1, {opacity:0, scale:0, delay:.5})
	},
	data(){
		return{
			email: "",
			password: ""
		}
	},
	methods:{
		authenticate:function(){
			axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnE-P1m4W9yudurKXgrOCUUA6Whr5bZMM",
			{
				email: this.email,
				password: this.password,
				returnSecureToken: true
			})
			.then(rel=>{
				this.$store.commit('check')
				localStorage.setItem("idToken", rel.data.idToken)
				localStorage.setItem("expiresIn", new Date(new Date().getTime() + rel.data.expiresIn*1000))
				this.$router.push("/loginhome")
				this.$store.dispatch("autoLogout")
			},err=>{
				console.log(err)
			})
		}
	}
}
	
</script>


<style scoped>
.jumbo{
	background: #100E17;	
	width: 60%;
	margin: 20px auto;	
	box-shadow: 2px 4px 10px 3px black;
}	

.login{
	padding-top: 100px;

	padding-bottom: 12px;

}
label{
	color: white;
	font-family: ubuntu;
	font-size: 25px;
}
button{
	background:#100E17;

}
button:hover{
	background:#100E17;
	box-shadow: 2px 4px 10px 3px black;
}
</style>