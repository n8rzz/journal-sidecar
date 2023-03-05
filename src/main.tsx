import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { App } from "./App";
import { themeOverrides } from "./theme/theme";
import { DatesProvider } from "@mantine/dates";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DatesProvider
      settings={{ locale: "en", firstDayOfWeek: 0, weekendDays: [0, 6] }}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOverrides}>
        <App />
      </MantineProvider>
    </DatesProvider>
  </React.StrictMode>
);
