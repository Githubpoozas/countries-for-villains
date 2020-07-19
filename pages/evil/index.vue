<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Take Over!!!
        </v-card-title>
 
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("evilAction");
  },
  computed: {
    isEvil() {
      return this.$store.state.isEvil;
    }
  }
};
</script>
