import { Resend } from "resend";
import { ContactFormData } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  const { nombre, email, empresa, telefono, mensaje } = data;

  const toEmail = process.env.CONTACT_EMAIL_TO || "info@docuintelia.com";

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
        Nuevo mensaje de contacto - Docuintelia
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">
            Nombre:
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
            ${nombre}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">
            Email:
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
            <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
          </td>
        </tr>
        ${
          empresa
            ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">
            Empresa:
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
            ${empresa}
          </td>
        </tr>
        `
            : ""
        }
        ${
          telefono
            ? `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">
            Teléfono:
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
            ${telefono}
          </td>
        </tr>
        `
            : ""
        }
      </table>

      <div style="margin-top: 20px;">
        <h3 style="color: #0f172a; margin-bottom: 10px;">Mensaje:</h3>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
          ${mensaje}
        </div>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
        Este mensaje fue enviado desde el formulario de contacto de docuintelia.com
      </div>
    </div>
  `;

  const textContent = `
Nuevo mensaje de contacto - Docuintelia

Nombre: ${nombre}
Email: ${email}
${empresa ? `Empresa: ${empresa}` : ""}
${telefono ? `Teléfono: ${telefono}` : ""}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de docuintelia.com
  `.trim();

  const { data: emailData, error } = await resend.emails.send({
    from: "Docuintelia <contacto@docuintelia.com>",
    to: [toEmail],
    replyTo: email,
    subject: `Nuevo contacto: ${nombre}${empresa ? ` - ${empresa}` : ""}`,
    html: htmlContent,
    text: textContent,
  });

  if (error) {
    console.error("Error sending email:", error);
    throw new Error("Error al enviar el email");
  }

  return emailData;
}
