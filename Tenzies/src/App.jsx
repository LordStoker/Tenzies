import './App.css'
import Die from './components/Die'
import {useState} from 'react';
import {nanoid} from 'nanoid'

export default function App() {

  const [dices, setDices] = useState(generateAllNewDice());
  const allHeld = dices.every(die => die.isHeld)
  const allSame = dices.every((die, i, array) => die.value === array[0].value)
  
  if(allHeld && allSame){
    alert("You won!")
  }

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
    setDices(prevDices =>
       prevDices.map(dice => 
          dice.id === id ?
          {...dice, isHeld: !dice.isHeld} : dice));
    }

  function rollDice(){
    if(allHeld && allSame){
      setDices(generateAllNewDice())
    }
    setDices(prevDices => 
      prevDices.map(dice => 
        dice.isHeld ? dice : {...dice, value: Math.floor(Math.random() * 6) + 1})
    );
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
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {dices.map(die => 
            <Die 
              value={die.value} 
              key={die.id} 
              isHeld={die.isHeld} 
              handleClick={ () => hold(die.id)} />)
        }
      </div>
      <button className= "roll-dice" onClick={() => rollDice()}>{allHeld && allSame ? "New Game" : "Roll Dice"}</button>
    </main>
  )
}



