import React, { useEffect } from 'react';

import Loader from './Loader'

function Skills() {

    useEffect(() => {
        for (let i=1;i<8;i++) {
            let click = document.getElementById('click' + i)
            click.style.top = Math.random()*80 + '%'
            click.style.left = Math.random()*90 + '%'
        }
    },[])

    
    function contentAppear() {
        let content = document.getElementById('skills')
        content.classList.remove('hidden')
        content.classList.add('content')
        content.classList.add('skills')
    }

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
                <div id='page' >
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--1' id='click1'>
                        Cliquez moi
                    </button>
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--2 hidden' id='click2'>
                        Moi aussi !
                    </button>
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--3 hidden' id='click3'>
                        Et moi alors?
                    </button>
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--4 hidden' id='click4'>
                        C'est long?
                    </button>
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--5 hidden' id='click5'>
                        Je trouve aussi
                    </button>
                    <button onClick={handleClick} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--6 hidden' id='click6'>
                        Allez encore un
                    </button>
                    <button onClick={() => {handleClick(); contentAppear();}} className='content-font position-absolute d-flex justify-content-center align-items-center text-center click click--7 hidden' id='click7'>
                        Terminé !
                    </button>
                </div>
                <div className='hidden docHeight col col-md-10 offset-md-1' id='skills'>
                    <div className='d-flex flex-column flex-lg-row skillsElement py-3'>
                        <img className='col-lg-2 col-6 offset-3 skillImg skillImg--left' src='../../HTML5logo.png' alt='logo HTML5' />
                        <div className='col-lg-8 col pl-lg-5 ml-lg-5 text-center d-flex align-items-center'> Quand j'ai commencé à me former au métier de développeur web, le premier langage que j'ai découvert était le HTML5.
                         Après l'avoir découvert et pratiqué quelques temps j'ai acquis une maitrise de ce langage et je structure maintenant mes pages web en HTML5 d'une main de maître ! </div>
                    </div>
                    <div className='d-flex flex-column-reverse flex-lg-row skillsElement py-3'>
                        <div className='col-lg-8 col pl-lg-5 ml-lg-5 text-center d-flex align-items-center'> Mais le HTML5 ne fait pas tout, loin de là. Le visuel était inexistant. C'est là que j'ai découvert le CSS, quelle belle découverte. 
                        En plus d'embellir mes pages web de manière significative, cela m'a permis de pouvoir ajouter toutes sortes d'animations sur celles-ci. Peut-être parfois trop ..? </div>
                        <img className='col-lg-2 col-6 offset-3 offset-lg-1 skillImg' src='../../CSS3logo.png' alt='logo CSS3'/>
                    </div>
                    <div className='d-flex flex-column flex-lg-row skillsElement py-3'>
                        <img className='col-lg-2 col-6 offset-3 skillImg skillImg--left' src='../../JSlogo.png' alt='logo Javascript' />
                        <div className='col-lg-8 col pl-lg-5 ml-lg-5 text-center d-flex align-items-center'> Après m'être occupé du côté esthétique de la chose, il était temps de pouvoir implanter des fonctionnalités. Parce qu'un beau site c'est bien, 
                        mais un beau site fonctionnel c'est encore mieux ! C'est donc là que le Javascript s'est montré. Les débuts étaient quelques peu fastidieux mais, à force de travail 
                        et de détermination, la bête a finalement été domptée. 
                         </div>
                    </div>
                    <div className='d-flex flex-column-reverse flex-lg-row skillsElement py-3'>
                        <div className='col-lg-8 col pl-lg-5 ml-lg-5 text-center d-flex align-items-center'> Une fois le Javascript compris et maîtrisé, il était temps de me tourner vers l'apprentissage d'un framework, après avoir longuement hésité, 
                        j'ai décidé de me tourner vers ReactJS. Pourquoi React me direz-vous? Parce que c'est un framework en constante évolution et sa lisibilité est un des atouts dont je suis tombé amoureux !</div>
                        <img className='col-lg-2 col-6 offset-3 offset-lg-1 skillImg' src='../../ReactJs.png' alt='logo React JS'/>
                    </div>
                    <div className='d-flex flex-column flex-lg-row skillsElement py-5'>
                        <img className='col-lg-2 col-6 offset-3 skillImg skillImg--left' src='../../mySQL.png' alt='logo mySQL' />
                        <div className='col-lg-8 col pl-lg-5 ml-lg-5 text-center d-flex align-items-center'> Et enfin, côté backend, il m'a fallu utiliser des bases de données relationnelles pour pouvoir stocker des données et les 
                        faire intéragir entre elles. Pour ce faire, j'ai été formé à utiliser MySQL.  </div>
                    </div>
                </div>
                
            </div>
    )
    
    
   
}

export default Skills;