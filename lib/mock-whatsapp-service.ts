// This is a mock service that simulates WhatsApp integration
// In a real implementation, this would connect to the WhatsApp Business API

interface BookingConfirmationParams {
  phone: string
  name: string
  bookingDetails: string
}

class MockWhatsAppService {
  async sendBookingConfirmation(params: BookingConfirmationParams): Promise<boolean> {
    console.log("MOCK: Sending WhatsApp confirmation to", params.phone)
    console.log(
      "MOCK: Message content:",
      `Hello ${params.name}, your booking for ${params.bookingDetails} has been confirmed. Thank you for choosing our Golf Simulator!`,
    )

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Simulate success (90% of the time)
    const isSuccess = Math.random() < 0.9

    if (!isSuccess) {
      throw new Error("Failed to send WhatsApp message")
    }

    return true
  }

  async sendReminder(params: BookingConfirmationParams): Promise<boolean> {
    console.log("MOCK: Sending WhatsApp reminder to", params.phone)
    console.log(
      "MOCK: Reminder content:",
      `Hello ${params.name}, this is a reminder for your upcoming booking: ${params.bookingDetails}. We look forward to seeing you!`,
    )

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return true
  }
}

export const mockWhatsAppService = new MockWhatsAppService()
