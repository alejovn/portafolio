import React, { Component } from "react";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice_imagen: 0,
      imagenes: [
        {title: "|"},{title: "D|"},{title: "De|",},{title: "Des|",},{title: "Desa|",},{title: "Desar|",},
        {title: "Desarr|",},{title: "Desarro|",},{title: "Desarrol|",},{title: "Desarroll|",},
        {title: "Desarrolla|",},{title: "Desarrollad|",},{title: "Desarrollado|",},{title: "Desarrollador|",},
        {title: "Desarrollador |",},{title: "Desarrollador j|",},{title: "Desarrollador ju|",},{title: "Desarrollador jun|",},
        {title: "Desarrollador juni|",},{title: "Desarrollador junio|",},{title: "Desarrollador junior|",},
        {title: "Desarrollador junior.|",},{title: "Desarrollador junior.",},{title: "Desarrollador junior.",},
        {title: "Desarrollador junior.",}
      ],
      id_interval: null
    };
  }
  componentDidMount() {
    let id_interval = setInterval(() => {
      if (this.state.indice_imagen === this.state.imagenes.length - 1) {
        this.setState({ indice_imagen: 0 });
      } else {
        this.setState({ indice_imagen: this.state.indice_imagen + 1 });
      }
    }, 700);

    this.setState({ id_interval: id_interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.id_interval);
  }

  render() {
    return (
        <h2 className="h2-titulo" id="slider-title">
            {this.state.imagenes[this.state.indice_imagen].title}
        </h2>
    );
  }
}

export default Slide;