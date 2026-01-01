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
  onChange: (value: string) => void
}

export function DropdownMenuRadio({ onChange }: DropdownMenuRadioProps) {
  const [kelas, setKelas] = React.useState("")

  const handleChange = (value: string) => {
    setKelas(value)
    onChange(value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`bg-transparent transition-all hover:cursor-pointer hover:scale-105 text-lg ${
            kelas === "" && "text-slate-500"
          }`}
          variant="none"
        >
          {!kelas ? "Klik Disini" : kelas}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pilih Kelas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={kelas} onValueChange={handleChange}>
          <DropdownMenuRadioItem value="XII-RPL">XII-RPL</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="XII-TJKT 1">XII-TJKT 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="XII-TJKT 2">XII-TJKT 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
