import { useEffect, useState } from "react"
import { ListaProdutosExterna } from "../components/ListaProdutosExterna";

function Produtos(){
    
    document.title = "Lista de Produtos"
    //Declarando o useState como uma lista de objetos [{}]
    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}]);

    //Estrutura que recebe a lista de produtos externa e repassa para uma lista local
    useEffect(()=>{
       setListaProdutosLocal(ListaProdutosExterna)
    }, [])

    // //Usando o useEffect(hook) que executa sempre baseado em um determinado elemento. Este elemento pode ser:
    // //Um elemento, um componente, um objeto, e ou uma váriavel. Que deve ser monitorado no array de dependencias
    // useEffect(()=>{
    //     console.log("Este useEffect renderiza apenas quando o objeto monitorado sofre alterações")
    // }, [counter2])

    return(
        <div>
            <h1>Lista de Produtos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>PRODUTOS INFORMÁTICOS - QTD:</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Produtos