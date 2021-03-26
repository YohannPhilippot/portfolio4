import React from 'react';
import { Link } from 'react-router-dom'

function About() {

    function hide(e) {
        e.classList.add('hidden')
    }

    function appearing(getElement, animation) {
        let element = document.getElementById(getElement)
        element.classList.add(animation)
        setTimeout(() => {hide(element)}, 1000)      
    } 
    

    function handleClick() {
        let button = document.getElementById('openButton')
        button.classList.add('disappear')
        setTimeout(() => {hide(button)}, 1000)

        appearing('rightPart', 'rightTranslate')
        appearing('leftPart', 'leftTranslate')
        
        let content = document.getElementById('content')
        setTimeout(() => {content.classList.remove('hidden')}, 1000)
        
        let desc = document.getElementById('desc')
        setTimeout(() => {desc.classList.remove('hidden')}, 1000)

        content.classList.add('content')
    }

    return (
        <div className='contain'>
            <div className="d-flex">
                <div className='leftPart bg-navbar border-right docHeight w-50' id='leftPart'></div>
                <div className='rightPart bg-navbar border-left docHeight w-50' id='rightPart'></div>
                <button onClick={() => {handleClick()}} className='position-absolute btn-center btn-rounded px-5 py-3' id='openButton'> Cliquez-moi pour ouvrir !</button>
            </div>
            <div className='docHeight hidden row' id='content'>
                <div className='col-6 marginx5 docHeight content-font shadow-lg d-flex flex-column justify-content-center'>
                    <h2 className='my-5'>A propos de moi</h2>
                    <p>
                        Après plusieurs années de bons et loyaux services dans la grande distribution, j'ai entamé en Août 2020 une reconversion professionnelle. Après 6 mois intenses de formation chez OpenClassrooms j'ai finalement obtenu mon Titre Professionnel de développeur Web.
                    </p>
                    <p>
                        Je suis quelqu'un d'organisé, aimant le challenge et régler des problèmes, je fais attention au moindre détail. Je suis passionné de jeux vidéos, de Formule 1, de séries TV et je pratique l'escalade.
                    </p>
                    
                    <p>
                        Je suis intéressé par tout l'univers frontend et prêt à travailler sur d'ambitieux projets, seul ou accompagné d'une équipe positive et enthousiaste.
                    </p>
                    <Link className='my-5' to='/contact'>Contactez-moi pour démarrer une nouvelle aventure !</Link>
                </div>
                <div className='col-6 marginx5 content-font docHeight d-flex flex-column justify-content-center' id='desc'>
                    <div>
                        <h3 className='my-3 fs4 formation'>Formation</h3>
                        <h4 className='my-5 formationName'>Formation Développeur Web, OpenClassrooms</h4>
                        <p className='my-4 formationDesc'>En août 2020 j'ai décidé de reprendre ma vie en main et grâce à OpenClassrooms j'ai pu développer mes compétences en développement Web.
                        Voilà un petit résumé de ma formation:    
                        </p>
                        <ul>
                            <li className='my-3 formationElem formationElem--1'>
                                Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS
                            </li>
                            <li className='my-3 formationElem formationElem--2'>
                                Ajouter du contenu audio et vidéo en HTML5
                            </li>
                            <li className='my-3 formationElem formationElem--3'>
                                Animer les pages web avec CSS3
                            </li>
                            <li className='my-3 formationElem formationElem--4'>
                                Appliquer les standards du web et les normes en vigueur
                            </li>
                            <li className='my-3 formationElem formationElem--5'>
                                Construire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette)
                            </li>
                            <li className='my-3 formationElem formationElem--6'>
                                Améliorer le référencement naturel en utilisant les balises selon leur sémantique
                            </li>
                            <li className='my-3 formationElem formationElem--7'>
                                Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript
                            </li>
                            <li className='my-3 formationElem formationElem--8'>
                                Se connecter à un service web pour exploiter des données tierces (API)
                            </li>
                            <li className='my-3 formationElem formationElem--9'>
                                Gérer les comptes utilisateurs
                            </li>
                            <li className='my-3 formationElem formationElem--10'>
                                Concevoir un site maintenable grâce à la gestion des erreurs et exceptions
                            </li>
                            <li className='my-3 formationElem formationElem--11'>
                                Créer, gérer et afficher le contenu d’une base de données
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;