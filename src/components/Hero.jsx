import doctor from "../assets/doctor-stock.jpeg";
import { AppointmentBtn } from "./AppointmentBtn";

export function Hero() {
  return (
    <div className="container flex wrap hero-container">
        <div className="flex vertical-text-layout two-blocks-layout">
          <h1 className="hero-title">
            Soluções naturais para uma vida saudável
          </h1>
          <p className="hero-description">
            Medicina integrativa, Homeopatia e acupuntura. Sed tincidunt nibh
            arcu, et venenatis tortor placerat ut. Aenean ullamcorper turpis ac
            vehicula viverra. Morbi placerat imperdiet facilisis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
          <AppointmentBtn />
        </div>
        <div className="two-blocks-layout">
          <img src={doctor} alt="" />
        </div>
      </div>
  )
}