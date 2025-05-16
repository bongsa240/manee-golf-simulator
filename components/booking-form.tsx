"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { mockWhatsAppService } from "@/lib/mock-whatsapp-service"
import { User, Mail, Phone, Users } from "lucide-react"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    players: "1",
    whatsappConsent: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, whatsappConsent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock WhatsApp service integration
      if (formData.whatsappConsent) {
        await mockWhatsAppService.sendBookingConfirmation({
          phone: formData.phone,
          name: formData.name,
          bookingDetails: "Golf Simulator - Tomorrow at 2:00 PM", // This would be dynamic in the real implementation
        })
      }

      toast({
        title: "Booking Successful!",
        description: "You will receive a confirmation via WhatsApp shortly.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        players: "1",
        whatsappConsent: true,
      })
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <User className="h-4 w-4" />
          </div>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Uncle Nai"
            className="pl-9 h-9 text-sm border-gray-200 rounded"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail className="h-4 w-4" />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="aiden@maneegroup.com"
            className="pl-9 h-9 text-sm border-gray-200 rounded"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone className="h-4 w-4" />
          </div>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="pl-9 h-9 text-sm border-gray-200 rounded"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="players" className="text-sm font-medium text-gray-700">
          Number of Players
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Users className="h-4 w-4" />
          </div>
          <Input
            id="players"
            name="players"
            type="number"
            min="1"
            max="4"
            value={formData.players}
            onChange={handleChange}
            className="pl-9 h-9 text-sm border-gray-200 rounded"
            required
          />
        </div>
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox
          id="whatsappConsent"
          checked={formData.whatsappConsent}
          onCheckedChange={handleCheckboxChange}
          className="data-[state=checked]:bg-[#b08d4c] data-[state=checked]:border-[#b08d4c] mt-1"
        />
        <Label htmlFor="whatsappConsent" className="text-xs text-gray-600">
          I consent to receive booking confirmations via WhatsApp
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full h-9 mt-2 bg-[#b08d4c] hover:bg-[#9a7b3e] rounded text-sm font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Complete Booking"}
      </Button>
    </form>
  )
}
