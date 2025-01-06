import './App.css'
import Die from './components/Die'
import {useState} from 'react';
import {nanoid} from 'nanoid'

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({value: Math.floor(Math.random() * 6) + 1,
         isHeld: false,
         id: nanoid()})
    }
    return newDice
  }

  function hold(id){
    console.log(id)
  }

  return(
    <main>
      <div className="dice-container">
        {dice.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} handleClick={ () => hold(die.id)} />)}
      </div>
      <button className= "roll-dice" onClick={() => setDice(generateAllNewDice())}>Roll Dice</button>
    </main>
  )
}


