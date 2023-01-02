import './App.css';
import Keyboard from './keyboard';
import { useState, useEffect } from 'react';

const englishWords = [
  { "CAT": "חָתוּל" },
  { "DOG": "כֶּלֶב" },
  { "BIRD": "צִפּוֹר" },
  { "FISH": "דָּג" },
  { "MONKEY": "קוֹף" },
  { "ELEPHANT": "פִּיל" },
  { "LION": "אַרְיֵה" },
  { "GIRAFFE": "גִ'ירָפָה" },
  { "PANDA": "פַּנְדָּה" },
  { "TIGER": "נָמֵר" }
  ];
const msg = new SpeechSynthesisUtterance();

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
  const { engWord, charSet, count } = props;

  useEffect(() => {
    console.log(engWord)
    const msgWordUp = new SpeechSynthesisUtterance();
    msgWordUp.text = engWord;
    window.speechSynthesis.speak(msgWordUp);
  }, [count])
 
  return (
    <div className='engWord'>
      {engWord.split('').map((char, index) => (
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
  let hebWord;
  let engWord
  let [charsClicked, setCharsClicked] = useState([]);
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  hebWord = englishWords[count][Object.keys(englishWords[count])[0]];
  engWord = Object.keys(englishWords[count])[0];
  charsNotClicked = Array.from(new Set(engWord.split('')));

  function handleCorrectGuess() {
    msg.text = engWord;
    window.speechSynthesis.speak(msg);
    setShowButton(true);
  }
  useEffect(() => {
    if (compareLists(charsClicked, charsNotClicked)) {
      if (count === englishWords.length - 1) {
        alert('נגמרו המילים, המשחק נגמר');
        window.location.reload();
      } else {
        handleCorrectGuess();
      }
    }
  });

  function check(letter) {
    if (charsNotClicked.includes(letter)) {
      setCharsClicked([...charsClicked, letter]);
    }
  }
  
  function nextWord() {
    setCount(count + 1);
    setCharsClicked([]);
    setShowButton(false)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='hebWord'>{hebWord}</h1>
        <EngWord engWord={engWord} charSet={charsClicked} count={count}/>
        <Keyboard func={check} count={count} msg={msg}/>
        <div className='nextword'>{ showButton && <button className='nextwordbutton' onClick={nextWord}>למילה הבאה</button>}</div>
      </header>
    </div>
  );
}

export { App, Pronunciation };
