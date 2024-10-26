import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';


const app = createApp(App)

app.use(router).use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app')
