import React from "react";
import "./App.scss";
import { FieldComponent } from "./components/field/field.component";

function App() {
  return (
    <div className="App">
      <header></header>
      <main data-testid="main">
        <FieldComponent></FieldComponent>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
