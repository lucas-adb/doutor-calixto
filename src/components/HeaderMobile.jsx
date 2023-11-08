import React from "react";
import { MdClear, MdDensityMedium } from "react-icons/md";

export function HeaderMobile() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=556298406537&text=Ol%C3%A1%21+Gostaria+de+marcar+uma+consulta+com+o+Dr.+Cl%C3%A1udio+Calixto';
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <a href="/" className="fw-500 text-dark fs-500 logo-mobile">
        Dr. Cláudio Calixto
      </a>
      <input
        type="checkbox"
        name="checkbox"
        id="hamburguer-menu"
        className="invisible-input"
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="hamburguer-menu" className="hamburguer-menu-label">
        { checked ? <MdClear className="hamburguer-menu-icon"/> : <MdDensityMedium className="hamburguer-menu-icon"/> }
      </label>
      <ul className="hamburguer-menu-list no-style-list">
        <li>
          <a href={whatsappLink} className="link-header text-dark">
            Marque sua consulta
          </a>
        </li>
        <li>
          <a href="#sobre" className="link-header text-dark">
            Sobre
          </a>
        </li>
        <li>
          <a href="#servicos" className="link-header text-dark">
            Serviços
          </a>
        </li>
        <li>
          <a href="/blog" className="link-header text-dark">
            Blog
          </a>
        </li>
        <li>
          <a href="#contato" className="link-header text-dark">
            Contato
          </a>
        </li>
      </ul>
    </>
  );
}
