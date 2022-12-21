import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes propios
import Boton from "./Componentes/Boton.jsx";
import Input from "./Componentes/Input.jsx";

 
function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const botonFormulario =() =>{
    if (password==='252525') {
      return (<Boton></Boton>)
    }
  } 

  return (
    <div className="App">
      <h1>DESAFIO ESTADOS & COMPONENTES</h1>
      <Input
        nombre={nombre}
        setNombre={setNombre}
        password={password}
        setPassword={setPassword}
        ></Input>
        {botonFormulario()}
    </div>
  );
}

export default App;
