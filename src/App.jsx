import React from "react"
export default function App() {
  return (
    <>
      <h1>App</h1>
        <React.Fragment>
          <div className="container">
            
            


            <section>
              <p><a href="/">Home Page</a></p>
                <button onClick={()=>alert("Hello World!")}>Click me</button>
            </section>
            <footer>
              <p>&copy; 2021, Vite.js and React</p>
            </footer>
          </div>
        </React.Fragment>
      <h2>Teste</h2>
    </>
  )
}
