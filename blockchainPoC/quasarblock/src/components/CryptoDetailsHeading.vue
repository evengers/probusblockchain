<template>
  <div class="row">
    <div class="col flex flex-center">
      <q-img width="50px" :src="image"></q-img>
      <span class="text-h3 q-pt-md q-pb-md"> {{ name }} ({{ symbol }}) </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoDetailsHeading",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
