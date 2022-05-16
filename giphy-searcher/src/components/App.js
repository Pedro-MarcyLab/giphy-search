import NavBar from './NavBar';
import GifContainer from './GifContainer';
import GifSearch from './GifSearch';
import {useState} from 'react';

function App() {
const [load, setLoad] = useState(null)
const [search, setSearch] = useState('')

function handleSearch (input) {
  setSearch(input)
}
function query (search) {
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=83K4haCK47PgJzc99D9L7fHJNMla4mJL&q=${search}&limit=3&rating=g`)
  .then(res => res.json())
  .then((data) => {
      setLoad(data)
  
  })
}

  return (
    <div>
        <NavBar color='white' title="Giphy Search" />
        <div className="ui container">
          <GifSearch search={search} handleSearch={handleSearch} query={query}/>
          <br />
          <GifContainer load={load} setLoad={setLoad}/>
        </div>
    </div>
  );
}

export default App;
