import React, { useState } from 'react'


const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()
    const [ListaDeSorteados, setListaDeSorteados] = useState([])

    function sortearNumero() {
        if (ListaDeSorteados.length < 6) {
            let numSorteado = Math.floor(Math.random() * 60) + 1
            setSorteado (numSorteado)
            setListaDeSorteados([...ListaDeSorteados, numSorteado])
        } else {
            alert("Já temos os 6 números sorteados!")
        }

    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Último número Sorteado: {sorteado}</h1>
        <h1>Sorteados: {ListaDeSorteados.join ("- ")}</h1>
       
    </div>
  )
}

export default HookMegaSena