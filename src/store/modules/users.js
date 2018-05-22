const state = {
    currentUser: {}
}

const mutations = {
    userStatus: (state, user) => {
        if (user) {
            state.currentUser = user.email
        } else {
            state.currentUser = {}
        }
    }
}

const getters = {
    currentUser:  state => state.currentUser
}

const actions = {  
     setUser: ({ commit }, user) => {
        console.log('in commit')
        commit('userStatus', user)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}