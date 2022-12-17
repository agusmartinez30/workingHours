import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
