<template>
  <div class="navigation">
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>

      <v-icon
        @click="dark = !dark"
        :color="dark ? 'yellow darken-2' : 'red darken-2'"
        >{{ dark ? "mdi-moon-waxing-crescent" : "mdi-weather-sunny" }}</v-icon
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
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
      dark: false,
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
      title: "Countries For Villains"
    };
  },
  methods: {
    goDark() {
      this.$vuetify.theme.dark = true;
    },
    goLight() {
      this.$vuetify.theme.dark = false;
    }
  },
  watch: {
    dark: function() {
      this.dark ? this.goDark() : this.goLight();
    }
  }
};
</script>
