<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <StatusCard />
      <v-divider></v-divider>
      <Donate />
    </v-flex>
  </v-layout>
</template>

<script>
import StatusCard from "@/components/StatusCard";
import Donate from "@/components/Donate";

export default {
  components: { StatusCard, Donate },
  data() {
    return {};
  },

  created() {
    this.$store.dispatch("goodAction");
  },
  computed: {

  }
};
</script>
