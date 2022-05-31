import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar title="Esto es una ruta" color="purple" />}></Route>
        <Route path="contacto" element={<NavBar title="Esto es una ruta" color="green" />} />
        <Route path="*" element={<NavBar title="404 error" color="gray" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
