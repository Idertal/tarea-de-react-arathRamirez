import Order from "./Order";

export default function Footer() {
  const horaActual = new Date().getHours();
  const horaApertura = 12;
  const horaCierre = 18;
  const estaAbierto = horaActual >= horaApertura && horaActual <= horaCierre;

  return (
    <footer className="footer">
      {estaAbierto ? (
        <Order closeHour={horaCierre} />
      ) : (
        <p>
          Te esperamos entre las {horaApertura}:00 y las {horaCierre}:00.  
          Por ahora, la cocina descansa.
        </p>
      )}
    </footer>
  );
}
