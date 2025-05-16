import type { LightbulbIcon as LucideProps } from "lucide-react"

export function GolfIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 18v-6" />
      <path d="M8 18v-1" />
      <path d="M16 18v-1" />
      <path d="M12 12V3l8 4.5-8 4.5" />
      <path d="M2 22h20" />
      <path d="M2 15h20" />
    </svg>
  )
}
