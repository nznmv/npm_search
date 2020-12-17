<template>
  <v-app-bar
    app
    dark
    class="teal"
  >
    <v-container>
      <v-text-field
        flat
        hide-details
        label="Search"
        type="text"
        append-icon="mdi-magnify"
        solo-inverted
        @click:append="searchRun"
        @keydown="searchKeypress"
        v-model="input"
      ></v-text-field>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    input: '',
    searchDelayTime: 1000,
    searchDelayTimeout: null,
  }),

  methods: {
    searchRun() {
      this.clearSearchOrder()
      this.$store.dispatch('GET_PACKAGE_LIST', {query: this.input.trim()});
    },

    searchDelay() {
      this.clearSearchOrder()
      this.searchDelayTimeout = setTimeout(() => {
        this.searchRun()
        this.searchDelayTimeout = null
      }, this.searchDelayTime)

    },
    searchKeypress(key) {
      if (key.keyCode === 13) {
        return this.searchRun()
      }
      this.searchDelay()
    },

    clearSearchOrder() {
      if (this.searchDelayTimeout !== null) {
        clearTimeout(this.searchDelayTimeout)
        this.searchDelayTimeout = null
      }
    }

  },
}


</script>
