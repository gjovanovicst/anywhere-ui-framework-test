import { createApp, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { applyPolyfills, defineCustomElements } from "@anywhere-ui/core/loader";
import "@anywhere-ui/core/dist/anywhere-ui/anywhere-ui.css";
import "./assets/css/main.css";
import { AnywhereUIVue } from "@anywhere-ui/vue";

const rootComponent = {
  render: () => h(App),
  components: { App },
};

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(rootComponent)
  .use(AnywhereUIVue as any)
  .use(store)
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
