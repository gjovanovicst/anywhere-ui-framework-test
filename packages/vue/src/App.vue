<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
// import { IonApp, IonRouterView, IonMenu, IonInput } from "@modus/ionic-vue";
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
const inject = ref("fooo");
export default defineComponent({
  name: "App",
  components: {
    // IonApp,
    // IonRouterView,
    // IonMenu,
    // IonInput
  },
  provide: {
    mykey: inject,
  },
  setup() {
    console.log(useRouter());
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
