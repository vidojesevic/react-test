import { Navbar } from "./Navbar";
import { Menu } from "./Menu";
import { WelcomeBanner } from "./Banner";
import { AlertWelcome } from "./AlertWelcome";
import { useState, useEffect } from "react";


async function fetchPizzaFromApi() {
    const pizza = await fetch("http://localhost:8000/api/pizza");

    return pizza.json();
}

const pizzaArray = await fetchPizzaFromApi();

export const Home = () => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div>
            {showAlert && <AlertWelcome openHour={10} closeHour={22} />}
            <Navbar />
            <WelcomeBanner />
            <Menu pizzaArray={pizzaArray} />
        </div>
    )
}
