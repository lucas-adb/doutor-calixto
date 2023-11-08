import React from 'react';

class WidgetDoctoralia extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.br/claudio-calixto-carlos-da-silva/homeopata-medico-acupunturista/goiania" rel="nofollow" data-zlw-doctor="claudio-calixto-carlos-da-silva" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Cláudio Calixto Carlos da Silva - Doctoralia.com.br</a>
      </div>
    );
  }
}

export default WidgetDoctoralia;