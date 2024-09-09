export const Pizza = (props) => {
    const getImgUrl = (image) => {
        return `http://localhost:8000/storage/assets/img/${image}`;
    }

    const soldOut = (soldout) => {
        return soldout === 1 ? " bg-gray-300 border-gray-300" : "";
    }

    const buttonSoldOut = (soldout) => {
        return soldout === 1 ? " bg-blue-200" : " hover:bg-blue-700";
    }

    const soldOutText = (soldout) => {
        return soldout === 1 ? " text-gray-500" : "";
    }

    return (
        <li key={props.pizza.id} className={"flex flex-col mt-4 text-center border-gray-500 border rounded rounded-xl" + soldOut(props.pizza.soldOut)}>
            <h3 className={"text-2xl font-bold mt-4" + soldOutText(props.pizza.soldOut)}> {props.pizza.name}</h3 >
            <p className={"mt-4" + soldOutText(props.pizza.soldOut)}>{props.pizza.ingredients}</p>
            <img src={getImgUrl(props.pizza.photoName)} alt={props.pizza.name} className={"m-8 rounded" + soldOut(props.pizza.soldOut)} />
            <span>Price: ${props.pizza.price}</span>
            <button className={"mt-4 w-2/7 mb-4 mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded" + buttonSoldOut(props.pizza.soldOut)}>{props.pizza.soldOut ? 'Sold out' : "Order"}</button>
        </li >
    )
}
