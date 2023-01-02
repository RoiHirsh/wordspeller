import './App.css';
import Keyboard from './keyboard';
import { useState, useEffect } from 'react';

const englishWords = [
  { "CAR": "מכונית" },
  { "BABY": "תינוק" },
  { "DOG": "כלב" },
];

function Char(props) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(false);
  }, [props.count])
  
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
  const { word, charSet, count } = props;

  return (
    <div className='engWord'>
      {word.split('').map((char, index) => (
        <Char key={index} char={char} charSet={charSet} count={count}/>
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
  let charsNotClicked;
  let [charsClicked, setCharsClicked] = useState([]);
  const [count, setCount] = useState(0);
  let hebWord = englishWords[count][Object.keys(englishWords[count])[0]];
  let engWord = Object.keys(englishWords[count])[0];
  charsNotClicked = Array.from(new Set(engWord.split('')));

  useEffect(() => {
    if (compareLists(charsClicked, charsNotClicked)) {
      setCount(count + 1);
      setCharsClicked([]);
    }
  }, [charsClicked, charsNotClicked, count]);
  
  function check(letter) {
    if (charsNotClicked.includes(letter)) {
      setCharsClicked([...charsClicked, letter]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='hebWord'>{hebWord}</h1>
        <EngWord word={engWord} charSet={charsClicked} count={count}/>
        <Keyboard func={check} count={count}/>
      </header>
    </div>
  );
}

export { App, Pronunciation };
