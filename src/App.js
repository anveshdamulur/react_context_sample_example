import AddMovie from './AddMovie';
import Increment from './Increment';
import Movie from './Movie';
import { Movieprovider } from './MovieContext';
import Movies from './Movies';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <center>
        <Movieprovider>
          <Nav/>
        
          <AddMovie/>
          <Movies/>

        </Movieprovider>  
      </center>
    </div>
  );
}

export default App;
