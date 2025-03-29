import setupApp from "./app";

import "@klinecharts/pro/dist/klinecharts-pro.css";
import "./index.css";

// Import and initialize Tempo Devtools
import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

setupApp(document.querySelector<HTMLDivElement>("#app")!);
