import { TicketIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "../config"

type RegisterNavButtonProps = {
  label: string
}

export function RegisterNavButton({ label }: RegisterNavButtonProps) {
  return (
    <Button asChild size="icon" className="hidden rounded-full md:inline-flex">
      <a href={site.ticketUrl} aria-label={label} title={label}>
        <TicketIcon />
      </a>
    </Button>
  )
}
