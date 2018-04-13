import { getToken,removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: '',
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_STATUS: (satte, status) => {
      state.status = status
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INTORDUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    }
  },
  actions: {
    // 用户名登录
    LoginByUserName: ({commit}, userInfo) => {
      const userName = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUserName(userName, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) {
            reject()
          }
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTORDUCTION', data.introduction)
          resolve()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 第三方验证登陆
    /* LoginByThirdParty: ({commit, state},code) => {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code)
        loginByThirdParty(state, status, state.email, state.code).then(response => {
          commit('SET_TOKEN', response.data.token)
          setToken(response.data.token)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    }, */
    // logOut
    LogOut: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        logOut(state.token).then(response => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    // 前端登出
    FadLogOut: ({commit}) => {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    // 动态修改权限
    ChangeRoles: ({commit}, role) => {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          commit('SET_ROLES', response.data.roles)
          commit('SET_NAME', response.data.name)
          commit('SET_AVATAR', response.data.avatar)
          commit('SET_INTORDUCTION', response.data.introduction)
          resolve()
        })
      })
    }
  }
}
export default user
