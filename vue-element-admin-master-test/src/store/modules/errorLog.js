const errorLog = {
  state: {
    logs: []
  },
  mutations: {
    AddErrorLog: (state, log) => {
      state.logs.push(log)
    }
  },
  actions: {
    addErrorLog: ({commit}, log) => {
      commit('AddErrorLog', log)
    }
  }
}
export default errorLog
