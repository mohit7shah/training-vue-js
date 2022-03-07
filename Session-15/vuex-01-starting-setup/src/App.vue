<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favoritw-value></favoritw-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoritwValue from './components/FavoritwValue.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoritwValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      this.$store.dispatch({ type: 'numbers/increase', value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
