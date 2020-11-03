import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_8pdpku8', e.target, 'user_GZnXJIepmlxah8GfNwA6D')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    }

    return (
        <>
            <form onSubmit = {sendEmail}>
                <div>
                    <div> 
                        <h3>let marccmarcc know who's bugging him</h3>
                        {/* <small>doesn't have to be your real name</small> */}
                        <input type = "text" name = "name" placeholder = "poopyface123"></input>
                    </div>
                    <div> 
                        <h3>Annoy marccmarcc with the most annoying shit ever</h3>
                        <textarea name = "message"> </textarea>
                    </div>
                    <div>
                        <input type = "submit" value = "Disturb marcc!"/>
                    </div>
                </div>
            </form>
        </>
    )
}
