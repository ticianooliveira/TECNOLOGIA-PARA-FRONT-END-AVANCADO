import React from 'react'
import styles from './Campanha.modules.css'

const Exercicio3 = (props) => {
    function defineMensagem(mes){

    }
    function defineCorDeFundo(mes){
        if(mes === "setembro"){
            return "Prenvenção ao suicídio"
        }
        else if (mes === "outubro"){
            return "Conscientização sobre o câncer de mama"
        }
        else if (mes === "novembro"){
            return "Concientização ao câncer de próstata"
        }
            
    }
  return (
    <div>Exercicio3</div>
  )
}

export default Exercicio3