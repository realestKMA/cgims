import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";
import FlagIcon from "vue-flag-icon";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/translucent.css";
import { SetupCalendar } from "v-calendar";
import "v-calendar/dist/style.css";

const app = createApp(App);

app.use(SetupCalendar, {});
app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
    componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
    defaultProps: {
      placement: "top",
      allowHTML: true,
    }, // => Global default options * see all props
  }
);

app.use(createPinia());
app.use(router);
app.use(FlagIcon);

app.mount("#app");
