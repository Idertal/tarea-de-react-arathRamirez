import Pizza from "./Pizza";
import { useState, useEffect } from "react";

export default function Menu() {
  const [pizzas, setPizzas] = useState([
    {
      name: "Focaccia",
      ingredients: "Pan artesanal con aceite de oliva y romero",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomate fresco y queso mozzarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomate, mozzarella, espinaca y ricotta",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomate, mozzarella, champiñones y cebolla",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomate, mozzarella y pepperoni artesanal",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomate, mozzarella, jamón curado, arúgula y burrata",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ]);

  // Cargando datos desde localStorage al montar el componente
  useEffect(() => {
    const data = localStorage.getItem("pizzas");
    if (data) setPizzas(JSON.parse(data));
  }, []);

  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
  }, [pizzas]);

  const eliminarPizza = (nombrePizza) =>
    setPizzas((prev) => prev.filter((pizza) => pizza.name !== nombrePizza));

  return (
    <main className="menu">
      <h2>Nuestro Menú</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Cocina italiana honesta, directa del horno de piedra. Seis
            combinaciones creadas con intención. Todo orgánico, todo delicioso.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} onDelete={eliminarPizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Aún estamos afinando nuestro menú. Vuelve más tarde y descubre algo
          especial.
        </p>
      )}
    </main>
  );
}
