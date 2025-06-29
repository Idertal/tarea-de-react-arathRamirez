import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Lista base de películas que han marcado mi forma de ver el mundo
const listaDePeliculas = [
  "Pompoko",
  "Perfect Days",
  "Oldboy",
  "Mulholland Drive",
  "Ringu"
];

export default function Owner() {
  // Estado local para manejar mi selección de películas
  const [peliculasFavoritas, setPeliculasFavoritas] = useState(listaDePeliculas);

  return (
    <div className="container">
      <Header />
      
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        background: "#fffbe6",
        borderRadius: "1rem",
        padding: "2rem 3rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
      }}>
        {/* Imagen simbólica tomada de Unsplash, representa el tipo de energía que me inspira */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
          alt="Retrato simbólico"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #edc84b"
          }}
        />

        <h2>Arath Ramírez Rivera</h2>
        <p style={{ fontSize: "1.4rem", color: "#555" }}>arath.riverar@gmail.com</p>
        <p style={{
          maxWidth: 460,
          textAlign: "center",
          fontSize: "1.4rem",
          lineHeight: "1.6",
          color: "#333"
        }}>
          Desarrollador web en formación. Me interesa el cine, la tecnología y los proyectos simbólicos que rompen con lo cotidiano. Esto es un fragmento de mi mundo.
        </p>

        <div style={{ width: "100%", marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Películas que me habitan</h3>
          <ul style={{
            fontSize: "1.3rem",
            listStyle: "square inside",
            padding: 0,
            color: "#444"
          }}>
            {peliculasFavoritas.map((titulo, index) => (
              <li key={index}>{titulo}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
