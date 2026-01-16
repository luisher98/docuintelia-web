import { NextRequest, NextResponse } from "next/server";
import { contactFormSchemaWithRecaptcha } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();

    // Score >= 0.5 is considered human (reCAPTCHA v3)
    if (data.success && data.score >= 0.5) {
      return true;
    }

    console.log("reCAPTCHA verification failed:", data);
    return false;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchemaWithRecaptcha.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Datos de formulario inválidos",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(validationResult.data.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Verificación de seguridad fallida. Por favor, inténtalo de nuevo.",
        },
        { status: 400 }
      );
    }

    // Send the email (exclude recaptchaToken from email data)
    const { recaptchaToken: _, ...emailData } = validationResult.data;
    await sendContactEmail(emailData);

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Error al procesar el formulario. Por favor, inténtalo de nuevo.",
      },
      { status: 500 }
    );
  }
}
