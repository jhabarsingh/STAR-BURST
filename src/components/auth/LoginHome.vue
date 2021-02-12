<template>
	<div id="loginhome">
		<div class="container">
			<div class="jumbotron jumbo">
				<i class="material-icons cur" @click="pushEvent()">arrow_forward</i>
				Manage Events List	
			</div>
			<div class="jumbotron jumbo">
				<i class="material-icons cur" @click="pushTeam()">arrow_forward</i>
				Manage Members List	
			</div>
		</div>
	</div>
</template>

<script >
	export default {
		methods: {
			pushTeam: function() {
				this.$router.push("/teammodel");
			},
			pushEvent: function() {
				this.$router.push("/eventsmodel");
			}
		},

	}
</script>

<style scoped>
  #loginhome {
    padding-top:130px;	
    padding-bottom: 30px;
  }
  .jumbo {
      background: #100E17;
      position: relative;
      box-shadow: 1px 4px 10px 3px black;
      color: white;
      font-family: cursive;
      font-size: 25px
  }

  .jumbo:hover {
      box-shadow: 2px 6px 20px 4px black;
  }

  .jumbo > i {
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 5px 20px;
  }
  .jumbo > i:hover {
    box-shadow: 2px 6px 20px 4px black;
  }
  .cur:hover {
    cursor: pointer;
  }
</style>
