import { FiDroplet } from "react-icons/fi";
import { PiNeedleBold } from "react-icons/pi";
import { AppointmentBtn } from "./AppointmentBtn";

export function Services() {
  return (
    <div className="container services-container" id="servicos">
      <h1>Serviços</h1>

      <div className="services-two-icons-container">
        <div className="services-icon-container-2">
          <PiNeedleBold size={120} className="services-icon" />
          <div className="services-icon-container-3">
            <h2>Acupuntura</h2>
            <p>
              A Acupuntura é a arte de inserir agulhas em determinados pontos do
              corpo humano. Estimulando nervos, músculos, liberando substâncias
              químicas e assim tendo efeitos analgésicos, anti-inflamatórios,
              modulando o sistema endócrino e imunológico. Além de ser uma
              técnica milenar que faz parte da medicina tradicional chinesa, é
              uma especialidade médica desde 1995.
            </p>
            <p>
              <b>Áreas de atuação:</b> pediatria, psiquiatria e medicina de
              qualidade de vida.
            </p>
            <AppointmentBtn />
          </div>
        </div>

        <div className="services-icon-container-2">
          <FiDroplet size={120} className="services-icon" />
          <div className="services-icon-container-3">
            <h2>Homeopatia</h2>
            <p>
              A Homeopatia é um sistema de tratamento natural que trata o ser
              humano como um todo. É baseado na escolha de medicamentos que
              assemelham ao paciente. Tem o intuito de equilibrar o corpo físico
              e emocional. É uma especialidade médica desde 1980.
            </p>
            <p>
              <b>Áreas de atuação:</b> saúde da mulher e medicina da dor.
            </p>
            <AppointmentBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
