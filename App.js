import {FaCode} from 'react-icons/fa'
import './App.css';
import MeuComponent from './components/MeuComponent';
import { useState } from 'react';


function App() {

  const [color,setColor] = useState(false)
  const ChangeColor = () => {
  if (window.scrollY>=90){
    setColor(true)
  } else{
    setColor(false)
  }
}

window.addEventListener('scroll', ChangeColor)
  return (
    <div>
    <header>
      <div className={color ? 'header-bg' : 'header'}>
       <div className="facode"><FaCode/></div> 
          <a><h5>Home</h5></a>
          <a><h5>Sobre mim</h5></a>
          <a><h5>Redes Sociais</h5></a>
      </div>
    </header>
    <MeuComponent/>
    </div>

  )
}

export default App;
