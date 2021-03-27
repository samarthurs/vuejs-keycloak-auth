<template>
  <v-container>
    <h3>{{title}}</h3>
    <p> User <b><i>'{{this.$store.state.userData.username}}' </i></b>
     has administrator privileges and hence can see this page</p>
  </v-container>
</template>

<script>
  export default {
    name: 'Admin',

    data: () => ({
      title: "Admin"
    }),
  }
</script>
