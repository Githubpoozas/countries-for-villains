<template>
  <v-container class="grey lighten-5">
    <v-row class="title-row">
      <h1>Path?</h1>
    </v-row>
    <v-row>
      <v-col class="mb-6">
        <div class="rounded-lg" @click="goGood">
          <img :src="require('@/assets/images/heaven.jpg')" class="card-img" />
        </div>
      </v-col>
      <v-col class="mb-6">
        <div class="rounded-lg" @click="turnEvil">
          <img :src="require('@/assets/images/hell.jpg')" class="card-img" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goGood() {
      this.$router.push("/good");
      this.$store.dispatch("goodAction");
    },
    turnEvil() {
      this.$router.push("/evil");
      this.$store.dispatch("evilAction");
    }
  }
};
</script>

<style>
.title-row {
  display: flex;
  justify-content: center;
  color: #000;
}
.rounded-lg {
  cursor: pointer;
}
.card-img {
  width: 100%;
  border-radius: 5%;
}
</style>
