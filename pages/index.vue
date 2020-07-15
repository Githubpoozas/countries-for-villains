<template>
  <v-container class="grey lighten-5">
    <v-row class="title-row">
      <h1>Path?</h1>
    </v-row>
    <v-row>
      <v-col class="mb-6">
        <div class="rounded-lg path-box" @click="goGood">
          <img
            :src="require('@/assets/images/heaven.jpg')"
            class="path-img good-path"
            id="path-good-img"
          />
        </div>
      </v-col>
      <v-col class="mb-6">
        <div class="rounded-lg path-box" @click="turnEvil">
          <img
            :src="require('@/assets/images/hell.jpg')"
            class="path-img bad-path"
            id="path-bad-img"
          />
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

.path-img {
  width: 100%;
  border-radius: 5%;
  transition: transform 0.3s, border 0.5s;
  /* border: solid 0px #000; */
}
.good-path {
  border: solid 0px #2196f3;
}
.bad-path {
  border: solid 0px #d50000;
}
.path-img:hover {
  border: solid 10px transparent;
  transform: translateY(-3%) scale(1.1, 1.1);
}
.path-box {
  /* transition: all 0.3s; */
  /* border: solid 0px #000; */
}
.path-box:hover {
  /* border: solid 5px #000; */
  /* transform: translateY(-3%) scale(1.1, 1.1); */
}
</style>
