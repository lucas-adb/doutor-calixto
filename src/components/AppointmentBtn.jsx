export function AppointmentBtn() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=556298406537&text=Ol%C3%A1%21+Gostaria+de+marcar+uma+consulta+com+o+Dr.+Cl%C3%A1udio+Calixto';

  return (
    <button 
      className="cta-btn bg-mint text-white"
      onClick={() =>  window.location.href=whatsappLink}
    >
      Marque sua consulta
    </button>
  )
}