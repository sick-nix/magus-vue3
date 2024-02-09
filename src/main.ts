import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import "primevue/resources/themes/aura-dark-purple/theme.css"
import "primevue/resources/primevue.min.css"
import { registerComponents } from "./components"

const app = createApp(App)
app.use(PrimeVue)
registerComponents(app)

app.mount("#app")
