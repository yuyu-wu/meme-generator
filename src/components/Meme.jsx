import React from 'react'

export default function Meme() {
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder='Top text'
                    className='form-input'
                />
                <input 
                    type="text"
                    placeholder='Bottom text'
                    className='form-input'
                />
                <button className='form-button'>Get a new meme image</button>
            </div>

            <div className="meme">
                <img src="" alt="" className='meme-image' />
                <h2 className='meme-text-top'></h2>
                <h2 className='meme-text-bottom'></h2>
            </div>
        </main>
    )
}