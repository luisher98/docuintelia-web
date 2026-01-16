import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y condiciones de uso del sitio web de Docuintelia.",
};

export default function LegalPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1>Aviso Legal</h1>

          <p className="lead">
            En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico, se facilita la siguiente información:
          </p>

          <h2>Datos Identificativos</h2>

          <ul>
            <li>
              <strong>Denominación social:</strong> [Nombre de la empresa]
            </li>
            <li>
              <strong>NIF/CIF:</strong> [CIF de la empresa]
            </li>
            <li>
              <strong>Domicilio social:</strong> [Dirección completa]
            </li>
            <li>
              <strong>Email:</strong> info@estudiosdelterreno.com
            </li>
          </ul>

          <h2>Objeto</h2>

          <p>
            El presente sitio web tiene como finalidad informar sobre los
            servicios ofrecidos por Docuintelia, una plataforma de automatización
            de informes técnicos mediante inteligencia artificial.
          </p>

          <h2>Condiciones de Uso</h2>

          <p>
            El acceso a este sitio web es gratuito. La utilización de los
            contenidos y servicios del sitio web se realizará bajo la exclusiva
            responsabilidad del usuario.
          </p>

          <p>El usuario se compromete a:</p>

          <ul>
            <li>
              Hacer un uso adecuado de los contenidos y servicios que se ofrecen
              en el sitio web.
            </li>
            <li>
              No realizar actividades ilícitas o contrarias a la buena fe y al
              orden público.
            </li>
            <li>
              No difundir contenidos o propaganda de carácter racista, xenófobo,
              pornográfico, de apología del terrorismo o que atenten contra los
              derechos humanos.
            </li>
            <li>
              No provocar daños en los sistemas físicos y lógicos del sitio web
              o de terceros.
            </li>
          </ul>

          <h2>Propiedad Intelectual</h2>

          <p>
            Todos los contenidos del sitio web (textos, fotografías, gráficos,
            imágenes, tecnología, software, diseño, etc.) son propiedad de
            Docuintelia o de terceros que han autorizado su uso, estando
            protegidos por las leyes de propiedad intelectual e industrial.
          </p>

          <p>
            Queda prohibida la reproducción, distribución, comunicación pública
            y/o transformación de los contenidos sin la autorización expresa del
            titular.
          </p>

          <h2>Exclusión de Responsabilidad</h2>

          <p>
            Docuintelia no se hace responsable de los daños y perjuicios que
            pudieran derivarse de:
          </p>

          <ul>
            <li>
              Interferencias, interrupciones, fallos, omisiones, averías
              telefónicas, retrasos o bloqueos causados por deficiencias en las
              líneas y redes de telecomunicaciones.
            </li>
            <li>
              Intrusiones ilegítimas mediante el uso de programas malignos.
            </li>
            <li>Uso indebido del sitio web por parte del usuario.</li>
            <li>Errores de seguridad o navegación producidos por un mal funcionamiento del navegador o por el uso de versiones no actualizadas.</li>
          </ul>

          <h2>Legislación Aplicable</h2>

          <p>
            Las presentes condiciones de uso se rigen por la legislación española.
            Para cualquier controversia que pudiera derivarse del acceso o uso del
            sitio web, las partes se someten a la jurisdicción de los Juzgados y
            Tribunales del domicilio del usuario.
          </p>

          <h2>Modificaciones</h2>

          <p>
            Docuintelia se reserva el derecho de modificar el presente aviso legal
            para adaptarlo a novedades legislativas o jurisprudenciales, así como
            a prácticas de la industria.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </div>
  );
}
