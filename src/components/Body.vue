<template>
  <section class="src-components-body">
    <div id="container">
      <div v-for="(color,index) in colors" :key="index">
        <Cuadrado
          :colorAJugar="colorAJugar"
          :retornar="retornar"
          :mostrar="mostrar"
          :color="color"
          :index="index"
          :juegoEnCurso="juegoEnCurso"
          @actualizar-color="actualizarColor($event)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import Cuadrado from './Cuadrado.vue'

  export default  {
    name: 'src-components-body',
    props: {
      cuadrados:Array,
      colors:Array,
      mostrar:Function,       
      retornar: Function,
      juegoEnCurso: Boolean,
      colorAJugar: String
    },
    components: {
      Cuadrado      
    },
    mounted () {
    },
    updated() {
    },
    data () {
      return {    
      }
    },
    methods: {  
      actualizarColor(c) {
          this.$emit('actualizar-color', c)
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
.src-components-body {
  
}
#container {
  margin: 20px auto;
  max-width: 800px;
}
</style>
