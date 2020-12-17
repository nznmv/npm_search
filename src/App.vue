<template>
  <v-app>
    <Header/>
    <v-main>
      <Main />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";


export default {
  name: 'App',

  components: {
    Main,
    Header,
    Footer,
  },
};
</script>

