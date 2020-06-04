<template>
  <section class="src-components-cuadrado">
    <div class="square" :style="{'background-color': color}" @click="mostrarColor"></div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-cuadrado',
    props: {      
      color:String,
      index:Number,
      mostrar:Function,
      retornar: Function,
      colorAJugar: String,
      juegoEnCurso: Boolean,
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      mostrarColor(){ 
        if(this.juegoEnCurso){
          if(this.colorAJugar != this.color){
            if(this.color != "#232323"){
              let obj = {
              color: "#232323",
              index: this.index
            }
            this.$emit('actualizar-color', obj)
            this.retornar(false) 
            }
                     
          }else{          
            this.retornar(true)
          } 
        }
               
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-cuadrado {
}
.square {
  width: 30%;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
