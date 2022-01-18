<template>
  <q-page v-if="details" padding>
    <crypto-details-heading
      :image="details.image.small"
      :name="details.name"
      :symbol="details.symbol"
    ></crypto-details-heading>

    <q-separator class="q-mb-lg"></q-separator>

    <crypto-details-social-media-buttons
      :facebookUserName="details.links.facebook_username"
      :twitterUserName="details.links.twitter_screen_name"
      :redditLink="details.links.subreddit_url"
    ></crypto-details-social-media-buttons>

    <div class="row q-pt-lg">
      <div class="col">
        <p v-html="details.description.en"></p>
      </div>
    </div>

    <div class="row">
      <h4>Exchanges</h4>
    </div>

    <div class="row">
      <div
        class="col-md-4 col-sm-6 col-xs-12"
        v-for="(ticker, index) in usdTickers"
        :key="index"
      >
        <crypto-details-exchange-card
          :ticker="ticker"
          :changeLast24Hour="details.market_data.price_change_24h"
        ></crypto-details-exchange-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import CryptoDetailsHeading from "src/components/CryptoDetailsHeading.vue";
import CryptoDetailsSocialMediaButtons from "src/components/CryptoDetailsSocialMediaButtons.vue";
import CryptoDetailsExchangeCard from "src/components/CryptoDetailsExchangeCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    CryptoDetailsHeading,
    CryptoDetailsSocialMediaButtons,
    CryptoDetailsExchangeCard,
  },
  name: "CryptoDetails",
  data: () => ({
    details: undefined,
  }),
  async created() {
    try {
      const id = this.$route.params.id;
      if (!id) {
        alert("No ID specified. Please try again later.");
        return;
      }

      const res = await this.$api.get(`coins/${id}`);

      res.status === 200
        ? (this.details = res.data)
        : alert("There was an error fetching the coins!");
    } catch (error) {
      alert("Unexpected Error. Please try again later.");
    }
  },
  computed: {
    usdTickers() {
      const usdTickers = this.details.tickers.filter(
        (ticker) => ticker.target === "USD"
      );

      return usdTickers;
    },
  },
});
</script>
