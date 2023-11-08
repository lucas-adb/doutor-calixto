export function Footer() {
  return (
    <footer id="contato">
      <div className="footer-container container">
        <div className="flex footer-sections-container">
          <div className="flex footer-column">
            <h3>Serviços</h3>
            <p>Homeopatia</p>
            <p>Acupuntura</p>
          </div>

          <div className="flex footer-column">
            <h3>Contato</h3>
            <a
              href="https://www.doctoralia.com.br/claudio-calixto-carlos-da-silva/homeopata-medico-acupunturista/goiania"
              className="link-footer"
            >
              Doctoralia
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=556298406537&text=Ol%C3%A1%21+Gostaria+de+marcar+uma+consulta+com+o+Dr.+Cl%C3%A1udio+Calixto"
              className="link-footer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/dr.claudiocalixto/"
              className="link-footer"
            >
              Instagram
            </a>
          </div>

          <div className="flex footer-column">
            <h3>Horário de funcionamento:</h3>
            <div>
              <p>Segunda a Sexta: 9h-18h. Sábado: 9h-12h</p>
            </div>
          </div>

          <div className="flex footer-column">
            <h3>Localização:</h3>
            <div>
              <a
                href="https://maps.app.goo.gl/MB1iogXovxivjK5NA"
                className="link-footer"
              >
                R. S-2, 913 - St. Bela Vista. Goiânia - GO, 74823-430, Brasil
              </a>
            </div>
          </div>
        </div>

        <div className="flex footer-sign fs-200">
          <div className="margin-right-auto">
            <p>©2023 Dr. Cláudio Calixto. Todos os direitos reservados.</p>
          </div>
          <div>
            <p>Feito por Lucas Alves.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* <footer>
<div className="flex container footer-container text-white">
  <div className="flex footer-column">
    <h3>Serviços</h3>
    <p>Homeopatia</p>
    <p>Acupuntura</p>
  </div>

  <div className="flex footer-column">
    <h3>Horário de funcionamento:</h3>
    <div>
      <p>Segunda a Sexta: 9h-18h</p>
      <p>Sábado: 9h-12h</p>
    </div>
  </div>

  <div className="flex footer-column">
    <h3>Localização:</h3>
    <div>
      <p>R. S-2, 913 - St. Bela Vista</p>
      <p>Goiânia - GO, 74823-430, Brasil</p>
    </div>
  </div>

  <div className="flex footer-column">
    <h3>Contato</h3>
    <a href="">Doctoralia</a>
    <a href="">WhatsApp</a>
    <a href="">Instagram</a>
  </div>
</div>

<div className="container text-align-center text-white">
  <p>Feito por Lucas Alves</p>
  <p>©2023 Dr. Cláudio Calixto. Todos os direitos reservados</p>
</div>

</footer> */
}
