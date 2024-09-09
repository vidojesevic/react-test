import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import './index.css';

import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div id="home">
                <Home />
                <Footer />
            </div>
        </MantineProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
