<template>
  <div id="apps">
    <Header />
    <transition name="fade" mode="out-in" exact>
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch("getEvents")
    this.$store.dispatch("getTeam")
  }
}
</script>

<style scoped>
  #apps {
    background: #17141D;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
      transition: 500ms linear;
      animation: up 1s ease-in;
  }

  .fade-leave {
  }

  .fade-leave-active {
      opacity : 0;
      transition: 500ms linear;
      animation: down 1s ease-out;
  }
  @keyframes up {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0px);
    }
  }

  
  @keyframes down {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(40px);
    }
  }
</style>
