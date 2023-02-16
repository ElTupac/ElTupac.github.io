import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
        body {
          margin: 0;

          & > * {
            font-family: "Nunito", sans-serif;
          }
        }
      `}
    />
    <App />
  </React.StrictMode>
);
