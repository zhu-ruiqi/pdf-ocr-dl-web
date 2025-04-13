// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import PdfUpload from "./PsfUpload";  // 引入我们刚才创建的组件

function App() {
  return (
    <div className="App">
      <h1>PDF Text Extraction</h1>
      <PdfUpload />  {/* 使用组件 */}
    </div>
  );
}

export default App;

