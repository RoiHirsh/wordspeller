import './App.css';
import Keyboard from './keyboard';
import { useState, useEffect } from 'react';

const englishWords = [
  { "CAR": "תינוק" },
  { "BABY": "בִּי" },
  { "DOG": "סִי" },
];

const hebWord = englishWords[0][Object.keys(englishWords[0])[0]]
const engWord = Object.keys(englishWords[1])[0]
const charsNotClicked = [...new Set(engWord.split(''))];

function Char(props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (props.charSet.includes(props.char)) {
      setClicked(true);
    }
  }, [props.charSet, props.char]);

  return (
    <div
      className={clicked ? "character-clicked" : "character"}
    >
      {props.char}
    </div>
  );
}

function EngWord(props) {
  return (
    <div className='engWord'>
      {props.word.split('').map((char, index) => (
        <Char key={index} char={char} charSet={props.charSet}/>
      ))}
    </div>
  );
}

function Pronunciation(props) {
  return <div className="pronunciation">{props.pronunciation}</div>;
}

function compareLists(list1, list2) {
  const sortedList1 = list1.sort();
  const sortedList2 = list2.sort();
  return sortedList1.join('') === sortedList2.join('');
}

function App() {
  const [charsClicked, setCharsClicked] = useState([]);
  function check(letter) {
    if (charsNotClicked.includes(letter)) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = 'Great';
      window.speechSynthesis.speak(msg);
      setCharsClicked([...charsClicked, letter])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='hebWord'>{hebWord}</h1>
        <EngWord word={engWord} charSet={charsClicked}/>
        <Keyboard func={check}/>
      </header>
    </div>
  );
}

export { App, Pronunciation };
