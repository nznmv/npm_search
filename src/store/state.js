import Vue from 'vue';
import Vuex from 'vuex';

import { getPackage } from "@/api/package";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    packageList: [],
    totalResults: Number,
    page: 1,
    offset: 0,
    query: '',
    itemsPerPage: 10,
    dialog: false,
    selectedPack: {},
    headers: [{
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'package.name',
      width:'150px'
    },
    {
      text: 'Description',
      sortable: false,
      value: 'package.description',
      width:'150px'
    },
    {
      text: 'Version',
      value: 'package.version',
      sortable: false,
      width:'150px'
    },
    ],
  },
  getters: {
    OFFSET: state => {
      return (state.page - 1 ) * 10;
  },
  },
  mutations: {
    SET_PACKAGE_LIST: (state, payload) => {
      state.packageList = payload;
    },
    SET_TOTAL_RESULTS: (state, payload) => {
      state.totalResults = payload;
    },
    SET_QUERY: (state, payload) => {
      state.query = payload;
    },
    SET_PAGE: (state, payload) => {
      state.page = payload;
    },
    SET_OFFSET: (state, payload) => {
      state.offset = (payload.page - 1) * 10;
    },
    SET_SELECTED: (state, payload) => {
      state.selectedPack = payload;
    },

    SET_DIALOG: (state) => {
      state.dialog = !state.dialog ;
    },

},
  actions: {
    GET_PACKAGE_LIST: async ({commit, state, getters}, payload) => {

      if (typeof payload.query !== 'undefined') {
        commit('SET_QUERY', payload.query);
        commit('SET_PAGE', 1);
    }

      if (payload.page > 0) {
        commit('SET_PAGE', payload.page);
        }

      let {objects, total} = await getPackage(state.query, getters.OFFSET);
      commit('SET_PACKAGE_LIST', objects);
      commit('SET_TOTAL_RESULTS', total);
    },

    OPEN_MODAL: ({commit}, payload) => {
      commit('SET_SELECTED', payload);
      commit('SET_DIALOG');
    },
},
});
