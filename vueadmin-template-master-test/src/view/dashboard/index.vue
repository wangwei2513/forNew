<template>
  <div class="dashboard-container">
    <div class="dasboard-text">name:{{name}}</div>
    <div class="dasboard-text">roles:<span v-for="role in roles" :key="role.id">{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapGetters(["name", "roles"])
  }
};
</script>

<style scoped>
.dashboard-container {
  margin: 30px;
}
.dashboard-text {
  font-size: 30px;
  line-height: 45px;
}
</style>
