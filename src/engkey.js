import React, { useState, useEffect } from 'react';
  
function EngKey(props) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(false);
  }, [props.count]);

  function handleClick() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = props.letter;
    window.speechSynthesis.speak(msg);
    setClicked(true);
    props.func(props.letter)
  }

  return (
    <div 
        className='letter'  
        onClick={clicked ? () => {} : handleClick}
        disabled={clicked}>
        {props.letter}
    </div>
  );
}

export default EngKey;
