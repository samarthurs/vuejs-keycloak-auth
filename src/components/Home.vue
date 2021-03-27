<template>
  <v-container>
    <h3>{{title}}</h3>
    <br>
    <p> User <b><i>'{{this.$store.state.userData.username}}'</i></b> has the below configuration:
    <p> Firstname: {{ this.$store.state.userData.firstname }}</p>
    <p> Lastname: {{ this.$store.state.userData.lastname }}</p>

    <p>Roles:</p>
    <ul id="listwrapper">
      <li v-for="role in this.$store.state.userData.roles" :key="role.id">
        {{role}}
      </li>
    </ul>

  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      title: "Home"
    }),
  }
</script>
