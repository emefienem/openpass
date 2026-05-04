import { Resend } from 'resend'
import QRCode from 'qrcode'
import { render } from '@react-email/render'
import { TicketConfirmationEmail } from '@openpass/email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendTicketConfirmationEmail({
  to,
  userName,
  eventTitle,
  eventStartAt,
  eventEndAt,
  eventVenue,
  qrCode,
  registrationId,
}: {
  to: string
  userName: string
  eventTitle: string
  eventStartAt: Date
  eventEndAt: Date
  eventVenue: string | null
  qrCode: string
  registrationId: string
}) {
  const qrCodeDataUrl = await QRCode.toDataURL(qrCode, {
    width: 400,
    margin: 2,
    color: { dark: '#0f172a', light: '#ffffff' },
  })

  function formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  function formatTime(start: Date, end: Date): string {
    const fmt = (d: Date) =>
      d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })
    return `${fmt(start)} - ${fmt(end)}`
  }

  const html = await render(
    TicketConfirmationEmail({
      userName,
      eventTitle,
      eventDate: formatDate(eventStartAt),
      eventTime: formatTime(eventStartAt, eventEndAt),
      eventVenue,
      qrCodeDataUrl,
      registrationId,
    })
  )

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'OpenPass tickets@openpass.app',
    to,
    subject: `Your ticket for ${eventTitle} ✓`,
    html,
  })

  if (error) {
    console.error('[sendTicketConfirmation] Resend error:', error)
  }
}
