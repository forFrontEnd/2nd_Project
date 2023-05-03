import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </RecoilRoot>
);
