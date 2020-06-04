<template >
  <section class="src-components-juego">
    <div id="body">
      <Header :colorGanador="colorGanador" :colorAJugar="colors[colorAJugar]" />
      <NavBar
        :msg="msg"
        :aciertos="aciertos"
        :intentosTotales="intentosTotales"
        :coloresBotones="coloresBotones"
        :dificultadEasy="dificultadEasy"
        :dificultadHard="dificultadHard"
        :inicializarColores="inicializarColores"
      />

      <Body
        :colorAJugar="colors[colorAJugar]"
        :cuadrados="cuadrados"
        :colors="colors"
        :mostrar="mostrar"
        :retornar="retornar"
        :juegoEnCurso="juegoEnCurso"
        @actualizar-color="actualizarColor($event)"
      />
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
        colors: [],
        colorAJugar: 0,
        colorGanador: "steelblue",
        coloresBotones : {
          colorBotonEasy: "rgb(251,251,251)",
          colorLetraEasy: "rgb(70, 130, 180)",
          colorBotonHard: "rgb(70, 130, 180)",
          colorLetraHard: "rgb(251,251,251)"
        },
        aciertos:0,
        intentosTotales:0,
        msg: "",
        juegoEnCurso: true
      }
    },
    methods: {
      actualizarColor(c) {
        this.colors.splice(c.index, 1, c.color)
      },
      dificultadEasy(){  
        this.juegoEnCurso = true
        this.cuadrados = []
        this.cantidad = 3        
        this.llenarArray()
        this.inicializarColores()
        this.coloresBotones.colorBotonEasy = "rgb(70, 130, 180)"
        this.coloresBotones.colorLetraEasy = "rgb(251,251,251)"
        this.coloresBotones.colorBotonHard = "rgb(251,251,251)"
        this.coloresBotones.colorLetraHard = "rgb(70, 130, 180)"
      },

      dificultadHard(){        
        this.juegoEnCurso = true
        this.cuadrados = []
        this.cantidad = 6 
        this.llenarArray()    
        this.inicializarColores()
        this.coloresBotones.colorBotonHard = "rgb(70,130,180)"
        this.coloresBotones.colorLetraHard = "rgb(251, 251, 251)"
        this.coloresBotones.colorBotonEasy = "rgb(251,251,251)"
        this.coloresBotones.colorLetraEasy = "rgb(70, 130, 180)"
           
      },

      llenarArray(){
        for (var i = 0; i < this.cantidad; i++) {          
          this.cuadrados.push(1)
        }
      },

      inicializarColores(){
        this.juegoEnCurso = true
        this.colors = this.createNewColors(this.cantidad)        
        this.cuadrados = [1,1,1,1,1,1]
        this.colorAJugar = this.PickColor()
        this.msg = ""
        this.colorGanador = "steelblue"
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
      mostrar(){
          this.color = "rgb(255,0,0)"
      },

      retornar(gano) {  
        if(this.juegoEnCurso){
          this.intentosTotales++;
          if(gano){
            this.aciertos++;
            this.colorGanador = this.colors[this.colorAJugar]
            this.msg = "Ganaste!"   
            this.juegoEnCurso=false      
            for (let index = 0; index < this.colors.length; index++) {
              this.colors[index] = this.colorGanador;
              this.cuadrados = [1,1,1,1,1,1]     
              
            }
          }else{
            this.msg = "Intentalo de nuevo!"
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
