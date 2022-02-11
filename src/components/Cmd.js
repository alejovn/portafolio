import React, { Component } from "react";

class Cmd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice_imagen: 0,
      imagenes: [
        {title: "_"},{title: "j_"},{title: "ja_",},{title: "jav_",},{title: "java_",},{title: "javac_",},
        {title: "javac _",},{title: "javac m_",},{title: "javac mi_",},{title: "javac miP_",},
        {title: "javac miPr_",},{title: "javac miPro_",},{title: "javac miProy_",},{title: "javac miProye_",},
        {title: "javac miProyec_",},{title: "javac miProyect_",},{title: "javac miProyecto_",},{title: "javac miProyecto._",},
        {title: "javac miProyecto.j_",},{title: "javac miProyecto.ja_",},{title: "javac miProyecto.jav_",},
        {title: "javac miProyecto.java_",},{title: "javac miProyecto.java_",},{title: "javac miProyecto.java_",},
        {title: "javac miProyecto.java_",},
        {title: "_"},{title: "j_"},{title: "ja_",},{title: "jav_",},{title: "java_",},{title: "java_",},
        {title: "java _",},{title: "java m_",},{title: "java mi_",},{title: "java miP_",},
        {title: "java miPr_",},{title: "java miPro_",},{title: "java miProy_",},{title: "java miProye_",},
        {title: "java miProyec_",},{title: "java miProyect_",},{title: "java miProyecto_",},{title: "java miProyecto_",}
        ,{title: "java miProyecto_",},{title: "java miProyecto_",}

        
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
        <span ref={this.props.pDosCodigo}>
            {this.state.imagenes[this.state.indice_imagen].title}
        </span>
    );
  }
}

export default Cmd;