// import logo from '../src/logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Skaiciuokle from "./components/skaiciuokle";



function App() {

  return (
    <div class="container">
        <h3 className="mx-auto">Skaičiuoklė </h3>
           <div className="row ">
            
                <Skaiciuokle></Skaiciuokle>
          </div>

    </div>
  );
}

export default App;
