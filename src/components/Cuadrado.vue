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
      retornar: Function,
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      mostrarColor(){ 
        let obj = {
              color: "",
              index: this.index
        }
        if(this.$store.state.juegoEnCurso){
          if(this.$store.state.colors[this.$store.state.colorAJugar] != this.color){
            if(this.color != "#232323"){
              obj.color= "#232323",
              this.$store.dispatch('actualizarColor', obj)
              this.retornar(false) 
            }                   
          }else{          
            this.retornar(true)
            this.color = this.$store.state.colors[this.$store.state.colorAJugar]
            obj.color = this.$store.state.colors[this.$store.state.colorAJugar],
            this.$store.dispatch('actualizarColor', obj)
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
