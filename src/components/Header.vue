<template>
  <section class="src-components-header">
    <div id="header" :style="{'background-color': this.$store.state.colorGanador}">
      <h1>
        The Great
        <br />
        <span id="colorDisplay">{{this.$store.state.colors[this.$store.state.colorAJugar],}}</span>
        <br />Guessing Game
      </h1>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: {
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
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
#colorDisplay {
  font-size: 350%;
}
#header {
  transition: all 0.3s;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
</style>
