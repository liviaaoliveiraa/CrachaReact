import { useState } from "react";
import styles from "./GeradorCracha.module.css";

function GeradorCracha() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  const estiloRodape = {
    backgroundColor: cargo.toLowerCase() === "diretor" ? "gold" : "#27ae60"
  };

  return (
    <div className={styles.painel}>
      
      <div className={styles.formulario}>
        <h2>Configurações</h2>
        
        <label>Nome do Visitante:</label>
        <input 
          type="text"
          placeholder="Ex: Ana Souza"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Cargo/Empresa:</label>
        <input 
          type="text"
          placeholder="Ex: Desenvolvedora"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />

        <button onClick={() => { setNome(""); setCargo(""); }}>
          Limpar Tudo
        </button>
      </div>

      <div>
        <div className={styles.cracha}>
          
          <div className={styles.topo}>
            <div className={styles.furo}></div>
            <p>EVENTO TECH 2024</p>
          </div>
          
          <div className={styles.corpo}>
            <h1 className={styles.nomeExibido}>
              {nome || "SEU NOME AQUI"}
            </h1>

            <p className={styles.cargoExibido}>
              {cargo || "Cargo ou Empresa"}
            </p>
          </div>

          <div className={styles.rodape} style={estiloRodape}>
            <span>VISITANTE</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default GeradorCracha;