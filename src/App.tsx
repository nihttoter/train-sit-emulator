import React from "react";
import "./App.scss";
import { CoachComponent } from "./components/coach/coach.component";

function App() {
  return (
    <div className="App">
      <header></header>
      <main data-testid="main">
        <CoachComponent></CoachComponent>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
