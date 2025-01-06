import './App.css'
import Die from './components/Die'
import {useState} from 'react';

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  }


  return(
    <main>
      <div className="dice-container">
        {dice.map((die, index) => <Die value={die} key={index}/>)}

      </div>
    </main>
  )
}


