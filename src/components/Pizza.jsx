import style from "./styles/pizza-style.module.css";

export default function Pizza({ pizzaObj, onDelete }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;

  return (
    <li className={`${style.pizza} ${soldOut ? style["sold-out"] : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{soldOut ? "Agotada temporalmente" : `$${price}`}</p>
        <button onClick={() => onDelete(name)}>
          Eliminar de la carta 🗑️
        </button>
      </div>
    </li>
  );
}
