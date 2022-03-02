import React, { Component } from "react";
import Slider from "react-slick";

class Carousel_ extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
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
                        <div className="experiencia_">
                            <h4>Tic Tac Toe con React</h4>
                            <div className="img-experiencia">
                                <div className="img-habilidades">
                                    <img src="img/react.png" />
                                </div>
                                <div className="img-habilidades">
                                    <img src="img/plus_.png" />
                                </div>
                                <div className="img-habilidades">
                                    <img src="img/gato.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">

                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                    <div>
                        <div className="experiencia_">
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default Carousel_;

