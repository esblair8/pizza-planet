import { firebaseAction } from 'vuexfire'

const state = {
    orders: []
}

const mutations = {
    addOrder: (state, order) => state.orders.push(order)
}

const getters = {
    getNumberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
}

const actions = { 
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)
      })
}

export default {
    state,
    mutations,
    getters,
    actions
}