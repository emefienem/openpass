import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'

interface TicketConfirmationEmailProps {
  userName: string
  eventTitle: string
  eventDate: string
  eventTime: string
  eventVenue: string | null
  qrCodeDataUrl: string
  registrationId: string
}

export function TicketConfirmationEmail({
  userName,
  eventTitle,
  eventDate,
  eventTime,
  eventVenue,
  qrCodeDataUrl,
  registrationId,
}: TicketConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your ticket for {eventTitle} is confirmed ✓</Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>OpenPass</Heading>
          </Section>

          {/* Hero */}
          <Section style={hero}>
            <Heading style={heroTitle}>You're in! 🎉</Heading>
            <Text style={heroSubtitle}>
              Hi {userName}, your registration for <strong>{eventTitle}</strong> is confirmed.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Event Details */}
          <Section style={section}>
            <Heading as="h3" style={sectionTitle}>
              Event Details
            </Heading>

            <Text style={label}>Event</Text>
            <Text style={value}>{eventTitle}</Text>

            <Text style={label}>Date & Time</Text>
            <Text style={value}>
              {eventDate} — {eventTime}
            </Text>

            {eventVenue && (
              <>
                <Text style={label}>Venue</Text>
                <Text style={value}>{eventVenue}</Text>
              </>
            )}
          </Section>

          <Hr style={divider} />

          {/* QR Section */}
          <Section style={qrSection}>
            <Heading as="h3" style={sectionTitle}>
              Your Entry QR Code
            </Heading>

            <Text style={qrText}>Present this QR code at the entrance to check in.</Text>

            <Img src={qrCodeDataUrl} width={200} height={200} alt="QR Code" style={qrImage} />

            <Text style={idText}>Registration ID: {registrationId.slice(0, 8).toUpperCase()}</Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This ticket was issued by OpenPass. Do not share this QR code.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Arial, sans-serif',
}

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
}

const header = {
  backgroundColor: '#0f172a',
  padding: '24px',
}

const logo = {
  color: '#ffffff',
  fontSize: '20px',
  margin: 0,
}

const hero = {
  padding: '24px',
  backgroundColor: '#f8fafc',
}

const heroTitle = {
  fontSize: '24px',
  margin: '0 0 8px',
  color: '#0f172a',
}

const heroSubtitle = {
  fontSize: '14px',
  margin: 0,
  color: '#475569',
}

const divider = {
  borderColor: '#e2e8f0',
}

const section = {
  padding: '24px',
}

const sectionTitle = {
  fontSize: '14px',
  textTransform: 'uppercase' as const,
  color: '#64748b',
  marginBottom: '12px',
}

const label = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '8px 0 2px',
}

const value = {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  color: '#0f172a',
}

const qrSection = {
  padding: '24px',
  textAlign: 'center' as const,
}

const qrText = {
  fontSize: '14px',
  color: '#64748b',
  marginBottom: '16px',
}

const qrImage = {
  margin: '0 auto',
  display: 'block',
  border: '8px solid #f1f5f9',
  borderRadius: '8px',
}

const idText = {
  fontSize: '12px',
  color: '#94a3b8',
  marginTop: '12px',
}

const footer = {
  padding: '24px',
  backgroundColor: '#f8fafc',
}

const footerText = {
  fontSize: '12px',
  textAlign: 'center' as const,
  color: '#94a3b8',
}
