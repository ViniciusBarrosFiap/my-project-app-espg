import { useState } from "react"

export default function Login() {

    //Vai receber os dados do FORMULÁRIO!!!
    //É um OBJETO!!!
    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })

    const handleChange = async (e)=>{
        //Destructuring
        const{name,value} = e.target;
        //Preenchendo o Objeto através do
        //useState utilizando o evento OnCHange e 
        //Operador SPREAD(...)
        await setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if(response.ok){
                console.log(response.json())
                const user = await response.json()
                for (let x = 0; x< user.length; x++){
                    const u = user[x]
                    if (u.email === usuario.email && u.senha === usuario.senha){
                        user = u
                        break
                    }
                }
                window.location = "/"
            }else{
                setUsuario({
                    "email":"",
                    "senha":""
                })
                window.location = "/login"
            }
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>
        <h1>Login - Informações do Usuário</h1>
        <h2></h2>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados de Acesso:</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu Email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite a sua Senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
