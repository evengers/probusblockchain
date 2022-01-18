<template>
  <q-page padding>
    <q-table
      grid
      title="Cryptocurrencies"
      :rows="coins"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :pagination="{ rowsPerPage: 12 }"
      :rows-per-page-options="[12, 24, 48, 96]"
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section class="text-center">
              <span class="text-h6">{{ props.row.name }}</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center" style="fontSize: 44px'">
              <div>{{ props.row.symbol }}</div>
            </q-card-section>
            <q-card-actions class="flex flex-center">
              <q-btn
                size="lg"
                color="primary"
                label="View"
                @click="navigateToCryptoDetails(props.row.id)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data: () => ({
    coins: [],
    columns: [
      {
        name: "name",
        align: "center",
        label: "Name",
        field: "name",
      },
      {
        name: "symbol",
        align: "center",
        label: "Symbol",
        field: "symbol",
      },
    ],
    filter: "",
  }),
  async created() {
    try {
      const res = await this.$api.get("coins/list");

      res.status === 200
        ? (this.coins = res.data)
        : alert("There was an error fetching the coins!");
    } catch (error) {
      alert("There was an error fetching the coins!");
    }
  },
  methods: {
    navigateToCryptoDetails(id) {
      this.$router.push({ name: "cryptoDetails", params: { id } });
    },
  },
});
</script>
