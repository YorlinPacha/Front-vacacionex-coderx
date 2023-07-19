import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { registerLicense } from '@syncfusion/ej2-base';
import router from './router'
import {createI18n} from 'vue-i18n';
import {messages} from './lang/messages'

registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhfcnRWR2BeVENyW0c=")

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
})
const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')