<template >
  <section class="src-components-juego">
    <div id="body">
      <Header/>
      <NavBar
        :dificultadEasy="dificultadEasy"
        :dificultadHard="dificultadHard"
        :inicializarColores="inicializarColores"
      />
      <Body :retornar="retornar"/>
    </div>
  </section>
</template>

<script lang="js">

 import Header from './Header.vue'
 import NavBar from './NavBar.vue'
 import Body from './Body.vue'

  export default  {
    name: 'src-components-juego',
    props: [],
    components: {
      Header,
      NavBar,
      Body
    },
    mounted () {   
      this.inicializarColores()   
    },
    data () {
      return {
        cantidad: 6,
        cuadrados: [1,1,1,1,1,1], 
      }
    },
    methods: {
 
      dificultadEasy(){  
        this.$store.dispatch('cambiarJuegoEnCurso', true)
        this.cuadrados = []
        this.cantidad = 3        
        this.llenarArray()
        this.inicializarColores()
        this.$store.dispatch('coloresEasy')
      },

      dificultadHard(){        
        this.$store.dispatch('cambiarJuegoEnCurso', true)
        this.cuadrados = []
        this.cantidad = 6 
        this.llenarArray()    
        this.inicializarColores()
        this.$store.dispatch('coloresHard')
           
      },

      llenarArray(){
        for (var i = 0; i < this.cantidad; i++) {          
          this.cuadrados.push(1)
        }
      },

      inicializarColores(){
        this.$store.dispatch('cambiarJuegoEnCurso', true)
        this.$store.dispatch('rellenarColores', this.createNewColors(this.cantidad))
        this.cuadrados = [1,1,1,1,1,1]
        this.$store.state.colorAJugar = this.PickColor()
        this.$store.dispatch('cambiarMsg', "") 
        this.$store.dispatch('cambiarColorGanador', "steelblue") 
      },

      createNewColors(numbers){
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }          
          return arr;
      },

      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },

      randomInt(){
        return Math.floor(Math.random() * 256);
      },

      PickColor(){
        return Math.floor(Math.random() * this.cantidad );
      },
      

      retornar(gano) {  
        if(this.$store.state.juegoEnCurso){
          this.$store.dispatch('aumentarIntentos')
          if(gano){
            this.$store.dispatch('aumentarAciertos')
            this.$store.dispatch('cambiarColorGanador', this.$store.state.colors[this.$store.state.colorAJugar])
            this.$store.dispatch('cambiarMsg', "Ganaste!")   
            this.$store.dispatch('cambiarJuegoEnCurso', false)      
            this.$store.dispatch('coloresWin')   
          }else{
            this.$store.dispatch('cambiarMsg', "Intentalo de nuevo!")   
          }  
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
.src-components-juego {
}

#body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
</style>
