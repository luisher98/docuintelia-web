import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos de Docuintelia. Información sobre el tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1>Política de Privacidad</h1>

          <p className="lead">
            En Docuintelia estamos comprometidos con la protección de tus datos
            personales. Esta política de privacidad describe cómo recopilamos,
            utilizamos y protegemos tu información.
          </p>

          <h2>Responsable del Tratamiento</h2>

          <ul>
            <li>
              <strong>Responsable:</strong> [Nombre de la empresa]
            </li>
            <li>
              <strong>NIF/CIF:</strong> [CIF de la empresa]
            </li>
            <li>
              <strong>Dirección:</strong> [Dirección completa]
            </li>
            <li>
              <strong>Email:</strong> info@estudiosdelterreno.com
            </li>
          </ul>

          <h2>Datos que Recopilamos</h2>

          <p>
            A través de nuestro formulario de contacto, recopilamos los
            siguientes datos:
          </p>

          <ul>
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Empresa (opcional)</li>
            <li>Teléfono (opcional)</li>
            <li>Mensaje</li>
          </ul>

          <h2>Finalidad del Tratamiento</h2>

          <p>Los datos personales que nos proporciones serán utilizados para:</p>

          <ul>
            <li>
              Responder a tus consultas y solicitudes de información sobre
              nuestros servicios.
            </li>
            <li>
              Enviarte información comercial sobre Docuintelia, siempre que nos
              hayas dado tu consentimiento.
            </li>
            <li>Gestionar la relación comercial, en su caso.</li>
          </ul>

          <h2>Base Legal</h2>

          <p>
            La base legal para el tratamiento de tus datos es tu consentimiento,
            otorgado al enviar el formulario de contacto. Puedes retirar tu
            consentimiento en cualquier momento.
          </p>

          <h2>Conservación de Datos</h2>

          <p>
            Conservaremos tus datos personales mientras exista una relación
            comercial o nos hayas dado tu consentimiento. Una vez finalizada la
            relación, los datos se conservarán durante los plazos legalmente
            establecidos.
          </p>

          <h2>Destinatarios</h2>

          <p>
            Tus datos no serán cedidos a terceros, salvo obligación legal.
            Utilizamos proveedores de servicios que pueden tener acceso a tus
            datos para prestarnos sus servicios (como el servicio de email),
            actuando como encargados del tratamiento.
          </p>

          <h2>Derechos del Usuario</h2>

          <p>
            De acuerdo con el Reglamento General de Protección de Datos (RGPD),
            tienes derecho a:
          </p>

          <ul>
            <li>
              <strong>Acceso:</strong> Conocer si estamos tratando tus datos y
              obtener una copia de los mismos.
            </li>
            <li>
              <strong>Rectificación:</strong> Solicitar la corrección de datos
              inexactos o incompletos.
            </li>
            <li>
              <strong>Supresión:</strong> Solicitar la eliminación de tus datos
              cuando ya no sean necesarios.
            </li>
            <li>
              <strong>Oposición:</strong> Oponerte al tratamiento de tus datos en
              determinadas circunstancias.
            </li>
            <li>
              <strong>Limitación:</strong> Solicitar la limitación del
              tratamiento en ciertos casos.
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir tus datos en un formato
              estructurado y de uso común.
            </li>
          </ul>

          <p>
            Para ejercer estos derechos, puedes contactar con nosotros en{" "}
            <a href="mailto:info@estudiosdelterreno.com">info@estudiosdelterreno.com</a>,
            indicando tu solicitud y adjuntando copia de tu documento de
            identidad.
          </p>

          <p>
            También tienes derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos (AEPD) si consideras que tus
            derechos no han sido atendidos correctamente.
          </p>

          <h2>Cookies</h2>

          <p>
            Este sitio web utiliza cookies técnicas necesarias para su
            funcionamiento. No utilizamos cookies de seguimiento ni publicidad.
          </p>

          <p>
            Las cookies técnicas son aquellas que permiten la navegación por el
            sitio web y la utilización de las diferentes opciones o servicios
            que en él existen.
          </p>

          <h2>Seguridad</h2>

          <p>
            Adoptamos las medidas técnicas y organizativas necesarias para
            proteger tus datos personales contra el acceso no autorizado, la
            pérdida o la destrucción. Los datos transmitidos a través de
            nuestro formulario de contacto se cifran mediante protocolo HTTPS.
          </p>

          <h2>Modificaciones</h2>

          <p>
            Nos reservamos el derecho de modificar esta política de privacidad
            para adaptarla a novedades legislativas o cambios en nuestros
            servicios. Te recomendamos revisarla periódicamente.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </div>
  );
}
