import React, {useState} from "react";
import "./../styles/App.css";

function App() {
  const [getFlag,setFlag] = useState(false);

  const onClickHandler=()=>{
    setFlag(true);
  }
//done
  return (
    <div id="main">
     <button id="click" onClick={onClickHandler}>Show</button>
     {getFlag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}

// import React, {Component, useState} from "react";
// import "./../styles/App.css";

// function App() {
//   return (
//     <div id="main">
//       // Do not alter the main div
//     </div>
//   );
// }


// export default App;




export default App;