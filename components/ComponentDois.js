import ComTres from './ComTres'
import './ComDois.css'
function ComponentDois(){
    return(
        <div>
            <div className="conteudodois">
                <div className="content">
                    <div className="box-conteudo">

                    </div>
                    <p><b>Sobre mim<br></br></b><br></br>
                    Sou um jovem de 21 anos pai de dois meninos, moro em Porto Alegre/Rs mas passei boa parte da minha infancia
                    na cidade de Tramandaí no litoral norte. Sou uma pessoa que gosta de estar em familia e gosto de apreciar os momentos
                    simples que temos juntos como passeios em familia ou uma apreciada sessão de filmes em casa, e por que não, né.
                    Há mais ou menos 6 meses, embarquei em uma jornada simplismente incrível onde decidi iniciar uma carreira na área da tecnologia buscando um meio de trabalhar
                    sem sacrificar meu tempo em familia que na verdade é pouco. Como todo bom brasileiro meu dia a dia tem suas dificuldades mas pode-se dizer que 
                    estou no caminho certo para dar um passo a frente e garantir uma certa tranquilidade tão desejada</p>
                    </div>
            </div>
                <ComTres/>
        </div>
    )
}

export default ComponentDois;