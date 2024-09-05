import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
        {
            [
                {nome: "João", email: "joao@gmail.com", curso: "Sistemas para internet", media: 7},
                {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas da informação", media: 8},
                {nome: "José", email: "jose@gmail.com", curso: "Publicidade", media: 5},
                {nome: "João", email: "joao@gmail.com", curso: "Sistemas para internet"}
            ].map((aluno) =>
            <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}></Aluno>
            )
        }
    </div>
  )
}

export default App