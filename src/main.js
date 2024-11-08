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
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import DataView from 'primevue/dataview';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';

import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App)

app.use(router).use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(vue3GoogleLogin, {
    clientId: '675409388686-9ol2ntsh63hl4tdcgftvcqv2u6pdgpkk.apps.googleusercontent.com'
});


app.component('Button', Button);
app.component('InputText', InputText);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Badge', Badge);
app.component('OverlayBadge', OverlayBadge);
app.component('Avatar', Avatar);
app.component('Card', Card);
app.component('DataView', DataView);
app.component('SelectButton', SelectButton);
app.component('Tag', Tag);

app.mount('#app')
