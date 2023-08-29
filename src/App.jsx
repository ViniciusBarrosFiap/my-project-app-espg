import React from "react"
import Cabecalho from "./components/Cabecalho"
import Section from "./components/Section"
import Footer from "./components/Footer"
import reactLogo from "./assets/react.svg"
export default function App() {
  
  let reactLogoAlt = "React Logo"
  
  return (
    <>
      <h1>App</h1>
        <React.Fragment>
          <div className="container">
            <Cabecalho/>

            {/* <img src={reactLogo} alt={reactLogoAlt}></img> */}

            <Section reactLogoProps={reactLogo} reactLogoAltProps={reactLogoAlt}/>


            <Footer/>
          </div>
        </React.Fragment>
      <h2>Teste</h2>
    </>
  )
}
