import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { registerLicense } from '@syncfusion/ej2-base';
import router from './router'

registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhfcnRWR2BeVENyW0c=")

const app = createApp(App)
app.use(router)
app.mount('#app')