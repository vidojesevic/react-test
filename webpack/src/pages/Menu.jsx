import React from "react";
import { Pizza } from "./Pizza";

export const Menu = ({ pizzaArray }) => {
    return (
        <div id="menu" className="bg-white border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <h2 className="text-3xl mt-8 text-grag-500 font-semibold text-center">Menu</h2>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mx-auto">

                    {
                        pizzaArray.length > 0
                            ? pizzaArray.map((pizza) => (
                                <Pizza key={pizza.id} pizza={pizza} />
                            ))
                            : "Loading..."
                    }
                </ul>
            </div>
        </div>
    )
}
