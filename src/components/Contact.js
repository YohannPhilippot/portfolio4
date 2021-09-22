import React from 'react';
import Loader from './Loader'
import emailjs from 'emailjs-com'

function Contact() {
    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_wugqyzn', 'template_kak3pec', e.target, 'user_jTXiichKMRWbz9nI75OHc')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Loader />
            <div className='docHeight' id='page'>
                <h2 className='text-center pt-5 h4 mx-3 mx-lg-0'>Envie de travailler avec moi ou d'en savoir plus sur moi? Remplissez donc ce formulaire !</h2>
                <form className='col col-lg-6 offset-lg-3 contactForm py-3 mt-5' id='contactForm' onSubmit={sendEmail}>
                    <label className='col-10 offset-1 col-md-6 offset-md-3' for='firstName'>
                        Nom 
                    </label>
                    <input className='col-10 offset-1 col-md-6 offset-md-3' type='text' id='name' name='name' required></input>
                    <br/>
                    <small className='col-6 text-danger'></small>
                    <br/>
                    
                    <label className='col-10 offset-1 col-md-6 offset-md-3' for='email'>
                    Adresse mail 
                    </label>
                    <input className='col-10 offset-1 col-md-6 offset-md-3' type='text' id='email' name='email' required></input>
                    <br/>
                    <small className='col-6 text-danger'></small>
                    <br/>
                    <label className='col-10 offset-1 col-md-6 offset-md-3' for='email'>
                    Message 
                    </label>
                    <textarea className='col-10 offset-1 col-md-6 offset-md-3' rows='4' type='text' id='message' name='message' required></textarea>
                    <br/>
                    <button type='submit' className='my-3 col-10 offset-1 col-md-6 offset-md-3 col-md-4 bg-button rounded' >
                        Envoyer le message !
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;