import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import './index.css';

import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";

// This was test 2
// import { CoderCard } from "./pages/test2/CoderCard";
// <CoderCard />

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Home />
            <Footer />
        </MantineProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
