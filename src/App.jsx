import './App.css'

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');
  
    const changeName = (newName) => {
      if (newName.trim() !== '') {
        setName(newName);
        setNewName('');
      }
    };
  
    const handleNameClick = (teacherName) => {
      setName(teacherName);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      changeName(newName);
    };
  
    return (
      <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
          <li onClick={() => handleNameClick('Data')}>Data</li>
          <li onClick={() => handleNameClick('Reyes')}>Reyes</li>
          <li onClick={() => handleNameClick('Yolanda')}>Yolanda</li>
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add a name"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

export default App
