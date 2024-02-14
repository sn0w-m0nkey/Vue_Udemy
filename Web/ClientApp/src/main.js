import 'bootstrap/dist/css/bootstrap.css'

import { createApp, defineAsyncComponent } from 'vue'

import App from './App.vue'
import router from './router/router'
import store from './store'

import TheHeader from "@/components/Layout/TheHeader";
import BaseCard from "@/components/UI/BaseCard"
import BaseButton from "@/components/UI/BaseButton"
import BaseDialog from "@/components/UI/BaseDialog"
//import BaseDialog2 from "@/components/UI/BaseDialog2"

import BaseModal from "@/components/UI/BaseModal"
import BaseBadge from "@/components/UI/BaseBadge";
import BaseSpinner from "@/components/UI/BaseSpinner";

// Async component - only loads it when used 
const BaseDialog2 = defineAsyncComponent(() => { return import("@/components/UI/BaseDialog2") })

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-dialog2', BaseDialog2);
app.component('base-modal', BaseModal);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.use(store);
app.use(router)

router.isReady().then(() => {
    app.mount('#myApp')    
});

