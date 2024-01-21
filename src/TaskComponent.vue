<script>
export default{
  data(){
    return{
      title: "CardTitle"
    }
  },
  props:[
      'id',
      'label',
      'description',
      'prior'
  ],
  methods:{
    SetToDone() {
      this.title= "Changed"
      this.$emit('pleaseChangeLabel', {id: this.id, newText: 'Done'})
    }
  }
}
</script>

<template>
  <div>
      <p>{{ label }}</p>
      <p>{{ description }}</p>
      <p>{{ prior }}</p>
  </div>
  <button @click="SetToDone">Done</button>
</template>

<style scoped>

</style>