<script>
export default{
  data(){
    return{
        name:'',
        counter:0,
        tasks:[],
        description:"",
      label:"",
      prior:""
    }
  },
  methods: {
      addTask(){
        //ingevulde data in object steken
        const newTask = {
          description: this.description,
          label: this.label,
          prior: this.prior
        }
        //object in lijst steken
        this.tasks.push(newTask);
        //velden opnieuw leegmaken
        this.description="";
        this.label="";
        this.prior="";
      }
  }
}
</script>

<template>
  <div class="container">
    <form v-on:submit.prevent="addTask()">
      <label for=""> omschrijving</label>
      <input type="text"  v-model="description" name="" id="">

      <label for=""> label</label>
      <input type="text" v-model="label" name="" id="">
        <p>{{label}}</p>
      <label for=""> prioriteit</label>
      <input type="text" v-model="prior" name="" id="">

      <button type="submit">voeg een taak toe</button>
    </form>
  </div>

  <div class="container">
    <div v-if="tasks.length ===0">
      <p>label</p>
      <p>description</p>
      <p>prior</p>
    </div>
    <div v-for="task in tasks" v-bind:key="task.description">
    <p>{{ task.label }}</p>
    <p>{{ task.description }}</p>
    <p>{{ task.prior }}</p>
    </div>
  </div>
</template>


<style>
</style>
