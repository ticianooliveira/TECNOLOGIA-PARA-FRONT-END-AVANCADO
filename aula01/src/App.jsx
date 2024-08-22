import React from 'react'
import Adicao from './components/adicao'
import Division from './components/Division'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={1} num2={2}/>
      <Division num1={1} num2={2}/>
      <Subtraction num1={1} num2={2}/>
      <Multiplication num1={1} num2={2}/>
      <PrecisoEstudar name={"Commit"}/>
    </div>
  )
}

export default App