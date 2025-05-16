import { GlobeIcon as GolfBall, Monitor, Users, Award, Clock, CreditCard } from "lucide-react"

export function GolfFeatures() {
  const features = [
    {
      icon: <GolfBall className="h-6 w-6 text-green-600" />,
      title: "Premium Simulators",
      description: "State-of-the-art TrackMan 4 simulators with over 100 world-class courses",
    },
    {
      icon: <Monitor className="h-6 w-6 text-green-600" />,
      title: "Shot Analysis",
      description: "Detailed shot tracking and swing analysis to improve your game",
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Group Play",
      description: "Accommodates up to 4 players per session for friendly competition",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Pro Instruction",
      description: "Optional lessons with PGA-certified instructors available",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Flexible Hours",
      description: "Open daily from 8 AM to 8 PM to fit your schedule",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      title: "Easy Booking",
      description: "Simple online reservation with WhatsApp confirmation",
    },
  ]

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-3">Experience Premium Golf Simulation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our state-of-the-art facility offers the ultimate indoor golfing experience with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
