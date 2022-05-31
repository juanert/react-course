import { useState } from "react";
import React from "react";

function render(number) {
  
}

function Sub(props) {
  const shoot = (a, b) => {
    alert(b.type);
    document.getElementById("titulo").style.display = "none";
  };
  const UserManagement = () => {
    const [hasRender, setRender] = useState(false);
    const onShow = React.useCallback(() => setRender(true), []);
    return (
      <>
       <button onClick={onShow}>Show Employee Management</button>
       {hasRender && <Sub />}
     </>
    )
 }
  return (
    <div>
      <h2>Es un subtitulo</h2>
      <button onClick={(event) => shoot("Gol!", event)}>Take the shot!</button>
      <button onClick={() => UserManagement}>Take the shot!</button>
      <div id="renderizar">
        {UserManagement()}
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <h1 id="titulo">{props.propiedad}</h1>
      <Sub />
    </div>
  );
}

export default App;
