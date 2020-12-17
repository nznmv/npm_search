<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      value="dialog"
      max-width="900"
    >
      <v-card>
        <v-card-title class="headline">
          {{ selectedPack.name || 'unnamed' }},
          {{ selectedPack.version }}
        </v-card-title>

        <v-card-text>
          {{ selectedPack.description || '...' }}
        </v-card-text>

        <v-card-text>
          <p><b>Author: </b>{{selectedPack.author.name || 'unnamed' }}</p>
          <p><b>Email: </b>{{selectedPack.author.email || '-' }}</p>
          <p><b>Username: </b>{{selectedPack.author.username || '-' }}</p>
        </v-card-text>

        <v-card-text id="links">
          <a class="link"
             :href="selectedPack.links.npm">NPM</a>
          <a class="link"
             :href="selectedPack.links.homepage">Homepage</a>
          <a class="link"
             :href="selectedPack.links.repository">Repo</a>
          <a class="link"
             :href="selectedPack.links.bugs">Bugs</a>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ModalWindow",
  computed: {
    ...mapState([
      'selectedPack',
      'dialog',
    ]),
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set() {
        this.$store.dispatch('OPEN_MODAL')
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  #links {
    display: flex;
    justify-content:space-between;

    .link {
      text-decoration: none;
      color: black;
      background-color: lightgray;
      width: 100px;
      border-radius: 15px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: bold;
    }
    .link:hover {
      background-color: lightseagreen;
    }
  }
</style>
