<template>
  <div class="navigation">
    <v-app-bar fixed app dark :style="navColor()">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="navTitle" />
      <v-spacer></v-spacer>

      <v-btn
        v-show="isEvil !== undefined"
        @click="goEvil"
        :color="isEvil ? 'blue' : 'red'"
        large
        >{{ !isEvil ? evil.transform : good.transform }}
        <v-icon right large>{{
          !isEvil ? evil.emoticon : good.emoticon
        }}</v-icon></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed app dark :class="drawerBg">
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>The Good one</v-list-item-title>
            <v-list-item-subtitle>some guy</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="credit-box">
            <p class="credit-text">
              <span>Credit :</span>{{ credit.toLocaleString() }}
            </p>
            <p class="credit-text">
              <span>Good :</span> {{ goodPoint.toLocaleString() }}
            </p>
            <p class="credit-text">
              <span>Evil :</span> {{ evilPoint.toLocaleString() }}
            </p>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="drawer = false"
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
      goodPoint: 1,
      evilPoint: 1,
      credit: 10000,
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
        bgColor: "light-blue darken-1",
        transform: "Be Good?",
        emoticon: "mdi-emoticon-excited-outline"
      },
      evil: {
        title: "Countries For Villains",
        bgColor: "red accent-4",
        transform: "Turn Evil?",
        emoticon: "mdi-emoticon-devil-outline"
      },
      noMan: {
        title: "No man's land",
        bgColor: "grey darken-1"
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
      this.$store.dispatch("switchAction");
      if (this.isEvil) return this.$router.push("/evil");
      return this.$router.push("/good");
    },
    navColor() {
      if (this.goodPoint === 0 || this.evilPoint === 0) return false;

      let totalPoint = this.goodPoint + this.evilPoint;
      let goodPercent = Math.floor((this.goodPoint / totalPoint) * 100);
      return (
        "background: linear-gradient(90deg, rgba(33,150,243,1) " +
        (goodPercent - 10) +
        "%, rgba(213,0,0,1) " +
        (goodPercent + 10) +
        "%)"
      );
    }
  },
  watch: {
    isEvil() {
      this.isEvil ? this.goDark() : this.goLight();
    },
    goodPoint() {
      this.navColor();
    },
    evilPoint() {
      this.navColor();
    }
  },
  computed: {
    isEvil() {
      return this.$store.getters.getIsEvil;
    },
    navTitle() {
      if (this.isEvil === undefined) return this.noMan.title;
      if (this.isEvil === true) return this.evil.title;
      return this.good.title;
    },
    drawerBg() {
      if (this.isEvil === undefined) return "bg-noMan";
      if (this.isEvil === true) return "bg-dark";
      return "bg-light";
    }
  }
};
</script>

<style>
.bg-light {
  background-image: url("~assets/background/bg-good.jpg");
  background-position: right;
  background-size: cover;
}
.bg-dark {
  background-image: url("~assets/background/bg-evil.jpg");
  background-size: cover;
}
.bg-noMan {
  background-image: url("~assets/background/bg-noMan.jpg");
  background-size: cover;
}
.credit-box .credit-text {
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.credit-box .credit-text:not(:last-child) {
  margin-bottom: 5px;
}
</style>
