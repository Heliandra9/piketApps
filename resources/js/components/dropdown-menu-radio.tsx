import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DropdownMenuRadioProps = {
  kelas: []
  onChange: (value: string) => void
}

export function DropdownMenuRadio({ kelas, onChange }: DropdownMenuRadioProps) {
  const [kelasValue, setKelasValue] = React.useState("")

  const handleChange = (value: string) => {
    setKelasValue(value)
    onChange(value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`bg-transparent transition-all hover:cursor-pointer hover:scale-105 text-lg ${
            kelasValue === "" && "text-slate-500"
          }`}
          variant="none"
        >
          {!kelasValue ? "Klik Disini" : kelasValue}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pilih Kelas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={kelasValue} onValueChange={handleChange}>
          {kelas.map(item=>(
            <DropdownMenuRadioItem value={item.nama_kelas}>{item.nama_kelas}</DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
