import GeradorCracha from "./components/GeradorCracha";
import styles from "./components/App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      
      <header className={styles.header}>
        <h1>Sistema de Credenciamento 🏷️</h1>
        <p>Preencha os dados abaixo para gerar seu crachá oficial.</p>
      </header>

      <main className={styles.mainContent}>
        <GeradorCracha />
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Evento Tech - Desenvolvido em Aula</p>
      </footer>

    </div>
  );
}

export default App;