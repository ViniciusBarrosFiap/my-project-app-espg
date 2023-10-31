import { useState } from "react"

function Login(){

    const[usuario, setUsuario] = useState({
        email:"",
        senha:""
    })
    const handleChange = async (e)=>{
        const{name, value} = e.target
        await setUsuario({...usuario, [name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let user;
        try{
            const response = await fetch("http://localhost:5000/usuarios")
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Login - Informações do usuário</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados de acesso</legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu email" value={usuario.email}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha" value={usuario.senha}/>
                        </div>
                        <div>
                            <button ></button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login