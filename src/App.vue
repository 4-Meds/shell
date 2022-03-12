<template>
  <div id="shell">
    <shell-navbar/>
    <router-view/>
  </div>
</template>

<script>
import ShellNavbar from './components/ShellNavbar.vue';

export default {
  name: 'App',
  components: {
    ShellNavbar
  }
}
</script>
