import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Bloco de rotas
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Produtos from './components/Produtos.jsx'
import EditarProdutos from './components/EditarProdutos.jsx'
import Home from './components/Home.jsx'
import Erro404 from './components/Erro404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
