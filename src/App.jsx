import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('Sofía');
    //AKA const estado = useState('Sofía)
    const [newName, setNewName] = useState('');

    function changeName(e) {
      
      //Evita que el botón recarge la página
      e.preventDefault()

      if(newName.trim() !== '') {
        setName(newName)
        setNewName('')
      }
    }
  
    return (
      <div>
        <h2>Nombre del profesor: {name}</h2>

        <ul>
          <li onClick={() => setName('Data')}>Data</li>
          <li onClick={() => setName('Reyes')}>Reyes</li>
          <li onClick={() => setName('Yolanda')}>Yolanda</li>
        </ul>

        <form onSubmit={changeName}>
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Add a name'/>
          <button type='submit'>Add a name</button>
        </form>

      </div>
    );
  }

export default App