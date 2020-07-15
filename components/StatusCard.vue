<template>
  <v-card class="mx-auto card-container">
    <v-card-text>
      <p class="display-1 text--primary">
        STATUS
      </p>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col class="col-12">
            <v-card class="pa-2" outlined tile>
              <p class="status-text">Good : {{ goodPoint }}</p>
            </v-card>
          </v-col>
          <v-col class="col-12">
            <v-card class="pa-2" outlined tile>
              <p class="status-text">Evil : {{ evilPoint }}</p>
            </v-card>
          </v-col>
          <v-col class="col-12">
            <v-card class="pa-2" outlined tile>
              <p class="status-text">Credit : {{ credit }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["goodPoint", "evilPoint", "credit"])
};
</script>

<style>
.card-container {
  margin-bottom: 15px;
}
p.status-text {
  margin: 0;
}
</style>
