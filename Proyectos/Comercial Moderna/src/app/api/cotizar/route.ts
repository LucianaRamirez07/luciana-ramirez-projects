import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_TO = process.env.EMAIL_TO ?? 'luciana@comercialmoderna.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, whatsapp, tipo, cantidad, descripcion } = body

    if (!nombre || !empresa || !email || !whatsapp || !tipo || !descripcion) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Comercial Moderna Web <onboarding@resend.dev>',
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nueva cotización de ${empresa} — ${tipo}`,
      html: `
        <h2 style="color:#1A1A1A;font-family:sans-serif">Nueva solicitud de cotización</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr style="background:#f9f9f9"><td style="font-weight:bold;width:160px">Nombre</td><td>${nombre}</td></tr>
          <tr><td style="font-weight:bold">Empresa</td><td>${empresa}</td></tr>
          <tr style="background:#f9f9f9"><td style="font-weight:bold">Email</td><td>${email}</td></tr>
          <tr><td style="font-weight:bold">WhatsApp</td><td>${whatsapp}</td></tr>
          <tr style="background:#f9f9f9"><td style="font-weight:bold">Tipo</td><td>${tipo}</td></tr>
          <tr><td style="font-weight:bold">Cantidad</td><td>${cantidad || 'No especificada'}</td></tr>
          <tr style="background:#f9f9f9"><td style="font-weight:bold">Descripción</td><td>${descripcion}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }
}
