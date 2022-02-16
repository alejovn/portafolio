import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import { init, sendForm } from 'emailjs-com';
init('user_bFzY9PgFVWSGIkOxJVtHP');

const Contacto = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;
    const [contactNumber, setContactNumber] = useState("000000");
    const form = useRef();

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }
    

    const onSubmit = (data) => {
        generateContactNumber();
        sendForm('service_vbm7rik', 'template_3aacv2n', '#contact-form')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
    }

    return (
        <div id="section5">
            <div className='contact'>
                <h1>Contact</h1>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type='hidden' name='contact_number' value={contactNumber} />
                    {errors.user_name && errors.user_name.type === "required" && (
                        <div role="alert">Name is required<br /></div>
                    )}
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        maxLength='30'
                        aria-invalid={errors.user_name ? "true" : "false"}
                        {...register("user_name", {
                            required: "Required",
                        })} />
                    <br />
                    {errors.user_email && errors.user_email.type === "required" && (
                        <div role="alert">Email is required<br /></div>
                    )}
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email'
                        maxLength='100'
                        aria-invalid={errors.user_email ? "true" : "false"}
                        {...register("user_email", {
                            required: "Required",
                        })} />

                    <br />
                    {errors.message && errors.message.type === "required" && (
                        <div role="alert">Message is required<br /></div>
                    )}
                    <textarea
                        name='message'
                        placeholder='Message'
                        maxLength='1500'
                        aria-invalid={errors.message ? "true" : "false"}
                        {...register("message", {
                            required: "Required",
                        })} />

                    <br />
                    <p className='message-chars-left'>{messageCharsLeft}</p>
                    <input type='submit' value='Send' />
                </form>
            </div>
        </div>
    );
}

export default Contacto;