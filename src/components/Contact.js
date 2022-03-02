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
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className={props.section5} id="section5">
            <div className="section5-fondo">
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <span className="l-br">-</span>
                <h1 className="h1-title">Contacto</h1>
                <div className="linea-habilidad"></div>
                <span className="l-br">-</span>
                <div ref={props.contacto_div} className="contacto-div">
                    <div className="row">
                        <div className="col-6">
                            <div className="contact-area">
                                <h1>Contáctame</h1>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                    <input type='hidden' name='contact_number' value={contactNumber} />
                                    <p>
                                        <label for="nombre" className="colocar_nombre">Nombre
                                            <span className="obligatorio">*</span>
                                        </label>
                                        {errors.user_name && errors.user_name.type === "required" && (
                                            <div role="alert">El nombre es requerido<br /></div>
                                        )}
                                        <input
                                            type='text'
                                            name='user_name'
                                            placeholder='Ingrese su nombre'
                                            maxLength='30'
                                            aria-invalid={errors.user_name ? "true" : "false"}
                                            {...register("user_name", {
                                                required: "Required",
                                            })} />
                                    </p>


                                    <p>
                                        <label for="nombre" className="colocar_nombre">Correo electrónico
                                            <span className="obligatorio">*</span>
                                        </label>
                                        {errors.user_email && errors.user_email.type === "required" && (
                                            <div role="alert">El correo es requerido<br /></div>
                                        )}
                                        <input
                                            type='email'
                                            name='user_email'
                                            placeholder='Ingrese su correo electrónico'
                                            maxLength='100'
                                            aria-invalid={errors.user_email ? "true" : "false"}
                                            {...register("user_email", {
                                                required: "Required",
                                            })} />

                                    </p>
                                    <p>
                                        <label for="nombre" className="colocar_nombre">Mensaje
                                            <span className="obligatorio">*</span>
                                        </label>
                                        {errors.message && errors.message.type === "required" && (
                                            <div role="alert">El mensaje es requerido<br /></div>
                                        )}
                                        <textarea
                                            name='message'
                                            placeholder='Ingrese el mensaje'
                                            maxLength='1500'
                                            aria-invalid={errors.message ? "true" : "false"}
                                            {...register("message", {
                                                required: "Required",
                                            })} />

                                    </p>
                                    <p className='message-chars-left'>{"Quedan " + messageCharsLeft + " caracteres"}</p>
                                    <button type="submit" className="btn-enviar">Enviar</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contact-area-con">
                                <div className="contact">
                                    <main>
                                        <section>
                                            <div className="content">
                                                <img src="img/foto.jpg" alt="Profile Image" />

                                                <aside>
                                                    <h1>Alejandro Valencia</h1>
                                                    <p>Hola, soy Alejandro Valencia y soy Programador Full Stack.</p>
                                                </aside>

                                                <button className={isActive ? 'active' : null} onClick={toggleClass}>
                                                    <span>Contáctame</span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                                                </button>
                                            </div>

                                            <div className={isActive ? 'active' : null} id="title"><p>Contáctame</p></div>
                                        </section>


                                    </main>

                                    <nav className={isActive ? 'active' : null}>
                                        <a href="#" className="gmail">
                                            <div className="icon">
                                                <img className="" src="img/email.png" />
                                            </div>

                                            <div className="content">
                                                <h1>Email</h1>
                                                <span>alejandrovalencia2011@gmial.com</span>
                                            </div>

                                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                                        </a>

                                        <a href="#" className="facebook">
                                            <div className="icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero" /></svg>
                                            </div>

                                            <div className="content">
                                                <h1>Facebook</h1>
                                                <span>Alejo Valencia</span>
                                            </div>

                                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                                        </a>

                                        <a href="#" className="twitter">
                                            <div className="icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero" /></svg>
                                            </div>

                                            <div className="content">
                                                <h1>Twitter</h1>
                                                <span>@Alejand93392546</span>
                                            </div>

                                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="l-br">-</span>
            <span className="l-br">-</span>
        </div>
    );
}

export default Contact;