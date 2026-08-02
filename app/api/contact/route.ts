import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Validaciones básicas de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // 2. Envío de correo usando Resend API directamente con fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contacto Portafolio <onboarding@resend.dev>', // O tu dominio verificado
        to: process.env.CONTACT_EMAIL || 'oliverhernandezmoreno@gmail.com',
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <h3>Nuevo Mensaje de Contacto</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Error al enviar el email' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
