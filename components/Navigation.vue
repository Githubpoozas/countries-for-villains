<template>
  <div class="navigation">
    <v-app-bar fixed app :class="isEvil ? 'bg-dark' : 'bg-light'" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="isEvil ? evil.title : good.title" />
      <v-spacer></v-spacer>

      <v-icon @click="goEvil">{{
        isEvil ? "mdi-emoticon-devil-outline" : "mdi-emoticon-excited-outline"
      }}</v-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
      :color="isEvil ? evil.bgColor : good.bgColor"
    >
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      good: {
        title: "Countries For People",
        bgColor: "light-blue darken-1"
      },
      evil: {
        title: "Countries For Villains",
        bgColor: "red accent-4"
      }
    };
  },
  methods: {
    goDark() {
      this.$vuetify.theme.dark = true;
    },
    goLight() {
      this.$vuetify.theme.dark = false;
    },
    goEvil() {
      this.$store.dispatch("updateEvil");
    }
  },
  watch: {
    isEvil: function() {
      this.isEvil ? this.goDark() : this.goLight();
    }
  },
  computed: {
    isEvil() {
      return this.$store.state.isEvil;
    }
  }
};
</script>

<style>
.bg-light {
  background-image: url("~assets/background/bg-blue.jpg");
}
.bg-dark {
  background-image: url("~assets/background/bg-red.jpg");
}
</style>
