import { createApp } from 'vue'
import App from './App.vue'
import TaskComponent from "./TaskComponent.vue"

const app = createApp(App)

app.component('TaskComponent', TaskComponent)

app.mount('#app')