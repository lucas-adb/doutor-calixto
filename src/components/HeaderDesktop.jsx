import { AppointmentBtn } from "./AppointmentBtn";

export function HeaderDesktop() {
  return (
    <>
    <a href="/" className="fw-500 text-dark fs-500">
        Dr. Cláudio Calixto
      </a>
      <ul className="flex no-style-list header-list">
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
      <AppointmentBtn />
    </>
  )
}

