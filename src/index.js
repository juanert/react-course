import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import Lists from "./components/Lists";
import Form from "./components/Form";
import Hooks from "./components/Hooks";
import UseContext from "./components/UseContext";
import UseRef from "./components/UseRef";
import Fetch from "./components/Fetch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Fetch/>
    <UseRef/>
    <UseContext/>
    <Hooks />
    <App />
    <Form />
    <Lists />
    <NavBar title="Esto es naranja" color="orange" link="facebook.com"/>
    <NavBar title="Esto es rojo" color="red" link="instagram.com"/>
    <NavBar title="Esto es azul" color="blue" link="twitter.com"/>
    <Test />
  </div>
);
