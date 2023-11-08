import { ImageSlider } from "../components/ImageSlider";

export function Testimonial() {
  const testimonials = [
    {
      testimonial: '"Médico excelente. Educado e atencioso.Tranquilo e querido. Recomendo muito, faltam médicos humanos como ele que atendem com atenção e carinho. Ele explica o atendimento do começo ao fim e não mede esforços para se fazer entendido. Atendeu minhas expectativas e foi além, por isso eu recomendo ele a quem está necessitando de um médico que não mede esforços para ajudar o bem estar e saúde do outro."',
      name: "Patrícia de Souza",
    },
    {
      testimonial: '"Dr. Cláudio é muito atencioso, um bom ouvinte e pontual. Minha consulta online foi bem bacana, estou animada para o meu retorno! Sempre pronto para responder minhas dúvidas por whatsapp, é um médico presente."',
      name: "Priscila Carvalho",
    },
    {
      testimonial: '"Dr. Cláudio é super atencioso e criterioso. A consulta foi excelente e o resultado do tratamento maravilhoso. Ele também reponde prontamente pelo WhatsApp. Simpático e competente. Me transmitiu muita confiança. Recomendo."',
      name: "Ecilene Camargo",
    },
  ];

  return (
    <div className="bg-brown">
      <div className="container testimonial-container">
        <h1>Depoimentos</h1>
        <ImageSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
