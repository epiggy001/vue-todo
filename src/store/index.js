// Copyright 2017 Clustertech Limited. All rights reserved.
//
// Author: jackeychen (jackeychen@clustertech.com)

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todos: []
}

const getters = {
  findTodo: (state, getters) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

const mutations = {
  addTodo (state, payload) {
    state.todos.push(payload.todo)
  },

  updateTodos (state, payload) {
    state.todos = payload.todos
  }
}

const actions = {
  async addTodo ({commit}, payload) {
    let todo = {done: false, text: payload.text}

    let resp = await fetch('http://192.168.33.10:3000/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(todo)
    })
    let json = await resp.json()
    commit({type: 'addTodo', todo: json})
  },

  async updateTodos ({commit}) {
    let resp = await fetch('http://192.168.33.10:3000/todos')
    let json = await resp.json()
    commit({type: 'updateTodos', todos: json})
  }
}

export default new Vuex.Store({
  modules: {
    todos: {
      namespaced: true,
      actions,
      state,
      getters,
      mutations
    },
    about: {
      namespaced: true,
      state: {
        msg: 'hello'
      }
    }
  }
})
