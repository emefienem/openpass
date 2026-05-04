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
    <div className="bg-gray-100 py-10 font-sans">
      <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow">
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6">
          <h1 className="text-white text-xl font-bold">OpenPass</h1>
        </div>

        {/* Hero */}
        <div className="px-8 py-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're in! 🎉</h2>
          <p className="text-gray-600">
            Hi {userName}, your registration for <strong>{eventTitle}</strong> is confirmed.
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Event Details */}
        <div className="px-8 py-6">
          <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Event Details</h3>

          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase">Event</p>
            <p className="font-semibold text-slate-900">{eventTitle}</p>
          </div>

          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase">Date & Time</p>
            <p className="font-semibold text-slate-900">
              {eventDate} - {eventTime}
            </p>
          </div>

          {eventVenue && (
            <div className="mb-4">
              <p className="text-xs text-gray-400 uppercase">Venue</p>
              <p className="font-semibold text-slate-900">{eventVenue}</p>
            </div>
          )}
        </div>

        <hr className="border-gray-200" />

        {/* QR Section */}
        <div className="px-8 py-6 text-center">
          <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">Your Entry QR Code</h3>

          <p className="text-gray-600 mb-4">Present this QR code at the entrance to check in.</p>

          <img
            src={qrCodeDataUrl}
            alt="QR Code"
            className="mx-auto border-8 border-gray-100 rounded-lg"
            width={200}
            height={200}
          />

          <p className="text-xs text-gray-400 mt-3 font-mono">
            Registration ID: {registrationId.slice(0, 8).toUpperCase()}
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 text-center">
          <p className="text-xs text-gray-400">
            This ticket was issued by OpenPass. Do not share this QR code.
          </p>
        </div>
      </div>
    </div>
  )
}
