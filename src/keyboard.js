import React from "react";

const Keyboard = () => {
  const englishLetters = [
    { "A": "אֶיי" },
    { "B": "בִּי" },
    { "C": "סִי" },
    { "D": "דִי" },
    { "E": "אִי" },
    { "F": "אֵף" },
    { "G": "גִ'י" },
    { "H": "'אֶייְגְ" },
    { "I": "אָי" },
    { "J": "גֶ'יי" },
    { "K": "קֶיי" },
    { "L": "אֵל" },
    { "M": "אֵם" },
    { "N": "אֵן" },
    { "O": "אוֹ" },
    { "P": "פִּי" },
    { "Q": "קְיוּ" },
    { "R": "אָר" },
    { "S": "אֵס" },
    { "T": "טִי" },
    { "U": "יוּ" },
    { "V": "וִי" },
    { "W": "דָבֶּלְיוּ" },
    { "X": "אִיקְס" },
    { "Y": "ווַאי" },
    { "Z": "זֶד" }
  ];

  return (
    <React.Fragment>
      <div className="keyboard-wrapper">
        {englishLetters.map((letter, index) => (
          <div className="letter" key={index}>
            <div className="letterHover">{Object.keys(letter)[0]}</div>
            <div className="pronunciation">{letter[Object.keys(letter)[0]]}</div>
          </div>
        ))}
      </div>
    </React.Fragment>

  )  
//  return (
//    <React.Fragment>
//      <div>
//        {englishLetters.slice(0, 9).map((letter) => (
//          <div className="letter">
//            <div className="letterHover">{Object.keys(letter)[0]}</div>
//            <div className="pronunciation">{letter[Object.keys(letter)[0]]}</div>
//          </div>
//        ))}
//      </div>
//      <div>
//        {englishLetters.slice(9, 18).map((letter) => (
//          <div className="letter">
//            <div className="letterHover">{Object.keys(letter)[0]}</div>
//            <div className="pronunciation">{letter[Object.keys(letter)[0]]}</div>
//          </div>
//        ))}
//      </div>
//      <div>
//        {englishLetters.slice(18).map((letter) => (
//          <div className="letter">
//            <div className="letterHover">{Object.keys(letter)[0]}</div>
//            <div className="pronunciation">{letter[Object.keys(letter)[0]]}</div>
//          </div>
//        ))}
//      </div>
//    </React.Fragment>
//  );
};

export default Keyboard;