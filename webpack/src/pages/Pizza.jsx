export const Pizza = (props) => {
    const getImgUrl = (image) => {
        return `http://localhost:8000/storage/assets/img/${image}`;
    }

    const soldOut = (soldout) => {
        return soldout === 1 ? " bg-gray-300" : "";
    }

    const buttonSoldOut = (soldout) => {
        return soldout === 1 ? " bg-blue-200" : "";
    }

    return (
        <li key={props.pizza.id} className={"flex flex-col mt-4 text-center border-gray-500 border rounded rounded-8" + soldOut(props.pizza.soldOut)}>
            <h3 className="text-2xl font-bold mt-4"> {props.pizza.name}</h3 >
            <p>{props.pizza.ingredients}</p>
            <img src={getImgUrl(props.pizza.photoName)} alt={props.pizza.name} className="m-4 rounded" />
            <span>Price: ${props.pizza.price}</span>
            <button className={"mt-4 w-1/4 mb-4 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" + buttonSoldOut(props.pizza.soldOut)}>{props.pizza.soldOut ? 'Sold out' : "Order"}</button>
        </li >
    )
}
