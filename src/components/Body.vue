<template>
  <section class="src-components-body">
    <div id="container">
      <div v-for="(color,index) in this.$store.state.colors" :key="index">
        <Cuadrado
          :retornar="retornar"
          :color="color"
          :index="index"
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
      mostrar:Function,       
      retornar: Function,
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
