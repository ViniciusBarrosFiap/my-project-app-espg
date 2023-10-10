import { Link, useLocation } from "react-router-dom"
import "./Cabecalho.scss"
import styles from "./Cabecalho.module.css"
export default function cabecalho() {

  const rotaAtual = useLocation()
  return (
    <>
    <header className={styles.cabecalho}>
      <h1>Vite + React</h1>
      <img src="/img/adicionar.png" alt="Imagem"/>
        <nav>
          <ul>
            <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link></li>
          </ul>
        </nav>
    </header>
    </>
  )
}
