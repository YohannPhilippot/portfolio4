import React from 'react';


function About() {

    
    

    function handleClick() {
        let button = document.getElementById('openButton')
        button.classList.add('disappear')
        function hide(e) {
            e.classList.add('hidden')
        }
        setTimeout(() => {hide(button)}, 1000)

        let rightPart = document.getElementById('rightPart')
        rightPart.classList.add('rightTranslate')
        setTimeout(() => {hide(rightPart)}, 1000)

        let leftPart = document.getElementById('leftPart')
        leftPart.classList.add('leftTranslate')
        setTimeout(() => {hide(leftPart)}, 1000)

        let content = document.getElementById('content')
        content.classList.remove('hidden')
    }

    return (
        <div>
            <div className="d-flex">
                <div className='leftPart bg-navbar border-right docHeight w-50' id='leftPart'></div>
                <div className='rightPart bg-navbar border-left docHeight w-50' id='rightPart'></div>
                <button onClick={() => {handleClick()}} className='position-absolute btn-center btn-rounded px-5 py-3' id='openButton'> Cliquez-moi pour ouvrir !</button>
            </div>
            <div className='content hidden' id='content'>
                <p>dddddddd</p>
            </div>
            
        </div>
    )
}

export default About;