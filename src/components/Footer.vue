<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <strong class="subheading"> To get in touch:</strong>


        <v-btn
            v-for="item in links"
            :key="item.title"
            :href="item.href"
            :title="item.title"
            class="mx-4"
            dark
            icon
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    links: [
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/alexander-neznamov-46761b1a8/', title: 'LinkedIn' },
      { icon: 'mdi-github', href: 'https://github.com/nznmv', title: 'Git' }
    ]
  })
}
</script>
