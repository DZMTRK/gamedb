import React, {useState} from "react";



const NewItemInput = ({onItemAdd}) => {

    const [title, setTitle] = useState(''); 
    const [year, setYear] = useState(null);
    const [genre, setGenre] = useState ([]);
    const [raiting, setRaiting] = useState (null);
    const [developer, setDeveloper] = useState('');
    const [publisher, setPublisher] = useState([]);


    const addElement = (item) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        };
        fetch('http://localhost:3002/game/', requestOptions);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title,
            year,
            genre,
            raiting,
            developer,
            publisher,
        };
        addElement(newItem);
    };

    return (
        <form onSubmit={onSubmit}>
            <label for="title">Game Title</label>
            <input id="title" type="text" 
                placeholder="Game Name" 
                required
                onChange={(e) =>{setTitle(e.target.value);}}
            />

            <label for="year">Year</label>
            <input id="year" type="number"
                placeholder="1970" min="1970" max="2099" step="1"
                required 
                onChange={(e) =>{setYear(e.target.value)}}
            />

            <label for="genre">Genre</label>
            <select name="genre" id="genre"
                required
                onChange = {(e) => {setGenre([e.target.value]);}}>
                    
                <option value="">--Please choose an option--</option>
                <option value="Arcade">Arcade</option>
                <option value="Adventure">Adventure</option>
                <option value="Fighting">Fighting</option>
                <option value="Racing">Racing</option>
                <option value="Real Time Strategy (RTS)">Real Time Strategy (RTS)</option>
                <option value="Role-playing (RPG)">Role-playing (RPG)</option>
                <option value="Shooter">Shooter</option>
                <option value="Simulator">Simulator</option>
                <option value="Strategy">Strategy</option>
                <option value="Turn-based strategy (TBS)">Turn-based strategy (TBS)</option>
            </select>

            <label for="raiting">Raiting</label>
            <input id="raiting" type="number" 
                placeholder="1.0" min="1" max="10" step="0.1"
                required 
                onChange={(e) =>{setRaiting(e.target.value);}}
            />

            <label for="developer">Developer</label>
            <input id="developer" type="text" 
                required
                onChange={(e) =>{setDeveloper(e.target.value);}}
            />

            <label for="publisher">Publisher</label>
            <input id="publisher" type="text"
                required 
                onChange={(e) =>{setPublisher(e.target.value.split(','));}}
            />
                
            
            <button type="submit" on>
                +ADD
            </button>
        </form>
    )
}

export default NewItemInput;