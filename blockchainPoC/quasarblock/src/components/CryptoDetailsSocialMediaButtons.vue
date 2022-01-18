<template>
  <div class="row">
    <div class="col flex flex-center">
      <q-btn
        type="a"
        color="primary"
        class="q-mr-sm"
        :href="`https://facebook.com/${facebookUserName}`"
        target="__blank"
      >
        <q-icon class="q-pr-sm" name="mdi-facebook"></q-icon>
        Facebook
      </q-btn>
      <q-btn
        type="a"
        color="blue"
        class="q-mr-sm"
        :href="`https://twitter.com/${twitterUserName}`"
        target="__blank"
      >
        <q-icon class="q-pr-sm" name="mdi-twitter"></q-icon>
        Twitter
      </q-btn>
      <q-btn type="a" color="black" :href="redditLink" target="__blank">
        <q-icon class="q-pr-sm" name="mdi-reddit"></q-icon>
        Reddit
      </q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CryptoDetailsSocialMediaButtons",
  props: {
    facebookUserName: {
      type: String,
      required: true,
    },
    twitterUserName: {
      type: String,
      required: true,
    },
    redditLink: {
      type: String,
      required: true,
    },
  },
});
</script>

