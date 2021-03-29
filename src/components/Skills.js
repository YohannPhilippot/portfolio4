import React from 'react';

import Loader from './Loader'

function Skills() {


    function circles(circle1, circle2) {
        let elemId = document.getElementById(circle1)
        let elemId2 = document.getElementById(circle2)
        console.log(elemId.id)
        elemId.classList.add('hidden')
        if (elemId.id !== 'click7') {
            elemId2.classList.remove('hidden')
        } 
    }

    function handleClick() {
        let click1 = document.getElementById('click1')
        let click2 = document.getElementById('click2')
        let click3 = document.getElementById('click3')
        let click4 = document.getElementById('click4')
        let click5 = document.getElementById('click5')
        let click6 = document.getElementById('click6')
        let click7 = document.getElementById('click7')

        if (!click1.classList.contains('hidden') && click2.classList.contains('hidden')){
            circles('click1', 'click2')
        } else if (!click2.classList.contains('hidden') && click3.classList.contains('hidden')){
            circles('click2', 'click3')
        } else if (!click3.classList.contains('hidden') && click4.classList.contains('hidden')){
            circles('click3', 'click4')
        } else if (!click4.classList.contains('hidden') && click5.classList.contains('hidden')){
            circles('click4', 'click5')
        } else if (!click5.classList.contains('hidden') && click6.classList.contains('hidden')){
            circles('click5', 'click6')
        } else if (!click6.classList.contains('hidden') && click7.classList.contains('hidden')){
            circles('click6', 'click7')
        } else {
            circles('click7', 'click7')
        }
            
    }

    return (

            
            <div className='docHeight skillsGame position-relative'>
                <Loader />
                <div id='page'>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--1' id='click1'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--2 hidden' id='click2'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--3 hidden' id='click3'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--4 hidden' id='click4'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--5 hidden' id='click5'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--6 hidden' id='click6'>
                        Cliquez-moi
                    </div>
                    <div onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--7 hidden' id='click7'>
                        Cliquez-moi
                    </div>
                </div>
                
            </div>
    )
    
    
   
}

export default Skills;