import React from "react";
import { Pizza } from "./Pizza";

export const Menu = ({ pizzaArray }) => {
    if (pizzaArray.length === 0) {
        return <p className="text-center">We are still working on our menu. Stay tuned!</p>
    }

    return (
        <div id="menu" className="bg-white border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <div className="flex flex-col">
                    <h2 className="text-3xl under-over-line mt-8 pb-2 text-grag-500 font-semibold text-center">Menu</h2>
                    {
                        pizzaArray.length > 0
                            ? (
                                <>
                                    <p className="text-lg my-4 text-center">Authentic Italian cuisine. 6 different types of pizzas to try. All from our stone oven, all organic, all delicious.</p>

                                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                                        {pizzaArray.map((pizza) => (
                                            <Pizza key={pizza.id} pizza={pizza} />
                                        ))}
                                    </ul>
                                </>
                            )
                            : <p className="text-center">We are still working on our menu. Stay tuned!</p>
                    }
                </div>
            </div>
        </div>
    )
}
