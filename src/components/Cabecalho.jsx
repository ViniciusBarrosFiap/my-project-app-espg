import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"
export default function cabecalho() {
  return (
    <>
    <header className={styles.cabecalho}>
      <h1>Vite + React</h1>
      <img src="/img/adicionar.png" alt="Imagem"/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/editar/produtos/:id">Editar Produtos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
    </header>
    </>
  )
}
