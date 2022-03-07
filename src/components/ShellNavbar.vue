<template>
  <b-navbar variant="light">
    <b-container>
      <b-navbar-brand href="/">SmartLIS</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item in items" :key="item.name" :href="item.name">
            {{ item.label }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data() {
    // FIXME: Replace with registry
    return {
      items: [
        { name: "patients", label: "Patients" }
      ]
    }
  }
}
</script>
