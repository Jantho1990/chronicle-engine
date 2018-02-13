import Vue from 'vue'
import Vuex from 'vuex'

// import Page from '../components/models/Page'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pages: [

    ],
    pageId: 0,
    links: [

    ]
  },
  getters: {
    pages (state) {
      return state.pages
    }
  },
  mutations: {
    page (state, page) {
      let pageId = state.pages.findIndex(_page => _page.id === page.id)
      if (pageId === -1) {
        page.id = state.pageId++
        state.pages.push(page)
      } else {
        state.pages[pageId] = page
      }
    }
  }
})
