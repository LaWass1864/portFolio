import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".form-message")

        emailjs
            .sendForm('service_mxw5oru', 'template_rspn9qe', form.current, {
                publicKey: 'oCpRBtFl9XwOD5fyi',
            })
            .then((result) => {
                //  Si ca se passe bien on mets OK et pour le remettre a zero
                console.log(result.text);
                form.current.reset();
                formMess.innerHTML = "<p class='success'> Message envoyé ! </p>";
                //  Le message disparait au bout de 2 secondes et 5 millieme
                setTimeout(() => {
                  formMess.innerHTML = "";
                }, 2500)
              }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer </p>";
        
                setTimeout(() => {
                  formMess.innerHTML = "";
                }, 2500)
              });
          };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Nom prénom</label>
                <input type="text" name="name" required autoComplete='off' />
                <label>Email</label>
                <input type="email" name="email" required autoComplete='off' />
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" value="Envoyer" />
            </form>
            {/* ajouter un message si c'est reussi ou non  */}
            <div className="form-message"></div>
        </div>
    );
};

export default FormContact;