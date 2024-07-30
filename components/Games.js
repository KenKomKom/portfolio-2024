import { poppins, jose } from '@/fonts/fonts'
import React from 'react'

const Games = () => {
  return (
    <div className={`${poppins.className} bg-slate-400 text-slate-50 py-10 px-10`}>
        <p className={`font-bold ${jose.className} text-3xl`}>Games I have made</p>
        <div id="game-column">
            <div className=''>
                <h2 className='font-semibold pt-3 text-lg'>Galactic Dive</h2>
                <h3 className='text-[0.7rem]'>made in Unity</h3>
                <p className='text-sm'>
                    Go where no one has gone before by stomping and blasting your way into uncharted parts of the galaxy in this adrenaline pumping, panic inducing game
                </p>
                <iframe frameborder="0" src="https://itch.io/embed/2062266" ></iframe>
            </div>
            <div className='py-3'>
                <h2 className="font-semibold pt-3 text-lg">Awas Nabrak!</h2>
                <h3 className='text-[0.7rem]'>made in Unity</h3>
                <p className='text-sm'>
                    For those of you are looking for a challenging puzzle game... Come and try the game to solve the puzzles!
                </p>
                <iframe frameborder="0" src="https://itch.io/embed/2117372"></iframe>
            </div>
            <div className='py-3'>
                <h2 className="font-semibold pt-3 text-lg">Dungeon Knight</h2>
                <h3 className='text-[0.7rem]'>made in Godot</h3>
                <p className='text-sm'>
                    Hack and slash type game
                </p>
                <iframe frameborder="0" src="https://itch.io/embed/2579133"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Games