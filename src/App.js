import React from "react";
import Header from "./components/Header";
import Routes from "./routes";

import "./styles.css";

const App = () => (
  <div className="App">
    <Header></Header>
    <Routes></Routes>
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

export default App;
