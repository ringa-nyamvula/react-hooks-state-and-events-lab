import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[appMode,setAppMode] = React.useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const appClass = appMode ? "App dark" : "App light";
  const modeText = appMode ? "Dark Mode" : "Light Mode";

  function toogleAppMode() {
    setAppMode((prevState) => !prevState);
  }

  

  return (
    
    <div className={appClass}> 
      <header>
        <h2>Shopster</h2>
        
        <button onClick={toogleAppMode}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
   
  );
}

export default App;
