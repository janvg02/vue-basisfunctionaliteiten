<script>
export default{
  data(){
    return{
      naam: "JAN"
    }
  },
  methods: {
    showText(){
      return this.naam;
    }
  }
}
</script>

<template>
  <h1>Welkom in het project</h1>
  <p>{{showText() }}</p>
</template>


<style>
</style>
