export default function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        Estamos abiertos hasta las {closeHour}:00. Puedes visitarnos o pedir en línea.
      </p>
      <button className="btn">Hacer pedido</button>
    </div>
  );
}
