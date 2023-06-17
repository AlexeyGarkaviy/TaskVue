import Vue from 'vue'
import Vuex from 'vuex'
import Task from '@/model/task'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  getters: {
    getTasks: (state) => state.tasks,
    getTaskById: (state) => (id: string) =>
      state.tasks.find((task: Task) => task.id === id),
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, { id, title, body }) {
      state.tasks = state.tasks.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
            body,
          }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      state.tasks = state.tasks.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            status: true,
          }
        }
        return task
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    },
    completeTask({ commit }, id) {
      commit('completeTask', id)
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
    },
  },
})

export default store
export const useStore = () => store
