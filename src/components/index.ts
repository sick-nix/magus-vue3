import { App } from "vue"
import Button from "primevue/button"

export const registerComponents = (app: App) => {
	app.component("Button", Button)
}
