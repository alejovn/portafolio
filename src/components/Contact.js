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
                                                <img className="" src="img/email.png" />
                                            </div>

                                            <div className="content">
                                                <h1>Facebook</h1>
                                                <span>Alejo Valencia</span>
                                            </div>

                                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                                        </a>

                                        <a href="#" className="twitter">
                                            <div className="icon">
                                                <img className="" src="img/email.png" />
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