<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <v-container>
        <Status />
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import StatusCard from "~/components/StatusCard";

export default {
  components: {
    Navigation,
    Footer,
    StatusCard
  }
};
</script>

<style>
html {
  overflow-y: auto;
}
.v-main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
