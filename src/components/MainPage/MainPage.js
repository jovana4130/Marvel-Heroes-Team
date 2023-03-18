import React from 'react';
import { Header } from './Header/Header';
import './MainPage/MainPage.css';
import { useEffect, useState } from 'react';

export const MainPage = () => {
    const [character, setCharacters] = useState([]);
    const addOnList = () => {
        
    }

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/characters?apikey=____42c944f16bc51826eb97319ae90f78b6')
        .then(data => data.json())
        .then( 
            res => {
                console.log(res.data.results)
                setCharacters(res.data.results)
            }
        )
    }, [])
}

return (
    <div className='box'>
        { character.map((character) => (
            <div className='character' key={ character.id }>
                <div>{ character.name }</div>
                <div className='image'>
                    <img src={ character.thumbnail.path + '.' + character.thumbnail.extension } alt={ character.name } />
                </div>
            <div className='button-box'>
                <button>Info</button>
                <button>Add</button>
            </div>
        </div> 
        ))}
    </div>
)

export { MainPage };



