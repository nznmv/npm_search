<template>
  <div v-if="totalResults >= 0" >
    <v-card-text>
      <h2 class="text-center">
        Total results: {{totalResults}}
      </h2>
    </v-card-text>

    <v-divider></v-divider>

    <v-data-table
      :headers="headers"
      :items="packageList"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @click:row="handleClick"
    >
    </v-data-table>
    <ModalWindow v-if="dialog"/>
    <div class="text-center pt-2">
      <v-pagination
        v-if="totalResults > 10"
        v-model="page"
        :length="Math.ceil(totalResults/10)"
        :total-visible="8"
      ></v-pagination>
    </div>
  </div>
  <div
    v-else
    class="center"
  >
    <h2>
      First you need to search something...
    </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ModalWindow from "@/components/ModalWindow";

export default {
  name: "Main",
  components: {
    ModalWindow,
  },
  computed: {
    ...mapState([
      'headers',
      'packageList',
      'itemsPerPage',
      'totalResults',
      "dialog",
    ]),
    page: {
      get() {
        return this.$store.state.page
      },
      set(value) {
        this.$store.dispatch('GET_PACKAGE_LIST', { page: value })
      }
    },
  },
  methods: {
    handleClick(event) {
      this.$store.dispatch('OPEN_MODAL', event.package)
    },
  },
};
</script>

<style scoped>
  .center {
    display: flex;
    justify-content: center;
    margin: 40vh 10px 0;
  }
</style>
