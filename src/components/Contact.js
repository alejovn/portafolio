import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import { init, sendForm } from 'emailjs-com';
init('user_bFzY9PgFVWSGIkOxJVtHP');

const Contact = (props) => {

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
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
    return (
        <div ref={props.section5} id="section5">
            <div ref={props.contacto_div} className="contacto-div">
                <div className="row">
                    <div className="col-6">
                        <div className="contact">
                            <h1>Contáctame</h1>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                <input type='hidden' name='contact_number' value={contactNumber} />
                                <p>
                                    <label for="nombre" class="colocar_nombre">Nombre
                                        <span class="obligatorio">*</span>
                                    </label>
                                    {errors.user_name && errors.user_name.type === "required" && (
                                        <div role="alert">El nombre es requerido<br /></div>
                                    )}
                                    <input
                                        type='text'
                                        name='user_name'
                                        placeholder='Nombre'
                                        maxLength='30'
                                        aria-invalid={errors.user_name ? "true" : "false"}
                                        {...register("user_name", {
                                            required: "Required",
                                        })} />
                                </p>


                                <p>
                                    <label for="nombre" class="colocar_nombre">Nombre
                                        <span class="obligatorio">*</span>
                                    </label>
                                    {errors.user_email && errors.user_email.type === "required" && (
                                        <div role="alert">El correo es requerido<br /></div>
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

                                </p>
                                <p>
                                    <label for="nombre" class="colocar_nombre">Nombre
                                        <span class="obligatorio">*</span>
                                    </label>
                                    {errors.message && errors.message.type === "required" && (
                                        <div role="alert">El mensaje es requerido<br /></div>
                                    )}
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                        maxLength='1500'
                                        aria-invalid={errors.message ? "true" : "false"}
                                        {...register("message", {
                                            required: "Required",
                                        })} />

                                </p>
                                <p className='message-chars-left'>{messageCharsLeft}</p>
                                <button type="submit" className="btn-enviar"><span className="fa fa-eye"></span> Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;