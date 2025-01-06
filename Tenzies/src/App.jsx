import './App.css'
import Die from './components/Die'
import {useState} from 'react';
import {nanoid} from 'nanoid'

export default function App() {

  const [dices, setDices] = useState(generateAllNewDice());

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

   setDices(prevDices => prevDices.map(dice => (
    dice.id === id ?
     {...dice, isHeld: !dice.isHeld} : dice)));
    }
    // const newDice = dice.map(die => {
    //   if(die.id === id){
    //     return {...die, isHeld: !die.isHeld}
    //   }
    //   return die
    // })
    // setDice(newDice)
  

  return(
    <main>
      <div className="dice-container">
        {dices.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} handleClick={ () => hold(die.id)} />)}
      </div>
      <button className= "roll-dice" onClick={() => setDices(generateAllNewDice())}>Roll Dice</button>
    </main>
  )
}



