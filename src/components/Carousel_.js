import React from "react";
import Slider from "react-slick";

const Carousel_ = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container-experiencia">
            <Slider {...settings}>
                <div>
                    <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
                <div>
                <div className={"experiencia_ experiencia"+props.experiencia}>
                        <h4>Tic Tac Toe con React</h4>
                        <div className="img-experiencia">
                            <div className="img-ex2">
                                <img src="img/react.png" />
                            </div>
                            <div className="img-ex2-mas">
                                <img src="img/plus_.png" />
                            </div>
                            <div className="img-ex2">
                                <img src="img/gato.png" />
                            </div>
                        </div>
                        <div className={"footer-experiencia_ footer"+props.experiencia}>
                            <a href="https://alejovn.github.io/Gato/" target="_blank">Tic tac toe</a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default Carousel_;

