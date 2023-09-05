import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Bloco de rotas
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Produtos from './routes/Produtos.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Home from './routes/Home.jsx'
import Erro404 from './routes/Erro404.jsx'
import Contato from './routes/Contato.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App/>, errorElement: <Erro404/>,
    children:[
      {path:'/', element:<Home/>},
      {path:'/produtos', element:<Produtos/>},
      {path:'/editar/produtos/:id', element:<EditarProdutos/>},
      {path:'/contato', element:<Contato/>}

  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
