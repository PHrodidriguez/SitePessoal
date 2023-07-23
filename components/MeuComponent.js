import './Component.css'
import ComponentDois from './ComponentDois.js'
function MeuComponent(){
    return(
        <div>
        <div className="conteudo">
            <div className="texto">
            <h1>Olá, Eu sou Pedro Rodriguez!</h1>
            <i>Desenvolvedor Front-End</i><br></br> <br></br>
            <p><b>Este é um site pessoal desenvolvido por mim</b><br>
            </br></p>
            </div>
           
        </div>
        <ComponentDois/>
        </div>
    );
}

export default MeuComponent;