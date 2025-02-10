import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { system } from "@chakra-ui/react/preset";
import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <Toaster />
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
