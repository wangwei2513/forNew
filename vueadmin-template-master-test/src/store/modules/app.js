import Cookie from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookie.get('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookie.set('sidebarStatus', 1)
      } else {
        Cookie.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
export default app