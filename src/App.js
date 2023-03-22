import './App.css';
import { Header } from './components/Header/Header.js'
import { MainPage } from './components/MainPage/MainPage.js';
//import { Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer.js';
//import { SearchInput } from './components/SearchInput'

function App() {
  return (
    <>
      <div className="App">
        <div onClick={clickLogo} className='logo'>Marvel Heros</div>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar fetchSearchResults={fetchSearchResults} />
                <MyTeam myTeam={myTeam} deleteFromMyTeam={deleteFromMyTeam} />
                <PageHeros heros={heros} addToMyTeam={addToMyTeam} />
              </>
            }
            />
            <Route path="/character/:id" element={<PageCharacterInfo />} />
            <Route path="*" element={<div>ROUTE NOT FOUND</div>} />
          </Routes>
        </div>
        <div onClick={clickLogo} className='logo'><span>&#169;</span> Katarina Krstić</div>
      </div>
    </>
  );
};

export default App;



//<SearchInput></SearchInput>
//<Route exact path='/' component={ MainPage } />