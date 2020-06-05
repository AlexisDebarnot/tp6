<template>
  <section class="src-components-nav-bar">
    <div id="navigator">
      <button id="reset" @click="inicializarColores">New colors!</button>
      <span id="message">{{this.$store.state.msg}}</span>

      <button
        id="easy"
        @click="dificultadEasy"
        :style="{'background-color': $store.state.coloresBotones.colorBotonEasy, 'color': $store.state.coloresBotones.colorLetraEasy}"
      >easy</button>
      <button
        id="hard"
        @click="dificultadHard"
        :style="{'background-color': $store.state.coloresBotones.colorBotonHard, 'color': $store.state.coloresBotones.colorLetraHard}"
      >hard</button>
      <span id="aciertos">Aciertos: {{$store.state.aciertos}}/{{$store.state.intentos}}</span>
    </div>
  </section>
</template>

<script lang="js">


  export default  {
    name: 'src-components-nav-bar',
    props: {
      dificultadHard:Function,
      dificultadEasy:Function,
      inicializarColores:Function,
    },

    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {     


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
  padding: 9px;
}

button:hover {
  color: white;
  background-color: steelblue;
}

#message {
  color: black;
  display: inline-block;
  width: 20%;
  font-weight: bold;
}

#aciertos {
  color: steelblue;
  width: 20%;
  font-weight: bold;
  margin-left: 10px;
}
</style>
