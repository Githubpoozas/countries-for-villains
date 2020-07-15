<template>
  <v-container :class="isEvil ? 'grey darken-4' : 'grey lighten-5'">
    <v-row class="title-row">
      <h1 :class="textEvil">{{ path }}</h1>
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
  },
  computed: {
    isEvil() {
      return this.$store.getters.getIsEvil;
    },
    textEvil() {
      if (this.isEvil) return "white--text";
      return "black--text";
    },
    path() {
      if (this.isEvil === undefined) return "Path?";
      return "Change your mind?";
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
</style>
