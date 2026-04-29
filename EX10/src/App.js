import React, { useState } from 'react';

const styleArgument = { fontSize: '100px', color: 'red' };

function App() {
  const [text, setText] = useState("hello CGU!!");

  const changeText = () => {
    setText(text + "被點了");
  };

  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>
        {text}
      </h1>
    </div>
  );
}

export default App;