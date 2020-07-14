<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default {
  components: {
    Navigation,
    Footer
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
