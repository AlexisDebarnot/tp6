import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aciertos: 0,
        intentos: 0,
        coloresBotones: {
            colorBotonEasy: "rgb(251,251,251)",
            colorLetraEasy: "rgb(70, 130, 180)",
            colorBotonHard: "rgb(70, 130, 180)",
            colorLetraHard: "rgb(251,251,251)"
        },
        msg: "",
        colorGanador: "steelblue",
        juegoEnCurso: true,
        colors: [],
        colorAJugar: 0,
    },
    actions: {
        aumentarAciertos({ commit }) {
            commit('aumentarAciertos')
        },
        aumentarIntentos({ commit }) {
            commit('aumentarIntentos')
        },
        coloresEasy({ commit }) {
            commit('coloresEasy')
        },
        coloresHard({ commit }) {
            commit('coloresHard')
        },
        cambiarMsg({ commit }, msg) {
            commit('cambiarMsg', msg)
        },
        cambiarColorGanador({ commit }, color) {
            commit('cambiarColorGanador', color)
        },
        cambiarJuegoEnCurso({ commit }, boolean) {
            commit('cambiarJuegoEnCurso', boolean)
        },
        actualizarColor({ commit }, c) {
            commit('actualizarColor', c)
        },
        coloresWin({ commit }) {
            commit('coloresWin')
        },
        rellenarColores({ commit }, arrColores) {
            commit('rellenarColores', arrColores)
        },
    },
    mutations: {
        aumentarAciertos(state) {
            state.aciertos++
        },
        aumentarIntentos(state) {
            state.intentos++
        },
        coloresEasy(state) {
            state.coloresBotones.colorBotonEasy = "rgb(70, 130, 180)"
            state.coloresBotones.colorLetraEasy = "rgb(251,251,251)"
            state.coloresBotones.colorBotonHard = "rgb(251,251,251)"
            state.coloresBotones.colorLetraHard = "rgb(70, 130, 180)"
        },
        coloresHard(state) {
            state.coloresBotones.colorBotonHard = "rgb(70,130,180)"
            state.coloresBotones.colorLetraHard = "rgb(251, 251, 251)"
            state.coloresBotones.colorBotonEasy = "rgb(251,251,251)"
            state.coloresBotones.colorLetraEasy = "rgb(70, 130, 180)"
        },
        cambiarMsg(state, msg) {
            state.msg = msg
        },
        cambiarColorGanador(state, color) {
            state.colorGanador = color
        },
        cambiarJuegoEnCurso(state, boolean) {
            state.juegoEnCurso = boolean
        },
        actualizarColor(state, c) {
            state.colors.splice(c.index, 1, c.color)
        },
        coloresWin(state) {
            for (let index = 0; index < state.colors.length; index++) {
                state.colors[index] = state.colorGanador;
            }
        },
        rellenarColores(state, arrColores) {
            state.colors = arrColores
        },
    }
})