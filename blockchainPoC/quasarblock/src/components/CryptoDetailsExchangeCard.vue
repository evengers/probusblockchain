<template>
  <q-card class="q-ma-md q-pa-sm">
    <q-card-section>
      <div class="text-h4">{{ ticker.market.name }}</div>
      <div class="text-h6">
        Trust: <q-avatar size="sm" :color="ticker.trust_score" />
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="column flex flex-center">
        <div class="text-h4">
          <q-icon
            :name="changeLast24Hour > 0 ? 'trending_up' : 'trending_down'"
            :color="changeLast24Hour > 0 ? 'green' : 'red'"
            size="24px"
          />
          ${{ ticker.last }}
        </div>
        <div class="text-h5 q-pt-md">
          Volume: {{ ticker.volume.toFixed(2) }}
        </div>
      </div>
    </q-card-section>
    <q-card-actions class="flex flex-center">
      <q-btn
        color="primary"
        size="lg"
        type="a"
        :href="ticker.trade_url"
        target="__blank"
        flat
      >
        Trade
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    ticker: {
      type: Object,
      required: true,
    },
    changeLast24Hour: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
