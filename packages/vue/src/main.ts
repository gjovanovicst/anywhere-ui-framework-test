import { createApp, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { applyPolyfills, defineCustomElements } from "@anywhere-ui/core/loader";
import "@anywhere-ui/core/dist/anywhere-ui/anywhere-ui.css";
import "./assets/css/main.css";

const rootComponent = {
  render: () => h(App),
  components: { App },
};

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(rootComponent)
  .use(store)
  .use(router);

applyPolyfills().then(() => {
  defineCustomElements(window, {
    ce: (eventName: string, opts: any) =>
      new CustomEvent(eventName.toLowerCase(), opts),
  } as any).then(() => {
    app.mount("#app");
  });
});
