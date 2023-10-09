<script>
export default{
  data(){
    return{
      mainTitle: "Welkom in de Vue App"
    }
  }
}
</script>

<template>
  <h1>{{ mainTitle }}</h1>
  <label v-bind:for="firstnameFormElement">{{firstnameFormElement}}</label>
  <input type="text": name="firstnameFormElement" v-bind:id="firstnameFormElement">
</template>

<style>
</style>
