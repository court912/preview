import { RouteObject } from "react-router-dom";

// This file defines routes that are only used by Tempo
// These routes will only be included in development when VITE_TEMPO=true
const routes: RouteObject[] = [
  {
    path: "/tempobook/*",
    element: <></>,
  },
];

export default routes;
