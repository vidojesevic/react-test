export const WelcomeBanner = () => {
    return (
        <div className="flex items-center cover-image justify-center pt-16 bg-yellow-500">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">Welcome to ePizza</h1>
                <p className="mt-4 text-2xl pt-4 text-white">Freshly baked pizzas, just for you!</p>
                <button className="mt-6 mb-16 px-6 py-3 bg-yellow-400 hover:text-white text-black hover:bg-blue-700 font-semibold text-xl rounded">
                    Order Now
                </button>
            </div>
        </div>
    );
};

