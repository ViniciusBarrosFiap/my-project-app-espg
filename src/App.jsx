import React from "react"
import Cabecalho from "./components/Cabecalho"
import Section from "./components/Section"
import Footer from "./components/Footer"
import reactLogo from "./assets/react.svg"
import { Outlet } from "react-router-dom"
export default function App() {
  
  let reactLogoAlt = "React Logo"
  
  return (
    <>
      <React.Fragment>
        <div className="container">
          <Cabecalho/>
          <Outlet/>
          <Footer/>
        </div>
      </React.Fragment>
    </>
  )
}
