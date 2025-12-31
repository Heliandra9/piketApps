"use client"

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

export function DropdownMenuRadio() {
  const [kelas, setKelas] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent hover:cursor-pointer hover:scale-105 active:bg-black text-lg" variant="none">{kelas}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pilih Kelas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={kelas} onValueChange={setKelas}>
          <DropdownMenuRadioItem value="XII-RPL">XII-RPL</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="XII-TJKT 1">XII-TJKT 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="XII-TJKT 2">XII-TJKT 2</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
