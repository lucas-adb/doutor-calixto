import WidgetDoctoralia from "./WidgetDoctoralia";

export function About() {
  return (
    <div className="about-bg" id="sobre">
      <div className="container about-container">
        <div className="about-text-container">
          <h1>Sobre mim</h1>
          <p>
            Formado em Medicina na Universidade Federal de Goiás (UFG) em 2017,
            tendo cursado 1 ano em Saint Louis (EUA). Realizou estágios
            internacionais em Shanghai (China) e Bari (Itália). Cursou
            residência médica em Homeopatia no Hospital Universitário Gaffrée e
            Guinle (2018-2020). Pós-graduação em Acupuntura no Instituto de
            Acupuntura do Rio de Janeiro (2020-2022). Atualmente atua em
            consultório particular e atende qualquer faixa etária. Professor de
            Medicina na PUC-GO da disciplina de Semiologia.
          </p>
        </div>

        <div className="about-image-container">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=3164&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="about-photo"
          />
          <div className="about-widget">
            <WidgetDoctoralia />
          </div>
        </div>
      </div>
    </div>
  );
}
