import React from 'react';
import { Header } from './Header/Header';
import './MainPage/MainPage';


export const MainPage = () => {}

return (
    <div className='box'>
        {character.map((character) => (
            <div className='character' key={character.id}>
                <div>{character.name}</div>
                <div className='image'>
                    <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                </div>
            <div className='button-box'>
                <button>INFO</button>
                <button>ADD</button>
            </div>
        </div> 
        ))}
    </div>
)

export { MainPage };



