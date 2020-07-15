<template>
  <v-card>
    <v-card-title class="headline">
      Donating?
    </v-card-title>
    <v-container column>
      <v-row>
        <template v-for="country in countries">
          <v-col :key="country.id" cols="12" md="6">
            <v-lazy
              :options="{
                threshold: 0.5
              }"
              min-height="200"
              transition="fade-transition"
            >
              <v-card class="country-card" :key="country.id">
                <div class="card-name-box">
                  <img
                    class="white--text align-end card-name-img"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                  <v-card-title class="card-name-text">
                    {{ country.name }}
                  </v-card-title>
                </div>
                <v-card-text class="country-wealth">
                  Wealth : {{ Number(country.wealth).toLocaleString() }}
                </v-card-text>

                <v-card-actions>
                  <v-form :id="country.code">
                    <v-text-field
                      v-model.number="reserve[country.code]"
                      name="amount"
                      label="Amount"
                      prefix="G"
                      type="number"
                      min="0"
                      step="1000"
                      class="donateAmount"
                    ></v-text-field>
                    <v-btn
                      color="success"
                      @click="donate(country.code)"
                      :disabled="checkAmount(country.code)"
                      >Donate</v-btn
                    >
                    <v-btn
                      color="success"
                      @click="fastDonate(country.code, 1000)"
                      >+1,000</v-btn
                    >
                    <v-btn color="info" @click="fastDonate(country.code, 10000)"
                      >+10,000</v-btn
                    >
                  </v-form>
                </v-card-actions>
              </v-card>
            </v-lazy>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      reserve: {}
    };
  },
  methods: {
    donate(countryCode) {
      this.$store.dispatch("wealthAction", [
        countryCode,
        this.reserve[countryCode]
      ]);
      this.reserve[countryCode] = 0;
    },
    fastDonate(countryCode, amount) {
      this.$store.dispatch("wealthAction", [countryCode, amount]);
    },
    addOrRemove(countryCode, amount) {
      if (this.reserve[countryCode] === undefined) {
        this.reserve[countryCode] = 0;
      }

      if (this.reserve[countryCode] + amount < 0) {
        return;
      }
      this.reserve[countryCode] += amount;
      console.log(this.reserve);
    },
    checkAmount(countryCode) {
      if (
        this.reserve[countryCode] <= 0 ||
        this.reserve[countryCode] === undefined
      ) {
        return true;
      }
      return false;
    }
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries;
    }
  },
  watch: {}
};
</script>

<style>
.card-name-box {
  position: relative;
}
.card-name-img {
  width: 100%;
  height: 150px;
}
.card-name-text {
  position: absolute;
  bottom: 0;
  color: white;
}
.country-wealth {
  padding: 8px;
}
.donateAmount {
  margin: 0;
  padding: 0;
}
</style>
