<template>
  <div class="header">
	<nav class="navbar navbar-expand-lg">
	  <a class="navbar-brand noo" href="#">
	  	<h2>
	  		<span>s</span>
	  		<span style="font-size:35px">t</span>
	  		<span style="font-size:33px">a</span>
	  		<span style="font-size:30px">r</span>
	  		<span style="font-size:28px">d</span>
	  		<span style="font-size:30px">u</span>
	  		<span style="font-size:33px">s</span>
	  		<span style="font-size:35px">t</span>
	  	</h2>
		
	  </a>	
	  <button class="navbar-toggler icons" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ref="button">
	    <span class="navbar-toggler-icon icon"></span>
	  </button>
	  <div class="collapse navbar-collapse div" id="navbarNav">
	    <ul class="navbar-nav">
	      <li class="navbar-collapse div" @click="$refs.button.click()">
	        <router-link to="/" tag="a" href="" exact >
	        	Home
	        </router-link>
	      </li>
	      <li class="nav-item active-collapse navbar-collapse div" @click="$refs.button.click()" >
          <router-link to="/about" tag="a" exact>
            about
          </router-link>
	      </li>
	      <li class="nav-item active-collapse navbar-collapse div" @click="$refs.button.click()">
          <router-link to="/events" tag="a" exact>
            events
          </router-link>
	      </li>
	      <li class="nav-item active-collapse navbar-collapse div" @click="$refs.button.click()">
          <router-link to="/team" tag="a" exact>
            Team
          </router-link>
	      </li>
	      <li class="nav-item active-collapse navbar-collapse div" @click="$refs.button.click()" v-if="$store.state.toogle">
          <router-link to="/login" tag="a" exact>
            login
          </router-link>
	      </li>
	      <li class="nav-item active-collapse navbar-collapse div" v-if="!$store.state.toogle" @click="$store.commit('check')">
          <router-link to="/logout" tag="a" exact @click="$refs.button.click()">
            logout
          </router-link>
	      </li>
	    </ul>
	  </div>
	</nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {

	mounted() {  
    TweenMax.staggerFrom(" nav >a", 1, { scale:0, opacity:0, ease: "bounce"}, .1) 
    TweenMax.staggerFrom(" li >a", 1, { y:-20, opacity:0, ease: "bounce", delay:1}, .1) 
    TweenMax.staggerFrom("a > h2 > span",1,  {opacity:0, scale:0, delay:2}, .1)
	},
	data: {}
}

</script>

<style scoped>
  .header {
    position:fixed;
    z-index:1;
    width: 100%;
    text-align:center;
    text-transform: uppercase;
    font-family: ubuntu;
    font-size: 20px;
    font-weight: bolder;
    color: white;
  }
  div > nav {
    background: #17141D;
  }
  @media only screen and (min-width: 992px) {
    .div {
      display: flex;
      justify-content: flex-end;
    }

    ul > li {
      margin: 0 20px; 
      padding:0 10px;
    }
    li > a {
      animation : roter 2s linear infinite;
    }
    a > h2 > span {
      animation: changeText 4s linear infinite;
      animation-direction: both;
    }
    @keyframes changeText {
      0% {
        color: white;
      }
      50% {
        color: gray;
      } 
      100% {
        color: wheat;
      }
    }

    @keyframes roter {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(1.5deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(-1.5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

  }
  @media(max-width: 992px) {
    div > ul > li > a {
      width: 100%;
      display: block;
      margin-top: 0px;
      padding: 5px;
    }
  }
  nav > a:first-letter {
    font-size: 50px;
  }
  nav > a {
    padding: 10px;
  }

  a > span:hover {
    color: gray;
    transition: 40ms linear;
  }

  a > span {
    transition: 40ms linear;
  }

  a {
    color: white;
    padding: 8px;
    margin: 2x 0px;
    border-radius: 5px;
    box-shadow: 1px 2px 5px 2px black;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 2px 4px 10px 3px black;	
  }

  a:active {
    box-shadow: 1px 4px 10px 4px gray;
  }

  .icons {
    box-shadow: 2px 4px 10px 3px black;	
    width:50px;
    outline: none;
    transition: 400ms linear;
  }

  .icons:hover {
    transition: 400ms linear;
    border-radius: 50%;
  }

  li {
    margin-top: 15px;
    padding: 0px;
  }

</style>
