<template>
  <v-container>
    <h3>{{ title }}</h3>
    <br />

    <p>
      User
      <b
        ><i>'{{ this.$store.state.userData.username }}' </i></b
      >
      doesn't have administrator privileges
    </p>
    <p>{{userRole}}</p>

    <p>Firstname: {{ this.$store.state.userData.firstname }}</p>
    <p>Lastname: {{ this.$store.state.userData.lastname }}</p>

    <p>Roles:</p>
    <ul id="listwrapper">
      <li v-for="role in this.$store.state.userData.roles" :key="role.id">
        {{ role }}
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Forbidden",
  data: () => ({
    title: "Forbidden",
    userRole: "",
  }),
  method: {
    userRoleFromStore() {
      this.userRole = this.$store.state.userData.roles.filter(role => role.startsWith("dev"));
    },
  created() {
      this.userRoleFromStore();
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: Verdana;
  color: red;
}
</style>
