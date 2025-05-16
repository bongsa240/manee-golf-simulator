import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FacilityShowcase() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Our Facility</h2>
      </div>

      <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
        <Image src="/images/building.png" alt="Manee Residence" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-medium text-sm">Manee Residence</h3>
          <p className="text-white/80 text-xs">Premium Golf Simulator</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Located in the luxurious Manee Residence, our state-of-the-art golf simulator facility offers the ultimate
        indoor golfing experience with cutting-edge technology.
      </p>

      <Button variant="outline" size="sm" className="w-full text-sm h-8 border-gray-200">
        View Gallery
      </Button>
    </div>
  )
}
