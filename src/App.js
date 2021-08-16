import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js';

const Name = (nombreParam) => {
  return (
    <h1>{nombreParam.descriAtributo}</h1>
  );
}

function App() {
  return (
    <div className="App">
     <h1>Hola mundo</h1>
       <Name descriAtributo='Descripcion'></Name>,
       <Mensaje color='red' fontSize='50px' message='Estamos' ></Mensaje>
       <Mensaje color='black' fontSize='20px' message='trabajando' ></Mensaje>
       <Mensaje color='green' fontSize='30px' message='desde modulo' ></Mensaje>

    </div>
  );
}

export default App;
